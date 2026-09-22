"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import type { Product, ProductVariant } from "@/shared/types";

type DirectPurchaseFormProps = {
  product: Product;
};

export default function DirectPurchaseForm({
  product,
}: DirectPurchaseFormProps) {
  const router = useRouter();

  const availableVariants = useMemo(
    () =>
      product.variants?.filter(
        (variant) =>
          variant.available &&
          (!variant.track_inventory || variant.inventory_quantity > 0),
      ) ?? [],
    [product.variants],
  );

  const [variantId, setVariantId] = useState(availableVariants[0]?.id ?? "");

  const [quantity, setQuantity] = useState(1);

  const selectedVariant =
    availableVariants.find((variant) => variant.id === variantId) ?? null;

  if (!product.direct_sale_enabled || availableVariants.length === 0) {
    return null;
  }

  function handleCheckout() {
    if (!selectedVariant) {
      return;
    }

    const params = new URLSearchParams({
      variantId: selectedVariant.id,
      quantity: String(quantity),
    });

    router.push(`/checkout?${params.toString()}`);
  }

  return (
    <div className="space-y-4 rounded-xl border border-gray-200 bg-white p-5">
      {availableVariants.length > 1 && (
        <div>
          <label
            htmlFor="variant"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Option
          </label>

          <select
            id="variant"
            value={variantId}
            onChange={(event) => setVariantId(event.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          >
            {availableVariants.map((variant) => (
              <option key={variant.id} value={variant.id}>
                {getVariantLabel(variant)}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="max-w-32">
        <label
          htmlFor="quantity"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Quantity
        </label>

        <input
          id="quantity"
          type="number"
          min="1"
          max={getMaximumQuantity(selectedVariant)}
          value={quantity}
          onChange={(event) => {
            const nextQuantity = Number(event.target.value);

            setQuantity(
              Number.isFinite(nextQuantity) ? Math.max(1, nextQuantity) : 1,
            );
          }}
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
        />
      </div>

      {selectedVariant && (
        <p className="text-lg font-semibold text-gray-800">
          ${Number(selectedVariant.price).toFixed(2)}
        </p>
      )}

      <button
        type="button"
        onClick={handleCheckout}
        disabled={!selectedVariant}
        className="w-full rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-600 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        Buy now
      </button>

      <p className="text-center text-xs text-gray-400">
        Secure checkout powered by Stripe
      </p>
    </div>
  );
}

function getVariantLabel(variant: ProductVariant) {
  const price = `$${Number(variant.price).toFixed(2)}`;

  return variant.name === "Default" ? price : `${variant.name} — ${price}`;
}

function getMaximumQuantity(variant: ProductVariant | null) {
  if (!variant) {
    return 1;
  }

  if (!variant.track_inventory) {
    return 10;
  }

  return Math.max(1, Math.min(variant.inventory_quantity, 10));
}
