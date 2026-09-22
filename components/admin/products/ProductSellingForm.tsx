"use client";

import { useState } from "react";

import type { Product } from "@/shared/types";
import type { ProductFormVariant } from "@/shared/admin-product-types";

import {
  createProductVariant,
  getInitialProductVariants,
} from "@/lib/admin/product-form-helpers";

type ProductSellingFormProps = {
  product: Product;
  action: (formData: FormData) => void | Promise<void>;
};

export default function ProductSellingForm({
  product,
  action,
}: ProductSellingFormProps) {
  const [directSaleEnabled, setDirectSaleEnabled] = useState(
    product.direct_sale_enabled,
  );

  const [variants, setVariants] = useState<ProductFormVariant[]>(
    getInitialProductVariants(product),
  );

  function updateVariant(index: number, updates: Partial<ProductFormVariant>) {
    setVariants((current) =>
      current.map((variant, itemIndex) =>
        itemIndex === index ? { ...variant, ...updates } : variant,
      ),
    );
  }

  function addVariant() {
    setVariants((current) => [...current, createProductVariant(product.id)]);
  }

  function removeVariant(index: number) {
    setVariants((current) =>
      current.filter((_, itemIndex) => itemIndex !== index),
    );
  }

  return (
    <form action={action} className="space-y-8">
      <input type="hidden" name="id" value={product.id} />

      <input
        type="hidden"
        name="direct_sale_enabled"
        value={directSaleEnabled ? "true" : "false"}
      />

      <input type="hidden" name="variants" value={JSON.stringify(variants)} />

      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-700">Selling</h2>

          <p className="mt-1 text-sm text-gray-400">
            Choose how customers can purchase this product.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={directSaleEnabled}
              onChange={(event) => setDirectSaleEnabled(event.target.checked)}
              className="mt-1"
            />

            <div>
              <div className="font-medium text-gray-800">
                Sell directly on this website
              </div>

              <p className="mt-1 text-sm text-gray-500">
                Customers can purchase this product without leaving the site.
              </p>
            </div>
          </label>
        </div>
      </section>

      {directSaleEnabled && (
        <section className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-semibold text-gray-700">
                Direct sale options
              </h3>

              <p className="text-sm text-gray-400">
                Configure pricing and inventory.
              </p>
            </div>

            <button
              type="button"
              onClick={addVariant}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Add option
            </button>
          </div>

          {variants.length === 0 && (
            <div className="rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center">
              <p className="text-sm text-gray-500">
                No direct-sale options have been added yet.
              </p>

              <button
                type="button"
                onClick={addVariant}
                className="mt-4 text-sm font-medium text-sky-600 hover:text-sky-700"
              >
                Add a price
              </button>
            </div>
          )}

          {variants.map((variant, index) => (
            <div
              key={variant.clientId}
              className="space-y-4 rounded-xl border border-gray-200 bg-white p-5"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Option name
                  </label>

                  <input
                    value={variant.name}
                    onChange={(event) =>
                      updateVariant(index, {
                        name: event.target.value,
                      })
                    }
                    placeholder="Default, Small, Medium..."
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Price
                  </label>

                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={variant.price}
                    onChange={(event) =>
                      updateVariant(index, {
                        price: event.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    SKU
                  </label>

                  <input
                    value={variant.sku}
                    onChange={(event) =>
                      updateVariant(index, {
                        sku: event.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Compare-at price
                  </label>

                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={variant.compare_at_price}
                    onChange={(event) =>
                      updateVariant(index, {
                        compare_at_price: event.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-6">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={variant.available}
                    onChange={(event) =>
                      updateVariant(index, {
                        available: event.target.checked,
                      })
                    }
                  />
                  Available
                </label>

                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={variant.track_inventory}
                    onChange={(event) =>
                      updateVariant(index, {
                        track_inventory: event.target.checked,
                      })
                    }
                  />
                  Track inventory
                </label>
              </div>

              {variant.track_inventory && (
                <div className="max-w-xs">
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Quantity
                  </label>

                  <input
                    type="number"
                    min="0"
                    value={variant.inventory_quantity}
                    onChange={(event) =>
                      updateVariant(index, {
                        inventory_quantity: Number(event.target.value),
                      })
                    }
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  />
                </div>
              )}

              <button
                type="button"
                onClick={() => removeVariant(index)}
                className="text-sm font-medium text-red-600 hover:text-red-700"
              >
                Remove option
              </button>
            </div>
          ))}
        </section>
      )}

      <div className="flex flex-col gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:justify-end">
        <button
          type="submit"
          name="intent"
          value="save"
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
        >
          Save
        </button>

        <button
          type="submit"
          name="intent"
          value="continue"
          className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600"
        >
          Save & continue
        </button>
      </div>
    </form>
  );
}
