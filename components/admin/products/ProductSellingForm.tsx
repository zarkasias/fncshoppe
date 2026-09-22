"use client";

import { useState } from "react";

import type { Product } from "@/shared/types";
import type {
  ProductFormVariant,
  ProductFormListing,
} from "@/shared/admin-product-types";

import {
  createProductListing,
  createProductVariant,
  getInitialProductListings,
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
  const initialVariants = getInitialProductVariants(product);

  const initialHasMultipleOptions =
    initialVariants.length > 1 ||
    (initialVariants.length === 1 && initialVariants[0].name !== "Default");

  const initialSimpleVariant: ProductFormVariant =
    !initialHasMultipleOptions && initialVariants.length === 1
      ? initialVariants[0]
      : {
          ...createProductVariant(product.id),
          name: "Default",
          available: true,
        };

  const [directSaleEnabled, setDirectSaleEnabled] = useState(
    product.direct_sale_enabled,
  );

  const [hasMultipleOptions, setHasMultipleOptions] = useState(
    initialHasMultipleOptions,
  );

  const [simpleVariant, setSimpleVariant] =
    useState<ProductFormVariant>(initialSimpleVariant);

  const [variants, setVariants] = useState<ProductFormVariant[]>(
    initialHasMultipleOptions ? initialVariants : [],
  );

  const [listings, setListings] = useState<ProductFormListing[]>(
    getInitialProductListings(product),
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

  function handleMultipleOptionsChange(checked: boolean) {
    setHasMultipleOptions(checked);

    if (checked && variants.length === 0) {
      setVariants([
        {
          ...createProductVariant(product.id),
          price: simpleVariant.price,
          available: true,
        },
      ]);
    }
  }

  function getListing(channel: "amazon" | "etsy") {
    return listings.find((listing) => listing.channel === channel);
  }

  function isListingEnabled(channel: "amazon" | "etsy") {
    return Boolean(getListing(channel));
  }

  function toggleListing(channel: "amazon" | "etsy", enabled: boolean) {
    if (enabled) {
      if (getListing(channel)) {
        return;
      }

      setListings((current) => [
        ...current,
        createProductListing(product.id, channel),
      ]);

      return;
    }

    setListings((current) =>
      current.filter((listing) => listing.channel !== channel),
    );
  }

  function updateListing(
    channel: "amazon" | "etsy",
    updates: Partial<ProductFormListing>,
  ) {
    setListings((current) =>
      current.map((listing) =>
        listing.channel === channel
          ? {
              ...listing,
              ...updates,
            }
          : listing,
      ),
    );
  }

  const submittedVariants = hasMultipleOptions ? variants : [simpleVariant];

  return (
    <form action={action} className="space-y-8">
      <input type="hidden" name="id" value={product.id} />

      <input
        type="hidden"
        name="direct_sale_enabled"
        value={directSaleEnabled ? "true" : "false"}
      />

      <input
        type="hidden"
        name="variants"
        value={JSON.stringify(submittedVariants)}
      />

      <input type="hidden" name="listings" value={JSON.stringify(listings)} />

      {/* Selling */}
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

      {/* Direct sale settings */}
      {directSaleEnabled && (
        <section className="space-y-4">
          {/* Multiple options toggle */}
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={hasMultipleOptions}
                onChange={(event) =>
                  handleMultipleOptionsChange(event.target.checked)
                }
                className="mt-1"
              />

              <div>
                <div className="font-medium text-gray-800">
                  This product has multiple options
                </div>

                <p className="mt-1 text-sm text-gray-500">
                  Use this for products with different sizes, styles, colors, or
                  other choices.
                </p>
              </div>
            </label>
          </div>

          {/* Simple product */}
          {!hasMultipleOptions && (
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <div>
                <h3 className="font-semibold text-gray-700">Price</h3>

                <p className="mt-1 text-sm text-gray-400">
                  Set the price customers will pay on this website.
                </p>
              </div>

              <div className="mt-4 max-w-xs">
                <label
                  htmlFor="simple-price"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Price
                </label>

                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    $
                  </span>

                  <input
                    id="simple-price"
                    type="number"
                    min="0"
                    step="0.01"
                    value={simpleVariant.price}
                    onChange={(event) =>
                      setSimpleVariant((current) => ({
                        ...current,
                        price: event.target.value,
                        name: "Default",
                        available: true,
                      }))
                    }
                    placeholder="0.00"
                    className="w-full rounded-lg border border-gray-300 py-2 pr-3 pl-7"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Multiple-option product */}
          {hasMultipleOptions && (
            <div className="space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-semibold text-gray-700">
                    Product options
                  </h3>

                  <p className="text-sm text-gray-400">
                    Configure pricing and inventory for each option.
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
                    No product options have been added yet.
                  </p>

                  <button
                    type="button"
                    onClick={addVariant}
                    className="mt-4 text-sm font-medium text-sky-600 hover:text-sky-700"
                  >
                    Add option
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
                        placeholder="Small, Medium, Blue..."
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
                        placeholder="Optional"
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
                        placeholder="Optional"
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
            </div>
          )}
        </section>
      )}

      <section className="space-y-4">
        <div>
          <h3 className="font-semibold text-gray-700">Marketplace listings</h3>

          <p className="mt-1 text-sm text-gray-400">
            Link this product to Amazon or Etsy.
          </p>
        </div>

        {/* Amazon */}
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={isListingEnabled("amazon")}
              onChange={(event) =>
                toggleListing("amazon", event.target.checked)
              }
              className="mt-1"
            />

            <div>
              <div className="font-medium text-gray-800">
                Available on Amazon
              </div>

              <p className="mt-1 text-sm text-gray-500">
                Customers can follow a link to purchase this product on Amazon.
              </p>
            </div>
          </label>

          {isListingEnabled("amazon") && (
            <div className="mt-5 space-y-4 border-t border-gray-100 pt-5">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Amazon URL
                </label>

                <input
                  type="url"
                  value={getListing("amazon")?.url ?? ""}
                  onChange={(event) =>
                    updateListing("amazon", {
                      url: event.target.value,
                    })
                  }
                  placeholder="https://www.amazon.com/..."
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Price
                  </label>

                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                      $
                    </span>

                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={getListing("amazon")?.price_min ?? ""}
                      onChange={(event) =>
                        updateListing("amazon", {
                          price_min: event.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-gray-300 py-2 pr-3 pl-7"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Maximum price
                  </label>

                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                      $
                    </span>

                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={getListing("amazon")?.price_max ?? ""}
                      onChange={(event) =>
                        updateListing("amazon", {
                          price_max: event.target.value,
                        })
                      }
                      placeholder="Optional"
                      className="w-full rounded-lg border border-gray-300 py-2 pr-3 pl-7"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Etsy */}
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={isListingEnabled("etsy")}
              onChange={(event) => toggleListing("etsy", event.target.checked)}
              className="mt-1"
            />

            <div>
              <div className="font-medium text-gray-800">Available on Etsy</div>

              <p className="mt-1 text-sm text-gray-500">
                Customers can follow a link to purchase this product on Etsy.
              </p>
            </div>
          </label>

          {isListingEnabled("etsy") && (
            <div className="mt-5 space-y-4 border-t border-gray-100 pt-5">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Etsy URL
                </label>

                <input
                  type="url"
                  value={getListing("etsy")?.url ?? ""}
                  onChange={(event) =>
                    updateListing("etsy", {
                      url: event.target.value,
                    })
                  }
                  placeholder="https://www.etsy.com/listing/..."
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Price
                  </label>

                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                      $
                    </span>

                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={getListing("etsy")?.price_min ?? ""}
                      onChange={(event) =>
                        updateListing("etsy", {
                          price_min: event.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-gray-300 py-2 pr-3 pl-7"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Maximum price
                  </label>

                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                      $
                    </span>

                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={getListing("etsy")?.price_max ?? ""}
                      onChange={(event) =>
                        updateListing("etsy", {
                          price_max: event.target.value,
                        })
                      }
                      placeholder="Optional"
                      className="w-full rounded-lg border border-gray-300 py-2 pr-3 pl-7"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Actions */}
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
