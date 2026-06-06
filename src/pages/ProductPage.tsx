import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Shield } from "lucide-react";
import ProductInteriorGallery from "@/components/ProductInteriorGallery";
import { getProductById } from "@/shared/products";
import type { Product } from "@/shared/types";

function formatCategory(type: Product["type"]) {
  if (!type) return null;
  return type.replace(/-/g, " ");
}

function interiorGalleryTitle(type: Product["type"]) {
  if (type === "journal") return "Inside the journal";
  return "Gallery";
}

export default function ProductPage() {
  const { id } = useParams();
  const productId = Number(id);
  const product = Number.isNaN(productId) ? undefined : getProductById(productId);

  if (!product) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 pb-20">
        <p className="text-gray-500">Product not found</p>
        <Link to="/" className="text-sm font-medium text-[#38BDF8] hover:underline">
          Back to shop
        </Link>
      </div>
    );
  }

  const isAvailable = product.available !== false;
  const interiorImages = product.interiorImages ?? [];
  const store = product.link?.includes("amazon") ? "Amazon" : "Etsy";
  const categoryLabel = formatCategory(product.type);

  return (
    <div className="bg-white pb-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-xs font-medium uppercase tracking-[0.1em]">Back to shop</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="aspect-square overflow-hidden rounded-xl bg-[#F1F5F9]"
          >
            <img
              src={product.image_url}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            {categoryLabel && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                {categoryLabel}
              </p>
            )}
            <h1 className="font-cinzel text-4xl leading-[1.1] tracking-[-0.01em] text-gray-900 md:text-5xl">
              {product.name}
            </h1>
            {product.price_range && (
              <p className="mb-5 mt-4 text-xl text-gray-600">{product.price_range}</p>
            )}
            {product.description && (
              <p className="mb-8 text-base leading-relaxed text-gray-500">{product.description}</p>
            )}

            {!isAvailable && (
              <p className="mb-8 inline-flex w-fit rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600">
                Coming soon
              </p>
            )}

            {isAvailable && (
              <div className="mb-8 flex items-center gap-3 rounded-lg bg-[#F1F5F9] px-4 py-3">
                <Shield className="h-4 w-4 shrink-0 text-[#38BDF8]" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Verified Selection</p>
                  <p className="text-xs text-gray-500">Designed by FNC Shoppe</p>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-3">
              {isAvailable && product.link && (
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded bg-[#38BDF8] py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#0ea5e9]"
                >
                  Buy on {store} <ExternalLink className="h-4 w-4" />
                </a>
              )}
              {isAvailable && product.etsy_url && (
                <a
                  href={product.etsy_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded border border-gray-200 bg-white py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-gray-900 transition-colors hover:bg-gray-50"
                >
                  Secure on Etsy <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>

            {product.story && (
              <div className="mt-10 border-t border-gray-100 pt-8">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gray-400">The Story</p>
                <p className="text-base leading-relaxed text-gray-500">{product.story}</p>
              </div>
            )}
          </motion.div>
        </div>

        {interiorImages.length > 0 && (
          <ProductInteriorGallery
            images={interiorImages}
            title={interiorGalleryTitle(product.type)}
          />
        )}
      </div>
    </div>
  );
}
