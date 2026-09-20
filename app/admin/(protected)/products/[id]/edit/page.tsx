import { notFound } from "next/navigation";

import ProductForm from "@/components/admin/products/ProductForm";
import {
  getAdminProductById,
  getAllCategories,
} from "@/lib/services/admin-products-service";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditProductPage({ params }: Props) {
  const { id } = await params;

  const [product, categories] = await Promise.all([
    getAdminProductById(id),
    getAllCategories(),
  ]);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="mb-8 text-2xl font-semibold text-gray-700">
        Edit product
      </h1>

      <ProductForm product={product} categories={categories} />
    </div>
  );
}
