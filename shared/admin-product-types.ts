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
