"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export async function saveProduct(formData: FormData) {
  const supabase = await createClient();

  const id = formData.get("id") as string | null;
  const name = formData.get("name") as string;
  const slug = formData.get("slug") as string;
  const description = formData.get("description") as string;
  const categoryId = formData.get("category_id") as string;
  const status = formData.get("status") as string;

  const payload = {
    name,
    slug,
    description: description || null,
    category_id: categoryId || null,
    status,
  };

  if (id) {
    const { error } = await supabase
      .from("products")
      .update(payload)
      .eq("id", id);

    if (error) {
      throw new Error(error.message);
    }
  } else {
    const { error } = await supabase.from("products").insert(payload);

    if (error) {
      throw new Error(error.message);
    }
  }

  revalidatePath("/admin/products");
  revalidatePath("/");

  redirect("/admin/products");
}
