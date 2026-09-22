import { notFound } from "next/navigation";

import ProductSellingForm from "@/components/admin/products/ProductSellingForm";

import { getAdminProductById } from "@/lib/services/admin-products-service";

import { updateProductSelling } from "@/app/admin/(protected)/products/actions";

type ProductSellingPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductSellingPage({
  params,
}: ProductSellingPageProps) {
  const { id } = await params;

  const product = await getAdminProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductSellingForm product={product} action={updateProductSelling} />;
}
