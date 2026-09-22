import { notFound } from "next/navigation";

import ProductImagesForm from "@/components/admin/products/ProductImagesForm";

import { getAdminProductById } from "@/lib/services/admin-products-service";

import { updateProductImages } from "@/app/admin/(protected)/products/actions";

type ProductImagesPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductImagesPage({
  params,
}: ProductImagesPageProps) {
  const { id } = await params;

  const product = await getAdminProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductImagesForm product={product} action={updateProductImages} />;
}
