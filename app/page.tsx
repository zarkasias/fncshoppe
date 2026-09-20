import FeaturedGrid from "@/components/FeatureGrid";
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
