"use server";

import { headers } from "next/headers";

import { createClient } from "@/lib/supabase/server";
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
    throw new Error("Invalid quantity");
  }

  const supabase = await createClient();

  /*
   * Get the variant from Supabase.
   *
   * We do NOT accept a price from the browser.
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
   * Get the parent product separately.
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
   * Validate that this product can actually
   * be purchased directly.
   */
  const canPurchase =
    product.status === "published" ||
    (process.env.NODE_ENV === "development" && product.status === "draft");

  if (!canPurchase) {
    throw new Error("This product is not currently available for purchase.");
  }

  if (!product.direct_sale_enabled) {
    throw new Error("Direct purchasing is not enabled for this product.");
  }

  if (!variant.available) {
    throw new Error("This product option is not currently available.");
  }

  /*
   * Check inventory when inventory tracking
   * is enabled.
   */
  if (variant.track_inventory && variant.inventory_quantity < quantity) {
    throw new Error("There is not enough inventory available.");
  }

  const price = Number(variant.price);

  if (!Number.isFinite(price) || price <= 0) {
    throw new Error("This product does not have a valid price.");
  }

  /*
   * Stripe works with the smallest currency unit.
   *
   * $10.50 becomes 1050 cents.
   */
  const unitAmount = Math.round(price * 100);

  /*
   * Build the site's current absolute URL.
   *
   * This works locally and in production.
   */
  const requestHeaders = await headers();

  const origin =
    requestHeaders.get("origin") ??
    `${requestHeaders.get("x-forwarded-proto") ?? "http"}://${
      requestHeaders.get("host") ?? "localhost:3000"
    }`;

  /*
   * Create the Embedded Checkout Session.
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
      product_id: product.id,
      variant_id: variant.id,
    },

    return_url:
      `${origin}/checkout/return` + "?session_id={CHECKOUT_SESSION_ID}",
  });

  if (!session.client_secret) {
    throw new Error("Stripe did not return a checkout client secret.");
  }

  return session.client_secret;
}
