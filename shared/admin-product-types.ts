import type { MarketplaceChannel } from "@/shared/types";

export type NormalizedProductListing = {
  id?: string;
  channel: "amazon" | "etsy";
  url: string;
  external_listing_id: string | null;
  price_min: number | null;
  price_max: number | null;
  currency: string;
  available: boolean;
};

export type ProductFormListing = {
  id?: string;
  clientId: string;
  product_id: string;
  channel: MarketplaceChannel;
  url: string;
  external_listing_id: string;
  price_min: string;
  price_max: string;
  currency: string;
  available: boolean;
};

export type ProductFormImage = {
  id?: string;
  clientId: string;
  product_id: string;
  image_url: string;
  alt_text: string | null;
  is_primary: boolean;
  position: number;
};

export type ProductFormVariant = {
  id?: string;
  clientId: string;
  product_id: string;
  name: string;
  sku: string;
  price: string;
  compare_at_price: string;
  available: boolean;
  inventory_quantity: number;
  track_inventory: boolean;
};

export type NormalizedProductImage = {
  id?: string;
  image_url: string;
  alt_text: string | null;
  is_primary: boolean;
  position: number;
};

export type NormalizedProductVariant = {
  id?: string;
  name: string;
  sku: string | null;
  price: number;
  compare_at_price: number | null;
  available: boolean;
  inventory_quantity: number;
  track_inventory: boolean;
};
