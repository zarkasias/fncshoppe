import FeaturedGrid from "@/components/FeatureGrid";
import { products } from "@/shared/products";

export default function HomePage() {
  return <FeaturedGrid products={products} />;
}
