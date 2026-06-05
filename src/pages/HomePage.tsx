import FeaturedGrid from "@/components/FeatureGrid";
import HeroSection from "@/components/HeroSection";
import { products } from "@/shared/products";

export default function HomePage() {
  return (
    <>
      <HeroSection />
        <FeaturedGrid products={products} />
    </>
  );
}
