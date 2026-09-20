import { notFound } from "next/navigation";

import ProductPage from "@/components/ProductPage";
import { getProductById, getProductIds } from "@/shared/products";

export function generateStaticParams() {
  return getProductIds();
}

type ProductProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: ProductProps) {
  const { id } = await params;

  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductPage product={product} />;
}
