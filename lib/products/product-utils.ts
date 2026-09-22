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
  if (product.direct_sale_enabled) {
    const variantPrices =
      product.variants
        ?.filter((variant) => variant.available)
        .map((variant) => Number(variant.price))
        .filter((price) => Number.isFinite(price) && price >= 0) ?? [];

    if (variantPrices.length > 0) {
      const minPrice = Math.min(...variantPrices);
      const maxPrice = Math.max(...variantPrices);

      return formatPriceRange(minPrice, maxPrice);
    }
  }

  const listingPrices =
    product.listings
      ?.filter((listing) => listing.available && listing.price_min !== null)
      .flatMap((listing) => {
        const minPrice = Number(listing.price_min);

        const maxPrice =
          listing.price_max !== null ? Number(listing.price_max) : minPrice;

        const prices: number[] = [];

        if (Number.isFinite(minPrice) && minPrice >= 0) {
          prices.push(minPrice);
        }

        if (Number.isFinite(maxPrice) && maxPrice >= 0) {
          prices.push(maxPrice);
        }

        return prices;
      }) ?? [];

  if (listingPrices.length === 0) {
    return null;
  }

  const minPrice = Math.min(...listingPrices);
  const maxPrice = Math.max(...listingPrices);

  return formatPriceRange(minPrice, maxPrice);
}

export function isProductAvailable(product: Product) {
  const hasAvailableDirectSale =
    product.direct_sale_enabled &&
    (product.variants?.some(
      (variant) =>
        variant.available &&
        (!variant.track_inventory || variant.inventory_quantity > 0),
    ) ??
      false);

  const hasAvailableListing =
    product.listings?.some((listing) => listing.available) ?? false;

  return hasAvailableDirectSale || hasAvailableListing;
}

export function getAvailableListings(product: Product) {
  return product.listings?.filter((listing) => listing.available) ?? [];
}

export function getAvailableVariants(product: Product) {
  if (!product.direct_sale_enabled) {
    return [];
  }

  return (
    product.variants?.filter(
      (variant) =>
        variant.available &&
        (!variant.track_inventory || variant.inventory_quantity > 0),
    ) ?? []
  );
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
