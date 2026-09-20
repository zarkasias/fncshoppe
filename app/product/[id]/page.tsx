import { notFound } from "next/navigation";

import ProductPage from "@/components/ProductPage";
import { getProductById } from "@/lib/services/products-service";

// export function generateStaticParams() {
//   return getProductIds();
// }

type ProductProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: ProductProps) {
  const { id } = await params;

  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductPage product={product} />;
}
