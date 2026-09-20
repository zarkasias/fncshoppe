import FeaturedGrid from "@/components/products/FeatureGrid";
import HeroSection from "@/components/HeroSection";
import { getPublishedProducts } from "@/lib/services/products-service";

export default async function HomePage() {
  const products = await getPublishedProducts();

  return (
    <>
      <HeroSection />
      <FeaturedGrid products={products} />
    </>
  );
}
