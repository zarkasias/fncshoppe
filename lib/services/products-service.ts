import { createClient } from "@/lib/supabase/server";
import { PRODUCT_SELECT } from "./utils/product-select";

export async function getPublishedProducts() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select(PRODUCT_SELECT)
    .eq("status", "published")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getProductById(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select(PRODUCT_SELECT)
    .eq("id", id)
    .eq("status", "published")
    .single();

  if (error) {
    return null;
  }

  return data;
}
