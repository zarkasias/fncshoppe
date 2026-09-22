"use client";

import Image from "next/image";
import { useState } from "react";

import type { Product } from "@/shared/types";
import type { ProductFormImage } from "@/shared/admin-product-types";

import {
  createProductImage,
  getInitialProductImages,
} from "@/lib/admin/product-form-helpers";

type ProductImagesFormProps = {
  product: Product;
  action: (formData: FormData) => void | Promise<void>;
};

export default function ProductImagesForm({
  product,
  action,
}: ProductImagesFormProps) {
  const [images, setImages] = useState<ProductFormImage[]>(
    getInitialProductImages(product),
  );

  function updateImage(index: number, updates: Partial<ProductFormImage>) {
    setImages((current) =>
      current.map((image, itemIndex) =>
        itemIndex === index ? { ...image, ...updates } : image,
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
        ...createProductImage(product.id, current.length === 0),
        position: current.length,
      },
    ]);
  }

  return (
    <form action={action} className="space-y-6">
      <input type="hidden" name="id" value={product.id} />

      <input type="hidden" name="images" value={JSON.stringify(images)} />

      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-700">Images</h2>

          <p className="mt-1 text-sm text-gray-400">
            Manage the main image and gallery images.
          </p>
        </div>

        <button
          type="button"
          onClick={addImage}
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Add image
        </button>
      </div>

      {images.length === 0 && (
        <div className="rounded-xl border border-dashed border-gray-300 bg-white px-6 py-10 text-center text-sm text-gray-400">
          No product images have been added yet.
        </div>
      )}

      <div className="space-y-4">
        {images.map((image, index) => (
          <div
            key={image.clientId}
            className="rounded-xl border border-gray-200 bg-white p-4"
          >
            <div className="grid gap-4 sm:grid-cols-[120px_1fr]">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                {image.image_url ? (
                  <Image
                    src={image.image_url}
                    alt={image.alt_text ?? product.name}
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
                    className="w-fit rounded-md border border-red-600 px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50"
                  >
                    Remove image
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

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
