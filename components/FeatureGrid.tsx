"use client";

import { useMemo, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import ProductFilterBar from "@/components/ProductFilterBar";
import { filterAndSortProducts, getFilterOptions } from "@/shared/methods";
import type { Product, ProductFilters } from "@/shared/types";

type ProductCardProps = {
  product: Product;
  index: number;
};

function getPrimaryImage(product: Product) {
  return (
    product.images?.find((image) => image.is_primary) ??
    product.images?.sort((a, b) => a.position - b.position)[0]
  );
}

function getProductPrice(product: Product) {
  // 1. Prefer direct-sale pricing
  const variantPrices =
    product.variants
      ?.map((variant) => Number(variant.price))
      .filter((price) => !Number.isNaN(price)) ?? [];

  if (variantPrices.length > 0) {
    const minPrice = Math.min(...variantPrices);
    const maxPrice = Math.max(...variantPrices);

    if (minPrice === maxPrice) {
      return `$${minPrice.toFixed(2)}`;
    }

    return `$${minPrice.toFixed(2)} - $${maxPrice.toFixed(2)}`;
  }

  // 2. Fall back to marketplace pricing
  const listing = product.listings?.find(
    (listing) => listing.available && listing.price_min !== null,
  );

  if (!listing || listing.price_min === null) {
    return null;
  }

  const minPrice = Number(listing.price_min);
  const maxPrice =
    listing.price_max !== null ? Number(listing.price_max) : minPrice;

  if (minPrice === maxPrice) {
    return `$${minPrice.toFixed(2)}`;
  }

  return `$${minPrice.toFixed(2)} - $${maxPrice.toFixed(2)}`;
}

function isProductAvailable(product: Product) {
  const hasAvailableVariant =
    product.variants?.some((variant) => variant.available) ?? false;

  const hasAvailableListing =
    product.listings?.some((listing) => listing.available) ?? false;

  return hasAvailableVariant || hasAvailableListing;
}

function ProductCard({ product, index }: ProductCardProps) {
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
        <div className="relative aspect-[4/3] overflow-hidden">
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

type FeaturedGridProps = {
  products: Product[];
};

const DEFAULT_FILTERS: ProductFilters = {
  category: "all",
  store: "all",
  sort: "newest",
};

export default function FeaturedGrid({ products }: FeaturedGridProps) {
  const [filters, setFilters] = useState<ProductFilters>(DEFAULT_FILTERS);

  const { categories, stores } = useMemo(
    () => getFilterOptions(products),
    [products],
  );

  const filteredProducts = useMemo(
    () => filterAndSortProducts(products, filters),
    [products, filters],
  );

  if (!products.length) {
    return null;
  }

  return (
    <section className="mx-auto mt-12 max-w-5xl px-6 pb-16">
      <ProductFilterBar
        filters={filters}
        onChange={setFilters}
        categories={categories}
        stores={stores}
        resultCount={filteredProducts.length}
      />

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      ) : (
        <p className="rounded-xl border border-dashed border-gray-200 bg-white px-6 py-12 text-center text-sm text-gray-500">
          No products match these filters. Try adjusting category or store.
        </p>
      )}
    </section>
  );
}
