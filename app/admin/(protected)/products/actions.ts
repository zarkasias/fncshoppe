"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { requireAdmin } from "@/lib/auth/admin";

type SubmittedImage = {
  id?: string;
  clientId: string;
  product_id: string;
  image_url: string;
  alt_text: string | null;
  is_primary: boolean;
  position: number;
};

export async function saveProduct(formData: FormData) {
  const { supabase } = await requireAdmin();

  const id = String(formData.get("id") ?? "").trim();

  const name = String(formData.get("name") ?? "").trim();
  const slug = String(formData.get("slug") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();

  const categoryId = String(formData.get("category_id") ?? "").trim();

  const status = String(formData.get("status") ?? "draft").trim();

  const imagesJson = String(formData.get("images") ?? "[]");

  const images = JSON.parse(imagesJson) as SubmittedImage[];

  if (!name) {
    throw new Error("Product name is required.");
  }

  if (!slug) {
    throw new Error("Product slug is required.");
  }

  const now = new Date().toISOString();

  const productPayload = {
    name,
    slug,
    description: description || null,
    category_id: categoryId || null,
    status,
    updated_at: now,
  };

  let productId = id;

  /*
   * --------------------------------------------------------
   * UPDATE EXISTING PRODUCT
   * --------------------------------------------------------
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

    // First time moving into published
    if (status === "published" && existingProduct.status !== "published") {
      lifecycleFields.published_at = now;
      lifecycleFields.archived_at = null;
    }

    // Moving into archived
    if (status === "archived" && existingProduct.status !== "archived") {
      lifecycleFields.archived_at = now;
    }

    // Moving back to draft
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
   * --------------------------------------------------------
   * CREATE NEW PRODUCT
   * --------------------------------------------------------
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
   * --------------------------------------------------------
   * NORMALIZE IMAGES
   * --------------------------------------------------------
   */

  const normalizedImages = images
    .filter((image) => image.image_url.trim() !== "")
    .map((image, index) => ({
      ...image,
      image_url: image.image_url.trim(),
      alt_text: image.alt_text?.trim() || null,
      position: index,
    }));

  // Ensure exactly one primary image when images exist.
  if (
    normalizedImages.length > 0 &&
    !normalizedImages.some((image) => image.is_primary)
  ) {
    normalizedImages[0].is_primary = true;
  }

  /*
   * --------------------------------------------------------
   * DELETE REMOVED IMAGES
   * --------------------------------------------------------
   */

  const { data: existingImages, error: existingImagesError } = await supabase
    .from("product_images")
    .select("id")
    .eq("product_id", productId);

  if (existingImagesError) {
    throw new Error(existingImagesError.message);
  }

  const submittedExistingIds = normalizedImages
    .filter((image) => image.id)
    .map((image) => image.id as string);

  const removedImageIds =
    existingImages
      ?.map((image) => image.id)
      .filter((existingId) => !submittedExistingIds.includes(existingId)) ?? [];

  if (removedImageIds.length > 0) {
    const { error } = await supabase
      .from("product_images")
      .delete()
      .in("id", removedImageIds);

    if (error) {
      throw new Error(error.message);
    }
  }

  /*
   * --------------------------------------------------------
   * UPDATE EXISTING IMAGES
   * --------------------------------------------------------
   */

  const existingSubmittedImages = normalizedImages.filter((image) => image.id);

  for (const image of existingSubmittedImages) {
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

  /*
   * --------------------------------------------------------
   * INSERT NEW IMAGES
   * --------------------------------------------------------
   */

  const newImages = normalizedImages.filter((image) => !image.id);

  if (newImages.length > 0) {
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

  /*
   * --------------------------------------------------------
   * REFRESH PAGES
   * --------------------------------------------------------
   */

  revalidatePath("/");
  revalidatePath("/admin/products");
  revalidatePath(`/product/${productId}`);

  redirect("/admin/products");
}
