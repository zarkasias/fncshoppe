import ProductForm from "@/components/admin/products/ProductForm";
import { getAllCategories } from "@/lib/services/admin-products-service";

export default async function NewProductPage() {
  const categories = await getAllCategories();

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="mb-8 text-2xl font-semibold text-gray-700">Add product</h1>

      <ProductForm categories={categories} />
    </div>
  );
}
