import type { Product, MarketplaceChannel } from "@/shared/types";

import type {
  ProductFormImage,
  ProductFormListing,
  ProductFormVariant,
} from "@/shared/admin-product-types";

export function getInitialProductImages(product?: Product): ProductFormImage[] {
  return [...(product?.images ?? [])]
    .sort((a, b) => a.position - b.position)
    .map((image) => ({
      id: image.id,
      clientId: image.id,
      product_id: image.product_id,
      image_url: image.image_url,
      alt_text: image.alt_text,
      is_primary: image.is_primary,
      position: image.position,
    }));
}

export function createProductImage(
  productId = "",
  isPrimary = false,
): ProductFormImage {
  return {
    clientId: crypto.randomUUID(),
    product_id: productId,
    image_url: "",
    alt_text: "",
    is_primary: isPrimary,
    position: 0,
  };
}

export function getInitialProductVariants(
  product?: Product,
): ProductFormVariant[] {
  return (product?.variants ?? []).map((variant) => ({
    id: variant.id,
    clientId: variant.id,
    product_id: variant.product_id,
    name: variant.name,
    sku: variant.sku ?? "",
    price: String(variant.price),
    compare_at_price:
      variant.compare_at_price !== null ? String(variant.compare_at_price) : "",
    available: variant.available,
    inventory_quantity: variant.inventory_quantity,
    track_inventory: variant.track_inventory,
  }));
}

export function createProductVariant(productId = ""): ProductFormVariant {
  return {
    clientId: crypto.randomUUID(),
    product_id: productId,
    name: "",
    sku: "",
    price: "",
    compare_at_price: "",
    available: true,
    inventory_quantity: 0,
    track_inventory: false,
  };
}

export function getInitialProductListings(
  product?: Product,
): ProductFormListing[] {
  return (product?.listings ?? []).map((listing) => ({
    id: listing.id,
    clientId: listing.id,
    product_id: listing.product_id,
    channel: listing.channel,
    url: listing.url,
    external_listing_id: listing.external_listing_id ?? "",
    price_min: listing.price_min !== null ? String(listing.price_min) : "",
    price_max: listing.price_max !== null ? String(listing.price_max) : "",
    currency: listing.currency ?? "USD",
    available: listing.available,
  }));
}

export function createProductListing(
  productId: string,
  channel: MarketplaceChannel,
): ProductFormListing {
  return {
    clientId: crypto.randomUUID(),
    product_id: productId,
    channel,
    url: "",
    external_listing_id: "",
    price_min: "",
    price_max: "",
    currency: "USD",
    available: true,
  };
}
