import { createClient } from "@/lib/supabase/server";
import { PRODUCT_SELECT } from "./utils/product-select";

export async function getPublishedProducts() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select(PRODUCT_SELECT)
    .eq("status", "published")
    .eq("show_in_storefront", true)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getProductById(id: string) {
  const supabase = await createClient();

  let query = supabase.from("products").select(PRODUCT_SELECT).eq("id", id);

  // In production, public product pages can only
  // access published products.
  if (process.env.NODE_ENV === "production") {
    query = query.eq("status", "published");
  }

  const { data, error } = await query.maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
