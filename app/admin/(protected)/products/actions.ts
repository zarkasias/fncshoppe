"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { requireAdmin } from "@/lib/auth/admin";

import {
  normalizeImages,
  normalizeVariants,
  parseJsonFormField,
  syncProductImages,
  syncProductVariants,
} from "@/lib/admin/product-sync";

import type {
  ProductFormImage,
  ProductFormVariant,
} from "@/shared/admin-product-types";

import type { ProductStatus } from "@/shared/types";

const PRODUCT_STATUSES: ProductStatus[] = ["draft", "published", "archived"];

function isProductStatus(value: string): value is ProductStatus {
  return PRODUCT_STATUSES.includes(value as ProductStatus);
}

export async function saveProduct(formData: FormData) {
  const { supabase } = await requireAdmin();

  const id = String(formData.get("id") ?? "").trim();

  const name = String(formData.get("name") ?? "").trim();

  const slug = String(formData.get("slug") ?? "").trim();

  const description = String(formData.get("description") ?? "").trim();

  const categoryId = String(formData.get("category_id") ?? "").trim();

  const rawStatus = String(formData.get("status") ?? "draft").trim();

  const directSaleEnabled =
    String(formData.get("direct_sale_enabled")) === "true";

  if (!name) {
    throw new Error("Product name is required.");
  }

  if (!slug) {
    throw new Error("Product slug is required.");
  }

  if (!isProductStatus(rawStatus)) {
    throw new Error("Invalid product status.");
  }

  const status = rawStatus;

  const submittedImages = parseJsonFormField<ProductFormImage[]>(
    formData,
    "images",
  );

  const submittedVariants = parseJsonFormField<ProductFormVariant[]>(
    formData,
    "variants",
  );

  const images = normalizeImages(submittedImages);
  const variants = normalizeVariants(submittedVariants);

  const now = new Date().toISOString();

  const productPayload = {
    name,
    slug,
    description: description || null,
    category_id: categoryId || null,
    status,
    direct_sale_enabled: directSaleEnabled,
    updated_at: now,
  };

  let productId = id;

  /*
   * Update
   */
  if (id) {
    const { data: existingProduct, error: existingError } = await supabase
      .from("products")
      .select("status, published_at, archived_at")
      .eq("id", id)
      .single();

    if (existingError) {
      throw new Error(existingError.message);
    }

    const lifecycleFields: {
      published_at?: string | null;
      archived_at?: string | null;
    } = {};

    if (status === "published" && existingProduct.status !== "published") {
      lifecycleFields.published_at = now;
      lifecycleFields.archived_at = null;
    }

    if (status === "archived" && existingProduct.status !== "archived") {
      lifecycleFields.archived_at = now;
    }

    if (status === "draft" && existingProduct.status !== "draft") {
      lifecycleFields.archived_at = null;
    }

    const { error } = await supabase
      .from("products")
      .update({
        ...productPayload,
        ...lifecycleFields,
      })
      .eq("id", id);

    if (error) {
      throw new Error(error.message);
    }
  } else {
    /*
     * Create
     */
    const { data, error } = await supabase
      .from("products")
      .insert({
        ...productPayload,

        published_at: status === "published" ? now : null,

        archived_at: status === "archived" ? now : null,
      })
      .select("id")
      .single();

    if (error) {
      throw new Error(error.message);
    }

    productId = data.id;
  }

  /*
   * Related records
   */
  await syncProductImages(supabase, productId, images);

  await syncProductVariants(supabase, productId, variants, now);

  /*
   * Revalidate
   */
  revalidatePath("/");
  revalidatePath("/admin/products");
  revalidatePath(`/product/${productId}`);

  redirect("/admin/products");
}
