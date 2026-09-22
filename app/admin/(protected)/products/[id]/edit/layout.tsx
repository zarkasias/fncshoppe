import Link from "next/link";
import { notFound } from "next/navigation";

import ProductEditorNav from "@/components/admin/products/ProductEditorNav";

import { getAdminProductById } from "@/lib/services/admin-products-service";

type ProductEditLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductEditLayout({
  children,
  params,
}: ProductEditLayoutProps) {
  const { id } = await params;

  const product = await getAdminProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <Link
          href="/admin/products"
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          ← Back to products
        </Link>
      </div>

      <div>
        <p className="text-sm font-medium text-gray-400">Edit product</p>

        <h1 className="text-2xl font-semibold text-gray-700">{product.name}</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[180px_1fr]">
        <ProductEditorNav productId={product.id} />

        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}
