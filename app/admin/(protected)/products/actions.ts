"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { requireAdmin } from "@/lib/auth/admin";

import {
  normalizeListings,
  normalizeImages,
  normalizeVariants,
  parseJsonFormField,
  syncProductImages,
  syncProductListings,
  syncProductVariants,
} from "@/lib/admin/product-sync";

import type {
  ProductFormImage,
  ProductFormListing,
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

export async function createProduct(formData: FormData) {
  const { supabase } = await requireAdmin();

  const name = String(formData.get("name") ?? "").trim();

  const slug = String(formData.get("slug") ?? "").trim();

  const description = String(formData.get("description") ?? "").trim();

  const categoryId = String(formData.get("category_id") ?? "").trim();

  if (!name) {
    throw new Error("Product name is required.");
  }

  if (!slug) {
    throw new Error("Product slug is required.");
  }

  const now = new Date().toISOString();

  const { data, error } = await supabase
    .from("products")
    .insert({
      name,
      slug,
      description: description || null,
      category_id: categoryId || null,

      status: "draft",
      direct_sale_enabled: false,

      created_at: now,
      updated_at: now,

      published_at: null,
      archived_at: null,
    })
    .select("id")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/products");

  redirect(`/admin/products/${data.id}/edit/images`);
}

export async function updateProductDetails(formData: FormData) {
  const { supabase } = await requireAdmin();

  const id = String(formData.get("id") ?? "").trim();

  const name = String(formData.get("name") ?? "").trim();

  const slug = String(formData.get("slug") ?? "").trim();

  const description = String(formData.get("description") ?? "").trim();

  const categoryId = String(formData.get("category_id") ?? "").trim();

  const intent = String(formData.get("intent") ?? "save");

  if (!id) {
    throw new Error("Product ID is required.");
  }

  if (!name) {
    throw new Error("Product name is required.");
  }

  if (!slug) {
    throw new Error("Product slug is required.");
  }

  const { error } = await supabase
    .from("products")
    .update({
      name,
      slug,
      description: description || null,
      category_id: categoryId || null,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/products");
  revalidatePath(`/admin/products/${id}/edit`);
  revalidatePath(`/product/${id}`);

  if (intent === "continue") {
    redirect(`/admin/products/${id}/edit/images`);
  }

  redirect(`/admin/products/${id}/edit`);
}

export async function updateProductImages(formData: FormData) {
  const { supabase } = await requireAdmin();

  const id = String(formData.get("id") ?? "").trim();

  const intent = String(formData.get("intent") ?? "save");

  if (!id) {
    throw new Error("Product ID is required.");
  }

  const submittedImages = parseJsonFormField<ProductFormImage[]>(
    formData,
    "images",
  );

  const images = normalizeImages(submittedImages);

  await syncProductImages(supabase, id, images);

  revalidatePath("/admin/products");
  revalidatePath(`/admin/products/${id}/edit/images`);
  revalidatePath(`/product/${id}`);

  if (intent === "continue") {
    redirect(`/admin/products/${id}/edit/selling`);
  }

  redirect(`/admin/products/${id}/edit/images`);
}

export async function updateProductSelling(formData: FormData) {
  const { supabase } = await requireAdmin();

  const id = String(formData.get("id") ?? "").trim();

  const intent = String(formData.get("intent") ?? "save");

  const directSaleEnabled =
    String(formData.get("direct_sale_enabled")) === "true";

  if (!id) {
    throw new Error("Product ID is required.");
  }

  const submittedVariants = parseJsonFormField<ProductFormVariant[]>(
    formData,
    "variants",
  );

  const submittedListings = parseJsonFormField<ProductFormListing[]>(
    formData,
    "listings",
  );

  const variants = normalizeVariants(submittedVariants);

  const listings = normalizeListings(submittedListings);

  const now = new Date().toISOString();

  const { error } = await supabase
    .from("products")
    .update({
      direct_sale_enabled: directSaleEnabled,
      updated_at: now,
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  await syncProductVariants(supabase, id, variants, now);

  await syncProductListings(supabase, id, listings, now);

  revalidatePath("/admin/products");
  revalidatePath(`/admin/products/${id}/edit/selling`);
  revalidatePath(`/product/${id}`);

  if (intent === "continue") {
    redirect(`/admin/products/${id}/edit/review`);
  }

  redirect(`/admin/products/${id}/edit/selling`);
}

export async function publishProduct(formData: FormData) {
  const { supabase } = await requireAdmin();

  const id = String(formData.get("id") ?? "").trim();

  if (!id) {
    throw new Error("Product ID is required.");
  }

  const now = new Date().toISOString();

  const { data: product, error: productError } = await supabase
    .from("products")
    .select(
      `
        id,
        status,
        direct_sale_enabled,
        product_images(id, is_primary),
        product_variants(id, available)
        `,
    )
    .eq("id", id)
    .single();

  if (productError) {
    throw new Error(productError.message);
  }

  const hasPrimaryImage =
    product.product_images?.some((image) => image.is_primary) ?? false;

  if (!hasPrimaryImage) {
    throw new Error("A primary image is required before publishing.");
  }

  if (product.direct_sale_enabled) {
    const hasAvailableVariant =
      product.product_variants?.some((variant) => variant.available) ?? false;

    if (!hasAvailableVariant) {
      throw new Error(
        "Direct selling requires at least one available variant.",
      );
    }
  }

  const updatePayload: {
    status: "published";
    updated_at: string;
    archived_at: null;
    published_at?: string;
  } = {
    status: "published",
    updated_at: now,
    archived_at: null,
  };

  if (product.status !== "published") {
    updatePayload.published_at = now;
  }

  const { error } = await supabase
    .from("products")
    .update(updatePayload)
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/products");
  revalidatePath(`/admin/products/${id}/edit/review`);
  revalidatePath(`/product/${id}`);

  redirect("/admin/products");
}
