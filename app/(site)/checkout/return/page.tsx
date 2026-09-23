import Link from "next/link";
import { CheckCircle2, Clock3, XCircle } from "lucide-react";

import { stripe } from "@/lib/stripe/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

type CheckoutReturnPageProps = {
  searchParams: Promise<{
    session_id?: string;
  }>;
};

export default async function CheckoutReturnPage({
  searchParams,
}: CheckoutReturnPageProps) {
  const { session_id } = await searchParams;

  if (!session_id) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-16">
        <div className="rounded-xl border p-8">
          <XCircle className="mb-4 h-10 w-10" />

          <h1 className="text-2xl font-semibold">Checkout session not found</h1>

          <p className="mt-2 text-muted-foreground">
            We could not determine which checkout session to display.
          </p>

          <Link
            href="/"
            className="mt-6 inline-block text-sm font-medium underline"
          >
            Return to shop
          </Link>
        </div>
      </div>
    );
  }

  const session = await stripe.checkout.sessions.retrieve(session_id);

  const orderId = session.metadata?.order_id;

  if (!orderId) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-16">
        <div className="rounded-xl border p-8">
          <XCircle className="mb-4 h-10 w-10" />

          <h1 className="text-2xl font-semibold">
            Order information unavailable
          </h1>

          <p className="mt-2 text-muted-foreground">
            Your checkout session was found, but the associated order could not
            be identified.
          </p>
        </div>
      </div>
    );
  }

  const { data: order, error } = await supabaseAdmin
    .from("orders")
    .select(
      `
      id,
      status,
      customer_email,
      total,
      currency,
      created_at,
      paid_at,
      order_items (
        id,
        product_name,
        variant_name,
        quantity,
        unit_price,
        line_total
      )
      `,
    )
    .eq("id", orderId)
    .single();

  if (error || !order) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-16">
        <div className="rounded-xl border p-8">
          <XCircle className="mb-4 h-10 w-10" />

          <h1 className="text-2xl font-semibold">Order not found</h1>

          <p className="mt-2 text-muted-foreground">
            We found your checkout session, but could not load the order.
          </p>
        </div>
      </div>
    );
  }

  const isPaid = order.status === "paid";

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-16">
      <div className="rounded-xl border p-4 sm:p-8">
        <div className="flex items-start gap-3 sm:gap-4">
          {isPaid ? (
            <CheckCircle2 className="mt-0.5 h-8 w-8 shrink-0 sm:h-10 sm:w-10" />
          ) : (
            <Clock3 className="mt-0.5 h-8 w-8 shrink-0 sm:h-10 sm:w-10" />
          )}

          <h1 className="text-xl mt-1 font-semibold sm:text-2xl">
            {isPaid
              ? "Thank you for your order!"
              : "Your payment is being confirmed"}
          </h1>
        </div>

        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          {isPaid
            ? "Your payment was received successfully."
            : "Your payment was submitted successfully. We are waiting for confirmation from Stripe."}
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <span className="text-sm text-muted-foreground">Order number</span>

            <p className="break-all text-sm font-medium sm:text-base">
              {order.id}
            </p>
          </div>

          {order.customer_email && (
            <div className="min-w-0 sm:text-right">
              <span className="text-sm text-muted-foreground">Email</span>

              <p className="break-all text-sm font-medium sm:text-base">
                {order.customer_email}
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 border-t pt-4">
          <h2 className="font-semibold">Order summary</h2>

          <div className="mt-4 space-y-4">
            {order.order_items?.map((item) => (
              <div
                key={item.id}
                className="flex items-start justify-between gap-4"
              >
                <div className="min-w-0">
                  <p className="font-medium">{item.product_name}</p>

                  {item.variant_name !== "Default" && (
                    <p className="text-sm text-muted-foreground">
                      {item.variant_name}
                    </p>
                  )}

                  <p className="text-sm text-muted-foreground">
                    Qty: {item.quantity}
                  </p>
                </div>

                <p className="shrink-0 font-medium">
                  ${Number(item.line_total).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t pt-4">
          <span className="font-semibold">Total</span>

          <span className="font-semibold">
            ${Number(order.total).toFixed(2)}
          </span>
        </div>

        <Link
          href="/"
          className="mt-8 inline-block text-sm font-medium underline"
        >
          Continue shopping
        </Link>
      </div>
    </div>
  );
}
