import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/shared/types";

import {
  getPrimaryImage,
  getProductPrice,
  isProductAvailable,
} from "@/lib/products/product-utils";

export type ProductCardProps = {
  product: Product;
  index: number;
};

export default function ProductCard({ product, index }: ProductCardProps) {
  const productHref = `/product/${product.id}`;

  const primaryImage = getPrimaryImage(product);
  const price = getProductPrice(product);
  const isAvailable = isProductAvailable(product);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.2, 1, 0.3, 1],
      }}
      className="overflow-hidden rounded-xl border border-gray-200 bg-white"
    >
      <Link href={productHref} className="block">
        <div className="relative aspect-4/3 overflow-hidden">
          {primaryImage?.image_url ? (
            <Image
              src={primaryImage.image_url}
              alt={primaryImage.alt_text ?? product.name}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className={`h-full w-full object-cover transition-transform duration-500 ${
                isAvailable ? "hover:scale-105" : "opacity-90"
              }`}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-100 text-sm text-gray-400">
              No image
            </div>
          )}

          {!isAvailable && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-white/50"
              aria-hidden
            >
              <span className="-rotate-12 text-3xl font-bold uppercase tracking-[0.2em] text-gray-500 drop-shadow-sm">
                Coming Soon
              </span>
            </div>
          )}
        </div>
      </Link>

      <div className="flex items-center justify-between bg-white px-4 py-4">
        <Link href={productHref} className="min-w-0 flex-1">
          <p className="text-sm font-medium leading-snug text-foreground">
            {product.name}
          </p>

          {price && (
            <p className="mt-0.5 text-sm text-foreground/70">{price}</p>
          )}
        </Link>

        <Link
          href={productHref}
          className="ml-4 flex shrink-0 items-center gap-1 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.12em] text-[#38BDF8] hover:opacity-80"
        >
          {isAvailable ? "Shop Now" : "View Product"}
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </motion.div>
  );
}
