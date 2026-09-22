"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import type { Category, Product, ProductStatus } from "@/shared/types";
import type {
  ProductFormImage,
  ProductFormVariant,
} from "@/shared/admin-product-types";

import {
  createProductImage,
  createProductVariant,
  getInitialProductImages,
  getInitialProductVariants,
} from "@/lib/admin/product-form-helpers";

import { saveProduct } from "@/app/admin/(protected)/products/actions";

type ProductFormProps = {
  product?: Product;
  categories: Category[];
};

export default function ProductForm({ product, categories }: ProductFormProps) {
  const [name, setName] = useState(product?.name ?? "");
  const [slug, setSlug] = useState(product?.slug ?? "");
  const [description, setDescription] = useState(product?.description ?? "");
  const [categoryId, setCategoryId] = useState(product?.category_id ?? "");
  const [directSaleEnabled, setDirectSaleEnabled] = useState(
    product?.direct_sale_enabled ?? false,
  );
  const [status, setStatus] = useState<ProductStatus>(
    product?.status ?? "draft",
  );

  const [images, setImages] = useState<ProductFormImage[]>(
    getInitialProductImages(product),
  );

  const [variants, setVariants] = useState<ProductFormVariant[]>(
    getInitialProductVariants(product),
  );

  function updateImage(index: number, updates: Partial<ProductFormImage>) {
    setImages((current) =>
      current.map((image, itemIndex) =>
        itemIndex === index
          ? {
              ...image,
              ...updates,
            }
          : image,
      ),
    );
  }

  function setPrimaryImage(index: number) {
    setImages((current) =>
      current.map((image, itemIndex) => ({
        ...image,
        is_primary: itemIndex === index,
      })),
    );
  }

  function removeImage(index: number) {
    setImages((current) => {
      const next = current
        .filter((_, itemIndex) => itemIndex !== index)
        .map((image, itemIndex) => ({
          ...image,
          position: itemIndex,
        }));

      if (next.length > 0 && !next.some((image) => image.is_primary)) {
        next[0] = {
          ...next[0],
          is_primary: true,
        };
      }

      return next;
    });
  }

  function addImage() {
    setImages((current) => [
      ...current,
      {
        ...createProductImage(product?.id, current.length === 0),
        position: current.length,
      },
    ]);
  }

  function updateVariant(index: number, updates: Partial<ProductFormVariant>) {
    setVariants((current) =>
      current.map((variant, itemIndex) =>
        itemIndex === index ? { ...variant, ...updates } : variant,
      ),
    );
  }

  function addVariant() {
    setVariants((current) => [...current, createProductVariant(product?.id)]);
  }

  function removeVariant(index: number) {
    setVariants((current) =>
      current.filter((_, itemIndex) => itemIndex !== index),
    );
  }

  return (
    <form action={saveProduct} className="space-y-8">
      {product && <input type="hidden" name="id" value={product.id} />}

      <input type="hidden" name="images" value={JSON.stringify(images)} />

      <input type="hidden" name="variants" value={JSON.stringify(variants)} />

      <section className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">General</h2>

            <p className="text-sm text-gray-400">Basic product information.</p>
          </div>

          <div>
            <input
              type="hidden"
              name="direct_sale_enabled"
              value={directSaleEnabled ? "true" : "false"}
            />

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={directSaleEnabled}
                onChange={(event) => setDirectSaleEnabled(event.target.checked)}
              />

              <span>Sell directly on this site</span>
            </label>
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Name
          </label>

          <input
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Slug
          </label>

          <input
            name="slug"
            value={slug}
            onChange={(event) => setSlug(event.target.value)}
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Description
          </label>

          <textarea
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            rows={5}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>

        {directSaleEnabled && (
          <section className="space-y-4 border-t border-gray-200 pt-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-700">
                  Direct sale variants
                </h2>

                <p className="text-sm text-gray-400">
                  Configure pricing and inventory for direct purchases.
                </p>
              </div>

              <button
                type="button"
                onClick={addVariant}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Add variant
              </button>
            </div>

            {variants.length === 0 && (
              <div className="rounded-lg border border-dashed border-gray-300 px-6 py-10 text-center text-sm text-gray-400">
                No variants have been added yet.
              </div>
            )}

            {variants.map((variant, index) => (
              <div
                key={variant.clientId}
                className="space-y-4 rounded-lg border border-gray-200 bg-white p-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Variant name
                    </label>

                    <input
                      value={variant.name}
                      onChange={(event) =>
                        updateVariant(index, {
                          name: event.target.value,
                        })
                      }
                      placeholder="Default or Small / Black"
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
                      Price
                    </label>

                    <input
                      type="number"
                      step="0.01"
                      min="0"
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
                      Compare-at price
                    </label>

                    <input
                      type="number"
                      step="0.01"
                      min="0"
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
                      Inventory quantity
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
                  className="rounded-md border border-red-600 px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50"
                >
                  Remove variant
                </button>
              </div>
            ))}
          </section>
        )}

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Category
          </label>

          <select
            name="category_id"
            value={categoryId}
            onChange={(event) => setCategoryId(event.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          >
            <option value="">Select category</option>

            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Status
          </label>

          <select
            name="status"
            value={status}
            onChange={(event) => setStatus(event.target.value as ProductStatus)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          >
            <option value="draft">Draft</option>

            <option value="published">Published</option>

            <option value="archived">Archived</option>
          </select>
        </div>
      </section>

      <section className="space-y-4 border-t border-gray-200 pt-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">
              Product images
            </h2>

            <p className="text-sm text-gray-400">
              Manage the primary image and gallery images.
            </p>
          </div>

          <button
            type="button"
            onClick={addImage}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 sm:w-auto"
          >
            Add image
          </button>
        </div>

        {images.length === 0 && (
          <div className="rounded-lg border border-dashed border-gray-300 px-6 py-10 text-center text-sm text-gray-400">
            No product images have been added yet.
          </div>
        )}

        {images.map((image, index) => (
          <div
            key={image.clientId}
            className="rounded-lg border border-gray-200 bg-white p-4"
          >
            <div className="grid gap-4 sm:grid-cols-[120px_1fr]">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                {image.image_url ? (
                  <Image
                    src={image.image_url}
                    alt={
                      image.alt_text ?? product?.name ?? name ?? "Product image"
                    }
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center px-2 text-center text-xs text-gray-400">
                    No image
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Image URL
                  </label>

                  <input
                    value={image.image_url}
                    onChange={(event) =>
                      updateImage(index, {
                        image_url: event.target.value,
                      })
                    }
                    placeholder="/products/example/image.png"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Alt text
                  </label>

                  <input
                    value={image.alt_text ?? ""}
                    onChange={(event) =>
                      updateImage(index, {
                        alt_text: event.target.value,
                      })
                    }
                    placeholder="Describe this product image"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="radio"
                      name="primary_image"
                      checked={image.is_primary}
                      onChange={() => setPrimaryImage(index)}
                    />
                    Primary image
                  </label>

                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="w-fit rounded-md border border-red-600 px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700"
                  >
                    Remove image
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="flex flex-col gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600"
        >
          {product ? "Save changes" : "Create product"}
        </button>

        <Link
          href="/admin/products"
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-600 hover:bg-gray-50"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
