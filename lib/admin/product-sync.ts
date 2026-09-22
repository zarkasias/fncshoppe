import type { SupabaseClient } from "@supabase/supabase-js";

import type {
  NormalizedProductImage,
  NormalizedProductListing,
  NormalizedProductVariant,
  ProductFormImage,
  ProductFormListing,
  ProductFormVariant,
} from "@/shared/admin-product-types";

export function parseJsonFormField<T>(formData: FormData, field: string): T {
  const value = String(formData.get(field) ?? "");

  if (!value) {
    return [] as T;
  }

  try {
    return JSON.parse(value) as T;
  } catch {
    throw new Error(`Invalid ${field} data.`);
  }
}

export function normalizeImages(
  images: ProductFormImage[],
): NormalizedProductImage[] {
  const normalized = images
    .filter((image) => image.image_url.trim() !== "")
    .map((image, index) => ({
      id: image.id,
      image_url: image.image_url.trim(),
      alt_text: image.alt_text?.trim() || null,
      is_primary: image.is_primary,
      position: index,
    }));

  if (!normalized.length) {
    return normalized;
  }

  const primaryIndex = normalized.findIndex((image) => image.is_primary);

  const selectedPrimaryIndex = primaryIndex >= 0 ? primaryIndex : 0;

  return normalized.map((image, index) => ({
    ...image,
    is_primary: index === selectedPrimaryIndex,
  }));
}

export function normalizeVariants(
  variants: ProductFormVariant[],
): NormalizedProductVariant[] {
  return variants
    .filter((variant) => variant.name.trim() !== "")
    .map((variant) => {
      const price = Number(variant.price);

      const compareAtPrice =
        variant.compare_at_price.trim() !== ""
          ? Number(variant.compare_at_price)
          : null;

      const inventoryQuantity = Number(variant.inventory_quantity);

      if (!Number.isFinite(price) || price < 0) {
        throw new Error(`Invalid price for variant "${variant.name}".`);
      }

      if (
        compareAtPrice !== null &&
        (!Number.isFinite(compareAtPrice) || compareAtPrice < 0)
      ) {
        throw new Error(
          `Invalid compare-at price for variant "${variant.name}".`,
        );
      }

      if (!Number.isFinite(inventoryQuantity) || inventoryQuantity < 0) {
        throw new Error(
          `Invalid inventory quantity for variant "${variant.name}".`,
        );
      }

      return {
        id: variant.id,
        name: variant.name.trim(),
        sku: variant.sku.trim() || null,
        price,
        compare_at_price: compareAtPrice,
        available: variant.available,
        inventory_quantity: inventoryQuantity,
        track_inventory: variant.track_inventory,
      };
    });
}

export async function syncProductImages(
  supabase: SupabaseClient,
  productId: string,
  images: NormalizedProductImage[],
) {
  const { data: existingImages, error: existingError } = await supabase
    .from("product_images")
    .select("id")
    .eq("product_id", productId);

  if (existingError) {
    throw new Error(existingError.message);
  }

  const submittedIds = images
    .filter((image) => image.id)
    .map((image) => image.id as string);

  const removedIds =
    existingImages
      ?.map((image) => image.id)
      .filter((id) => !submittedIds.includes(id)) ?? [];

  if (removedIds.length) {
    const { error } = await supabase
      .from("product_images")
      .delete()
      .in("id", removedIds);

    if (error) {
      throw new Error(error.message);
    }
  }

  for (const image of images.filter((image) => image.id)) {
    const { error } = await supabase
      .from("product_images")
      .update({
        image_url: image.image_url,
        alt_text: image.alt_text,
        is_primary: image.is_primary,
        position: image.position,
      })
      .eq("id", image.id!)
      .eq("product_id", productId);

    if (error) {
      throw new Error(error.message);
    }
  }

  const newImages = images.filter((image) => !image.id);

  if (newImages.length) {
    const { error } = await supabase.from("product_images").insert(
      newImages.map((image) => ({
        product_id: productId,
        image_url: image.image_url,
        alt_text: image.alt_text,
        is_primary: image.is_primary,
        position: image.position,
      })),
    );

    if (error) {
      throw new Error(error.message);
    }
  }
}

export async function syncProductVariants(
  supabase: SupabaseClient,
  productId: string,
  variants: NormalizedProductVariant[],
  now: string,
) {
  const { data: existingVariants, error: existingError } = await supabase
    .from("product_variants")
    .select("id")
    .eq("product_id", productId);

  if (existingError) {
    throw new Error(existingError.message);
  }

  const submittedIds = variants
    .filter((variant) => variant.id)
    .map((variant) => variant.id as string);

  const removedIds =
    existingVariants
      ?.map((variant) => variant.id)
      .filter((id) => !submittedIds.includes(id)) ?? [];

  if (removedIds.length) {
    const { error } = await supabase
      .from("product_variants")
      .delete()
      .in("id", removedIds);

    if (error) {
      throw new Error(error.message);
    }
  }

  for (const variant of variants.filter((variant) => variant.id)) {
    const { error } = await supabase
      .from("product_variants")
      .update({
        name: variant.name,
        sku: variant.sku,
        price: variant.price,
        compare_at_price: variant.compare_at_price,
        available: variant.available,
        inventory_quantity: variant.inventory_quantity,
        track_inventory: variant.track_inventory,
        updated_at: now,
      })
      .eq("id", variant.id!)
      .eq("product_id", productId);

    if (error) {
      throw new Error(error.message);
    }
  }

  const newVariants = variants.filter((variant) => !variant.id);

  if (newVariants.length) {
    const { error } = await supabase.from("product_variants").insert(
      newVariants.map((variant) => ({
        product_id: productId,
        name: variant.name,
        sku: variant.sku,
        price: variant.price,
        compare_at_price: variant.compare_at_price,
        available: variant.available,
        inventory_quantity: variant.inventory_quantity,
        track_inventory: variant.track_inventory,
      })),
    );

    if (error) {
      throw new Error(error.message);
    }
  }
}

export function normalizeListings(
  listings: ProductFormListing[],
): NormalizedProductListing[] {
  return listings
    .filter((listing) => listing.url.trim() !== "")
    .map((listing) => {
      const priceMin =
        listing.price_min.trim() !== "" ? Number(listing.price_min) : null;

      const priceMax =
        listing.price_max.trim() !== "" ? Number(listing.price_max) : null;

      if (priceMin !== null && (!Number.isFinite(priceMin) || priceMin < 0)) {
        throw new Error(`Invalid minimum price for ${listing.channel}.`);
      }

      if (priceMax !== null && (!Number.isFinite(priceMax) || priceMax < 0)) {
        throw new Error(`Invalid maximum price for ${listing.channel}.`);
      }

      return {
        id: listing.id,
        channel: listing.channel,
        url: listing.url.trim(),
        external_listing_id: listing.external_listing_id.trim() || null,
        price_min: priceMin,
        price_max: priceMax,
        currency: listing.currency.trim() || "USD",
        available: listing.available,
      };
    });
}

export async function syncProductListings(
  supabase: SupabaseClient,
  productId: string,
  listings: NormalizedProductListing[],
  now: string,
) {
  const { data: existingListings, error: existingError } = await supabase
    .from("product_listings")
    .select("id")
    .eq("product_id", productId);

  if (existingError) {
    throw new Error(existingError.message);
  }

  const submittedIds = listings
    .filter((listing) => listing.id)
    .map((listing) => listing.id as string);

  const removedIds =
    existingListings
      ?.map((listing) => listing.id)
      .filter((id) => !submittedIds.includes(id)) ?? [];

  if (removedIds.length > 0) {
    const { error } = await supabase
      .from("product_listings")
      .delete()
      .in("id", removedIds);

    if (error) {
      throw new Error(error.message);
    }
  }

  for (const listing of listings.filter((listing) => listing.id)) {
    const { error } = await supabase
      .from("product_listings")
      .update({
        channel: listing.channel,
        url: listing.url,
        external_listing_id: listing.external_listing_id,
        price_min: listing.price_min,
        price_max: listing.price_max,
        currency: listing.currency,
        available: listing.available,
        updated_at: now,
      })
      .eq("id", listing.id!)
      .eq("product_id", productId);

    if (error) {
      throw new Error(error.message);
    }
  }

  const newListings = listings.filter((listing) => !listing.id);

  if (newListings.length > 0) {
    const { error } = await supabase.from("product_listings").insert(
      newListings.map((listing) => ({
        product_id: productId,
        channel: listing.channel,
        url: listing.url,
        external_listing_id: listing.external_listing_id,
        price_min: listing.price_min,
        price_max: listing.price_max,
        currency: listing.currency,
        available: listing.available,
      })),
    );

    if (error) {
      throw new Error(error.message);
    }
  }
}
