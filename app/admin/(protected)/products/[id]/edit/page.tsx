import { notFound } from "next/navigation";

import ProductDetailsForm from "@/components/admin/products/ProductDetailsForm";

import {
  getAdminProductById,
  getAllCategories,
} from "@/lib/services/admin-products-service";

import { updateProductDetails } from "@/app/admin/(protected)/products/actions";

type EditProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditProductPage({
  params,
}: EditProductPageProps) {
  const { id } = await params;

  const [product, categories] = await Promise.all([
    getAdminProductById(id),
    getAllCategories(),
  ]);

  if (!product) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-700">Product details</h2>

        <p className="mt-1 text-sm text-gray-400">
          Basic information about this product.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <ProductDetailsForm
          product={product}
          categories={categories}
          action={updateProductDetails}
          submitLabel="Save & continue"
        />
      </div>
    </div>
  );
}
