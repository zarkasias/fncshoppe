"use server";

import { headers } from "next/headers";

import { createClient } from "@/lib/supabase/server";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { stripe } from "@/lib/stripe/server";

type CreateCheckoutSessionInput = {
  variantId: string;
  quantity: number;
};

export async function createCheckoutSession({
  variantId,
  quantity,
}: CreateCheckoutSessionInput) {
  if (!variantId) {
    throw new Error("A product variant is required.");
  }

  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
    throw new Error("Invalid quantity.");
  }

  const supabase = await createClient();

  /*
   * Load variant from the public catalog data.
   */
  const { data: variant, error: variantError } = await supabase
    .from("product_variants")
    .select(
      `
        id,
        product_id,
        name,
        price,
        available,
        inventory_quantity,
        track_inventory
        `,
    )
    .eq("id", variantId)
    .single();

  if (variantError || !variant) {
    throw new Error("Product option could not be found.");
  }

  /*
   * Load parent product.
   */
  const { data: product, error: productError } = await supabase
    .from("products")
    .select(
      `
        id,
        name,
        status,
        direct_sale_enabled
        `,
    )
    .eq("id", variant.product_id)
    .single();

  if (productError || !product) {
    throw new Error("Product could not be found.");
  }

  /*
   * Validate direct purchase.
   */
  if (product.status !== "published") {
    throw new Error("This product is not currently available for purchase.");
  }

  if (!product.direct_sale_enabled) {
    throw new Error("Direct purchasing is not enabled for this product.");
  }

  if (!variant.available) {
    throw new Error("This product option is not currently available.");
  }

  if (variant.track_inventory && variant.inventory_quantity < quantity) {
    throw new Error("There is not enough inventory available.");
  }

  const price = Number(variant.price);

  if (!Number.isFinite(price) || price <= 0) {
    throw new Error("This product does not have a valid price.");
  }

  const subtotal = price * quantity;

  /*
   * Create our internal pending order BEFORE
   * sending the customer to Stripe.
   */
  const { data: order, error: orderError } = await supabaseAdmin
    .from("orders")
    .insert({
      status: "pending",
      currency: "USD",
      subtotal,
      total: subtotal,
    })
    .select("id")
    .single();

  if (orderError || !order) {
    throw new Error(orderError?.message ?? "Could not create the order.");
  }

  /*
   * Snapshot the purchased product data.
   *
   * We store names/prices here because those may
   * change in the catalog later.
   */
  const { error: orderItemError } = await supabaseAdmin
    .from("order_items")
    .insert({
      order_id: order.id,

      product_id: product.id,
      variant_id: variant.id,

      product_name: product.name,
      variant_name: variant.name,

      quantity,

      unit_price: price,
      line_total: subtotal,
    });

  if (orderItemError) {
    await supabaseAdmin.from("orders").delete().eq("id", order.id);

    throw new Error(orderItemError.message);
  }

  /*
   * Build return URL.
   */
  const requestHeaders = await headers();

  const origin =
    requestHeaders.get("origin") ??
    `${requestHeaders.get("x-forwarded-proto") ?? "http"}://${
      requestHeaders.get("host") ?? "localhost:3000"
    }`;

  const unitAmount = Math.round(price * 100);

  try {
    /*
     * Create Stripe Checkout Session.
     */
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded_page",

      mode: "payment",

      payment_method_types: ["card"],

      line_items: [
        {
          quantity,

          price_data: {
            currency: "usd",

            unit_amount: unitAmount,

            product_data: {
              name:
                variant.name === "Default"
                  ? product.name
                  : `${product.name} - ${variant.name}`,
            },
          },
        },
      ],

      metadata: {
        order_id: order.id,
        product_id: product.id,
        variant_id: variant.id,
      },

      return_url:
        `${origin}/checkout/return` + "?session_id={CHECKOUT_SESSION_ID}",
    });

    if (!session.client_secret) {
      throw new Error("Stripe did not return a checkout client secret.");
    }

    /*
     * Save Stripe session ID onto our order.
     */
    const { error: sessionUpdateError } = await supabaseAdmin
      .from("orders")
      .update({
        stripe_checkout_session_id: session.id,
        updated_at: new Date().toISOString(),
      })
      .eq("id", order.id);

    if (sessionUpdateError) {
      throw new Error(sessionUpdateError.message);
    }

    return session.client_secret;
  } catch (error) {
    /*
     * Stripe session creation failed.
     *
     * Remove the pending order so we don't leave
     * junk test/failed checkout records behind.
     */
    await supabaseAdmin.from("orders").delete().eq("id", order.id);

    throw error;
  }
}
