export type ProductStatus = "draft" | "published" | "archived";

export type MarketplaceChannel = "amazon" | "etsy";

export type Category = {
  id: string;
  name: string;
  slug: string;
  created_at: string;
};

export type ProductImage = {
  id: string;
  product_id: string;
  image_url: string;
  alt_text: string | null;
  is_primary: boolean;
  position: number;
  created_at: string;
};

export type ProductListing = {
  id: string;
  product_id: string;
  channel: MarketplaceChannel;
  url: string;
  external_listing_id: string | null;

  price_min: number | null;
  price_max: number | null;
  currency: string;

  available: boolean;
  created_at: string;
  updated_at: string;
};

export type ProductVariant = {
  id: string;
  product_id: string;
  name: string;
  sku: string | null;
  price: number;
  compare_at_price: number | null;
  available: boolean;
  inventory_quantity: number;
  track_inventory: boolean;
  created_at: string;
  updated_at: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  category_id: string | null;
  status: ProductStatus;

  direct_sale_enabled: boolean;

  created_at: string;
  updated_at: string;
  published_at: string | null;
  archived_at: string | null;

  category?: Category | null;
  images?: ProductImage[];
  listings?: ProductListing[];
  variants?: ProductVariant[];
};

export enum SelectedPage {
  Home = "home",
  Shop = "shoppe",
}

export type SortOption = "newest" | "oldest";

export type CategoryFilter = "all" | string;

export type StoreFilter = "all" | MarketplaceChannel;

export type ProductFilters = {
  category: CategoryFilter;
  store: StoreFilter;
  sort: SortOption;
};
