import type { Product } from "@/shared/types";

import type {
  ProductFormImage,
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
