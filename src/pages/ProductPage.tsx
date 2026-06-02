import { Link, useParams } from "react-router-dom";
import { getProductById } from "@/shared/products";

export default function ProductPage() {
  const { id } = useParams();
  const productId = Number(id);
  const product = Number.isNaN(productId) ? undefined : getProductById(productId);

  if (!product) {
    return (
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <p className="text-gray-600">Product not found.</p>
        <Link to="/" className="mt-4 inline-block text-sm font-medium text-[#312fbc] hover:underline">
          Back to shop
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-6 pb-16">
      <Link to="/" className="text-sm font-medium text-[#312fbc] hover:underline">
        ← Back to shop
      </Link>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[#F1F5F9]">
          <img
            src={product.image_url}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h1 className="font-cinzel text-3xl font-bold text-gray-900">{product.name}</h1>
          {product.price_range && (
            <p className="mt-2 text-lg text-gray-600">{product.price_range}</p>
          )}
          <p className="mt-6 text-gray-600">
            Product detail page placeholder — add description, variants, and checkout here.
          </p>
        </div>
      </div>
    </section>
  );
}
