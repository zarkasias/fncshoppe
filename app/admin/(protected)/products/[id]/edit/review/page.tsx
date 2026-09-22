import { notFound } from "next/navigation";

import Image from "next/image";

import { getAdminProductById } from "@/lib/services/admin-products-service";

import { updateProductStatus } from "@/app/admin/(protected)/products/actions";

type ProductReviewPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductReviewPage({
  params,
}: ProductReviewPageProps) {
  const { id } = await params;

  const product = await getAdminProductById(id);

  if (!product) {
    notFound();
  }

  const primaryImage =
    product.images?.find((image) => image.is_primary) ??
    [...(product.images ?? [])].sort((a, b) => a.position - b.position)[0];

  const availableVariants =
    product.variants?.filter((variant) => variant.available) ?? [];

  const issues: string[] = [];

  if (!primaryImage) {
    issues.push("This product does not have a primary image.");
  }

  if (product.direct_sale_enabled && availableVariants.length === 0) {
    issues.push(
      "Direct selling is enabled but there are no available variants.",
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-700">Review</h2>

        <p className="mt-1 text-sm text-gray-400">
          Review this product before publishing.
        </p>
      </div>

      {issues.length > 0 && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <h3 className="font-medium text-amber-800">
            Product needs attention
          </h3>

          <ul className="mt-2 space-y-1 text-sm text-amber-700">
            {issues.map((issue) => (
              <li key={issue}>• {issue}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <div className="grid gap-6 sm:grid-cols-[160px_1fr]">
          <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
            {primaryImage?.image_url ? (
              <Image
                src={primaryImage.image_url}
                alt={primaryImage.alt_text ?? product.name}
                fill
                sizes="160px"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-gray-400">
                No image
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Product
              </p>

              <h3 className="mt-1 text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Category
              </p>

              <p className="mt-1 text-sm text-gray-700">
                {product.category?.name ?? "No category"}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Status
              </p>

              <p className="mt-1 text-sm capitalize text-gray-700">
                {product.status}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Selling
              </p>

              <p className="mt-1 text-sm text-gray-700">
                {product.direct_sale_enabled
                  ? "Direct sale enabled"
                  : "Direct sale disabled"}
              </p>
            </div>

            {product.direct_sale_enabled && (
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  Direct sale options
                </p>

                <div className="mt-2 space-y-2">
                  {availableVariants.length > 0 ? (
                    availableVariants.map((variant) => (
                      <div
                        key={variant.id}
                        className="flex items-center justify-between text-sm text-gray-700"
                      >
                        <span>{variant.name}</span>

                        <span>${Number(variant.price).toFixed(2)}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-400">
                      No available options
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <form
        action={updateProductStatus}
        className="space-y-4 border-t border-gray-200 pt-6"
      >
        <input type="hidden" name="id" value={product.id} />

        <div>
          <label
            htmlFor="status"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Status
          </label>

          <select
            id="status"
            name="status"
            defaultValue={product.status}
            className="w-full max-w-xs rounded-lg border border-gray-300 px-3 py-2"
          >
            <option value="draft">Draft</option>

            <option value="published">Published</option>

            <option value="archived">Archived</option>
          </select>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600"
          >
            Save status
          </button>
        </div>
      </form>
    </div>
  );
}
