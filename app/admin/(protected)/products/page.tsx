import Image from "next/image";
import Link from "next/link";

import { getAllProducts } from "@/lib/services/admin-products-service";

function getPrimaryImage(product: {
  images?: {
    image_url: string;
    alt_text: string | null;
    is_primary: boolean;
    position: number;
  }[];
}) {
  return (
    product.images?.find((image) => image.is_primary) ??
    [...(product.images ?? [])].sort((a, b) => a.position - b.position)[0]
  );
}

export default async function AdminProductsPage() {
  const products = await getAllProducts();

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-700">Products</h1>

          <p className="text-sm text-gray-400">Manage your catalog.</p>
        </div>

        <Link
          href="/admin/products/new"
          className="inline-flex w-full items-center justify-center rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600 sm:w-auto"
        >
          Add product
        </Link>
      </div>

      {/* Mobile */}
      <div className="space-y-3 sm:hidden">
        {products.map((product) => {
          const primaryImage = getPrimaryImage(product);

          return (
            <div
              key={product.id}
              className="rounded-xl border border-gray-200 bg-white p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  {primaryImage?.image_url ? (
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={primaryImage.image_url}
                        alt={primaryImage.alt_text ?? product.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-[10px] text-gray-400">
                      No image
                    </div>
                  )}

                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-gray-900">
                      {product.name}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      {product.category?.name ?? "—"}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      {product.direct_sale_enabled
                        ? "Direct sale enabled"
                        : "Marketplace only"}
                    </p>
                  </div>
                </div>

                <span className="shrink-0 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium capitalize text-gray-700">
                  {product.status}
                </span>
              </div>

              <div className="mt-4 border-t border-gray-100 pt-3">
                <Link
                  href={`/admin/products/${product.id}/edit`}
                  className="text-sm font-medium text-sky-600 hover:text-sky-700"
                >
                  Edit product
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tablet / Desktop */}
      <div className="hidden overflow-hidden rounded-xl border border-gray-200 bg-white sm:block">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Product
                </th>

                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Direct Sale
                </th>

                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Category
                </th>

                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Status
                </th>

                <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {products.map((product) => {
                const primaryImage = getPrimaryImage(product);

                return (
                  <tr
                    key={product.id}
                    className="odd:bg-white even:bg-gray-100/80"
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        {primaryImage?.image_url ? (
                          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                            <Image
                              src={primaryImage.image_url}
                              alt={primaryImage.alt_text ?? product.name}
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-[10px] text-gray-400">
                            No image
                          </div>
                        )}

                        <div className="min-w-0">
                          <div className="truncate text-sm font-medium text-gray-900">
                            {product.name}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-3">
                      {product.direct_sale_enabled ? (
                        <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                          Enabled
                        </span>
                      ) : (
                        <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                          Disabled
                        </span>
                      )}
                    </td>

                    <td className="px-4 py-3 text-sm text-gray-500">
                      {product.category?.name ?? "—"}
                    </td>

                    <td className="px-4 py-3">
                      <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium capitalize text-gray-700">
                        {product.status}
                      </span>
                    </td>

                    <td className="px-4 py-3 text-right">
                      <Link
                        href={`/admin/products/${product.id}/edit`}
                        className="text-sm font-medium text-sky-600 hover:text-sky-700"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
