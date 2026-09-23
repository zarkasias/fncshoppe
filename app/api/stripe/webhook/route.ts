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
    const session = event.data.object;

    /*
     * For fulfillment, make sure Stripe actually
     * considers the Checkout Session paid.
     */
    if (session.payment_status !== "paid") {
      return Response.json({
        received: true,
      });
    }

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

    const paymentIntentId =
      typeof session.payment_intent === "string"
        ? session.payment_intent
        : (session.payment_intent?.id ?? null);

    const customerEmail =
      session.customer_details?.email ?? session.customer_email ?? null;

    const { error } = await supabaseAdmin.rpc("fulfill_order", {
      p_order_id: orderId,
      p_customer_email: customerEmail,
      p_payment_intent_id: paymentIntentId,
    });

    if (error) {
      console.error("Could not fulfill paid order:", error);

      return new Response("Could not fulfill order.", {
        status: 500,
      });
    }
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
