import { revalidatePath } from "next/cache";
import Stripe from "stripe";

import { stripe } from "@/lib/stripe/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return new Response("Missing Stripe signature.", {
      status: 400,
    });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    return new Response("STRIPE_WEBHOOK_SECRET is not configured.", {
      status: 500,
    });
  }

  const body = await request.text();

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown webhook error.";

    console.error("Stripe webhook signature verification failed:", message);

    return new Response(`Webhook Error: ${message}`, {
      status: 400,
    });
  }

  if (event.type === "checkout.session.completed") {
    const eventSession = event.data.object;

    if (eventSession.payment_status !== "paid") {
      return Response.json({
        received: true,
      });
    }

    const session = await stripe.checkout.sessions.retrieve(eventSession.id, {
      expand: ["shipping_cost.shipping_rate"],
    });

    const orderId = session.metadata?.order_id;

    if (!orderId) {
      console.error(
        "Stripe Checkout Session is missing order_id metadata:",
        session.id,
      );

      return new Response("Missing order_id metadata.", {
        status: 400,
      });
    }

    const shippingDetails =
      session.collected_information?.shipping_details ?? null;

    if (!shippingDetails) {
      console.error(
        "Paid Stripe Checkout Session is missing shipping details:",
        session.id,
      );

      return new Response("Missing shipping details.", {
        status: 400,
      });
    }

    const paymentIntentId =
      typeof session.payment_intent === "string"
        ? session.payment_intent
        : (session.payment_intent?.id ?? null);

    const customerEmail =
      session.customer_details?.email ?? session.customer_email ?? null;

    const customerPhone = session.customer_details?.phone ?? null;

    const shippingRate = session.shipping_cost?.shipping_rate;

    const shippingMethod =
      typeof shippingRate === "string"
        ? shippingRate
        : (shippingRate?.display_name ?? null);

    const subtotal =
      session.amount_subtotal !== null ? session.amount_subtotal / 100 : null;

    const shippingAmount =
      (session.total_details?.amount_shipping ??
        session.shipping_cost?.amount_total ??
        0) / 100;

    const total =
      session.amount_total !== null ? session.amount_total / 100 : null;

    const { error: shippingUpdateError } = await supabaseAdmin
      .from("orders")
      .update({
        customer_phone: customerPhone,
        shipping_name: shippingDetails.name,
        shipping_address: shippingDetails.address,
        shipping_method: shippingMethod,
        shipping_amount: shippingAmount,
        ...(subtotal !== null ? { subtotal } : {}),
        ...(total !== null ? { total } : {}),
        updated_at: new Date().toISOString(),
      })
      .eq("id", orderId);

    if (shippingUpdateError) {
      console.error("Could not save shipping details:", shippingUpdateError);

      return new Response("Could not save shipping details.", {
        status: 500,
      });
    }

    const { error: fulfillmentError } = await supabaseAdmin.rpc(
      "fulfill_order",
      {
        p_order_id: orderId,
        p_customer_email: customerEmail,
        p_payment_intent_id: paymentIntentId,
      },
    );

    if (fulfillmentError) {
      console.error("Could not fulfill paid order:", fulfillmentError);

      return new Response("Could not fulfill order.", {
        status: 500,
      });
    }

    revalidatePath("/");
    revalidatePath("/product/[id]", "page");
  }

  if (event.type === "checkout.session.expired") {
    const session = event.data.object;

    const orderId = session.metadata?.order_id;

    if (!orderId) {
      console.error(
        "Expired Stripe Checkout Session is missing order_id metadata:",
        session.id,
      );

      return new Response("Missing order_id metadata.", {
        status: 400,
      });
    }

    const { error } = await supabaseAdmin
      .from("orders")
      .update({
        status: "cancelled",
        updated_at: new Date().toISOString(),
      })
      .eq("id", orderId)
      .eq("status", "pending");

    if (error) {
      console.error("Could not cancel expired order:", error);

      return new Response("Could not cancel expired order.", {
        status: 500,
      });
    }
  }

  return Response.json({
    received: true,
  });
}
