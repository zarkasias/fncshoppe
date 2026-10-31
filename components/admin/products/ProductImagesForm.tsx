"use client";

import Image from "next/image";
import { useState } from "react";
import { ImagePlus, LoaderCircle, Upload } from "lucide-react";

import type { Product } from "@/shared/types";
import type { ProductFormImage } from "@/shared/admin-product-types";

import {
  createProductImage,
  getInitialProductImages,
} from "@/lib/admin/product-form-helpers";

import { createClient } from "@/lib/supabase/client";

const PRODUCT_IMAGE_BUCKET = "product-images";
const MAX_FILE_SIZE = 8 * 1024 * 1024;

const ALLOWED_IMAGE_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
]);

const FILE_EXTENSIONS: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/avif": "avif",
};

type ProductImagesFormProps = {
  product: Product;
  action: (formData: FormData) => void | Promise<void>;
};

export default function ProductImagesForm({
  product,
  action,
}: ProductImagesFormProps) {
  const [supabase] = useState(() => createClient());

  const [images, setImages] = useState<ProductFormImage[]>(
    getInitialProductImages(product),
  );

  const [uploadingClientIds, setUploadingClientIds] = useState<string[]>([]);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const isUploading = uploadingClientIds.length > 0;

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

  async function uploadImage(index: number, file: File) {
    const image = images[index];

    if (!image) {
      return;
    }

    setUploadError(null);

    if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
      setUploadError("Choose a JPEG, PNG, WebP, or AVIF image.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setUploadError("Images must be 8 MB or smaller.");
      return;
    }

    const extension = FILE_EXTENSIONS[file.type];

    if (!extension) {
      setUploadError("This image format is not supported.");
      return;
    }

    setUploadingClientIds((current) => [...current, image.clientId]);

    try {
      const storagePath = `${product.id}/${crypto.randomUUID()}.${extension}`;

      const { error } = await supabase.storage
        .from(PRODUCT_IMAGE_BUCKET)
        .upload(storagePath, file, {
          cacheControl: "31536000",
          contentType: file.type,
          upsert: false,
        });

      if (error) {
        throw new Error(error.message);
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from(PRODUCT_IMAGE_BUCKET).getPublicUrl(storagePath);

      updateImage(index, {
        storage_path: storagePath,
        image_url: publicUrl,
        alt_text:
          image.alt_text?.trim() ||
          file.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " "),
      });
    } catch (error) {
      setUploadError(
        error instanceof Error
          ? error.message
          : "The image could not be uploaded.",
      );
    } finally {
      setUploadingClientIds((current) =>
        current.filter((clientId) => clientId !== image.clientId),
      );
    }
  }

  return (
    <form action={action} className="space-y-6">
      <input type="hidden" name="id" value={product.id} />

      <input type="hidden" name="images" value={JSON.stringify(images)} />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-700">Images</h2>

          <p className="mt-1 text-sm text-gray-400">
            Upload the main product image and gallery images.
          </p>
        </div>

        <button
          type="button"
          onClick={addImage}
          disabled={isUploading}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ImagePlus className="h-4 w-4" aria-hidden="true" />
          Add image
        </button>
      </div>

      {uploadError && (
        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {uploadError}
        </div>
      )}

      {images.length === 0 && (
        <div className="rounded-xl border border-dashed border-gray-300 bg-white px-6 py-10 text-center text-sm text-gray-400">
          No product images have been added yet.
        </div>
      )}

      <div className="space-y-4">
        {images.map((image, index) => {
          const isImageUploading = uploadingClientIds.includes(image.clientId);

          return (
            <div
              key={image.clientId}
              className="rounded-xl border border-gray-200 bg-white p-4"
            >
              <div className="grid gap-5 sm:grid-cols-[150px_1fr]">
                <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-100 bg-gray-100">
                  {image.image_url ? (
                    <Image
                      src={image.image_url}
                      alt={image.alt_text ?? product.name}
                      fill
                      sizes="150px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-2 px-3 text-center text-xs text-gray-400">
                      <ImagePlus className="h-6 w-6" aria-hidden="true" />
                      Select an image
                    </div>
                  )}

                  {isImageUploading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-white/85 text-sm font-medium text-gray-600 backdrop-blur-sm">
                      <LoaderCircle
                        className="h-5 w-5 animate-spin text-sky-500"
                        aria-hidden="true"
                      />
                      Uploading
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor={`image-file-${image.clientId}`}
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Product image
                    </label>

                    <label
                      htmlFor={`image-file-${image.clientId}`}
                      className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-sky-300 bg-sky-50 px-4 py-4 text-sm font-medium text-sky-700 transition hover:border-sky-400 hover:bg-sky-100"
                    >
                      <Upload className="h-4 w-4" aria-hidden="true" />

                      {image.image_url ? "Replace image" : "Choose image"}
                    </label>

                    <input
                      id={`image-file-${image.clientId}`}
                      type="file"
                      accept="image/jpeg,image/png,image/webp,image/avif"
                      disabled={isImageUploading}
                      onChange={(event) => {
                        const file = event.target.files?.[0];

                        if (file) {
                          void uploadImage(index, file);
                        }

                        event.target.value = "";
                      }}
                      className="sr-only"
                    />

                    <p className="mt-1.5 text-xs text-gray-400">
                      JPEG, PNG, WebP, or AVIF. Maximum 8 MB.
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor={`image-alt-${image.clientId}`}
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Alt text
                    </label>

                    <input
                      id={`image-alt-${image.clientId}`}
                      value={image.alt_text ?? ""}
                      onChange={(event) =>
                        updateImage(index, {
                          alt_text: event.target.value,
                        })
                      }
                      placeholder="Describe this product image"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-700 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
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
                      disabled={isImageUploading}
                      className="w-fit rounded-md border border-red-600 px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Remove image
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:justify-end">
        <button
          type="submit"
          name="intent"
          value="save"
          disabled={isUploading}
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isUploading ? "Uploading…" : "Save"}
        </button>

        <button
          type="submit"
          name="intent"
          value="continue"
          disabled={isUploading}
          className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Save & continue
        </button>
      </div>
    </form>
  );
}
