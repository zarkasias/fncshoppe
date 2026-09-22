import Link from "next/link";

import ProductDetailsForm from "@/components/admin/products/ProductDetailsForm";

import { getAllCategories } from "@/lib/services/admin-products-service";

import { createProduct } from "@/app/admin/(protected)/products/actions";

export default async function NewProductPage() {
  const categories = await getAllCategories();

  return (
    <div className="mx-auto max-w-4xl space-y-4">
      <div>
        <Link
          href="/admin/products"
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          ← Back to products
        </Link>
      </div>

      <div>
        <h1 className="text-2xl font-semibold text-gray-700">Add product</h1>

        <p className="mt-1 text-sm text-gray-400">
          Start with the basic product information.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-gray-100/80 p-6">
        <ProductDetailsForm
          categories={categories}
          action={createProduct}
          submitLabel="Create & continue"
        />
      </div>
    </div>
  );
}
