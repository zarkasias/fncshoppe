"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Shield } from "lucide-react";
import {
  getPrimaryImage,
  getGalleryImages,
  getGalleryTitle,
  getProductPrice,
  isProductAvailable,
} from "@/lib/products/product-utils";
import ProductInteriorGallery from "@/components/products/ProductInteriorGallery";
import type { Product } from "@/shared/types";

export default function ProductPage({ product }: { product: Product }) {
  const primaryImage = getPrimaryImage(product);
  const galleryImages = getGalleryImages(product);
  const price = getProductPrice(product);
  const isAvailable = isProductAvailable(product);

  const categoryLabel = product.category?.name ?? null;

  const availableListings =
    product.listings?.filter((listing) => listing.available) ?? [];

  function formatListingPrice(
    priceMin: number | null,
    priceMax: number | null,
    currency: string,
  ) {
    if (priceMin === null && priceMax === null) {
      return null;
    }

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    });

    if (priceMin !== null && priceMax !== null && priceMin !== priceMax) {
      return `${formatter.format(priceMin)} – ${formatter.format(priceMax)}`;
    }

    return formatter.format(priceMin ?? priceMax ?? 0);
  }

  return (
    <div className="bg-white pb-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-xs font-medium uppercase tracking-widest">
              Back to shop
            </span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative aspect-square overflow-hidden rounded-xl bg-[#F1F5F9]"
          >
            {primaryImage?.image_url ? (
              <Image
                src={primaryImage.image_url}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                alt={primaryImage.alt_text ?? product.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-gray-400">
                No image available
              </div>
            )}
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
            {price && (
              <p className="mb-5 mt-4 text-xl text-gray-600">{price}</p>
            )}
            {product.description && (
              <p className="mb-8 text-base leading-relaxed text-gray-500">
                {product.description}
              </p>
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
                  <p className="text-sm font-medium text-gray-900">
                    Verified Selection
                  </p>
                  <p className="text-xs text-gray-500">
                    Designed by FNC Shoppe
                  </p>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-3">
              {availableListings.map((listing) => {
                const listingPrice = formatListingPrice(
                  listing.price_min,
                  listing.price_max,
                  listing.currency,
                );

                const marketplaceName =
                  listing.channel === "amazon" ? "Amazon" : "Etsy";

                return (
                  <a
                    key={listing.id}
                    href={listing.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-between gap-4 rounded bg-[#38BDF8] px-5 py-3.5 text-white transition-colors hover:bg-[#0ea5e9]"
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.15em]">
                      Buy on {marketplaceName}
                    </span>

                    <span className="flex items-center gap-3">
                      {listingPrice && (
                        <span className="text-sm font-medium">
                          {listingPrice}
                        </span>
                      )}

                      <ExternalLink className="h-4 w-4" />
                    </span>
                  </a>
                );
              })}
            </div>

            {/* {product.story && (
              <div className="mt-10 border-t border-gray-100 pt-8">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gray-400">
                  The Story
                </p>
                <p className="text-base leading-relaxed text-gray-500">
                  {product.story}
                </p>
              </div>
            )} */}
          </motion.div>
        </div>

        {galleryImages.length > 0 && (
          <ProductInteriorGallery
            images={galleryImages}
            title={getGalleryTitle(product)}
          />
        )}
      </div>
    </div>
  );
}
