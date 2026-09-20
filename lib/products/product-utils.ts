import type { Product } from "@/shared/types";

export function getPrimaryImage(product: Product) {
  return (
    product.images?.find((image) => image.is_primary) ??
    [...(product.images ?? [])].sort((a, b) => a.position - b.position)[0]
  );
}

export function getGalleryImages(product: Product) {
  return [...(product.images ?? [])]
    .filter((image) => !image.is_primary)
    .sort((a, b) => a.position - b.position)
    .map((image) => ({
      src: image.image_url,
      alt: image.alt_text ?? product.name,
    }));
}

export function getProductPrice(product: Product) {
  const variantPrices =
    product.variants
      ?.map((variant) => Number(variant.price))
      .filter((price) => !Number.isNaN(price)) ?? [];

  if (variantPrices.length > 0) {
    const minPrice = Math.min(...variantPrices);
    const maxPrice = Math.max(...variantPrices);

    return formatPriceRange(minPrice, maxPrice);
  }

  const listing = product.listings?.find(
    (listing) => listing.available && listing.price_min !== null,
  );

  if (!listing || listing.price_min === null) {
    return null;
  }

  const minPrice = Number(listing.price_min);
  const maxPrice =
    listing.price_max !== null ? Number(listing.price_max) : minPrice;

  return formatPriceRange(minPrice, maxPrice);
}

export function isProductAvailable(product: Product) {
  const hasAvailableVariant =
    product.variants?.some((variant) => variant.available) ?? false;

  const hasAvailableListing =
    product.listings?.some((listing) => listing.available) ?? false;

  return hasAvailableVariant || hasAvailableListing;
}

export function getGalleryTitle(product: Product) {
  return product.category?.slug === "journals"
    ? "Inside the journal"
    : "Gallery";
}

function formatPriceRange(minPrice: number, maxPrice: number) {
  return minPrice === maxPrice
    ? `$${minPrice.toFixed(2)}`
    : `$${minPrice.toFixed(2)} - $${maxPrice.toFixed(2)}`;
}
