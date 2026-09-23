import { redirect } from "next/navigation";

import EmbeddedCheckoutForm from "@/components/checkout/EmbeddedCheckoutForm";
import CheckoutBackButton from "@/components/checkout/CheckoutButton";

type CheckoutPageProps = {
  searchParams: Promise<{
    variantId?: string;
    quantity?: string;
  }>;
};

export default async function CheckoutPage({
  searchParams,
}: CheckoutPageProps) {
  const params = await searchParams;

  const variantId = params.variantId?.trim() ?? "";

  const quantity = Number(params.quantity ?? "1");

  if (!variantId) {
    redirect("/");
  }

  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
    redirect("/");
  }

  return (
    <div className="mx-auto nax-w-4xl px-6 py-3">
      <CheckoutBackButton />

      <div className="mb-4">
        <h1 className="text-3xl font-semibold text-gray-700">Checkout</h1>

        <p className="mt-1 text-sm text-gray-500">
          Complete your purchase securely below.
        </p>
      </div>

      <EmbeddedCheckoutForm variantId={variantId} quantity={quantity} />
    </div>
  );
}
