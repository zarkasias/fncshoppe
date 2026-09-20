"use client";

import { useState } from "react";
import Link from "next/link";
import type { Category, Product, ProductStatus } from "@/shared/types";

type ProductFormProps = {
  product?: Product;
  categories: Category[];
};

export default function ProductForm({ product, categories }: ProductFormProps) {
  const [name, setName] = useState(product?.name ?? "");
  const [slug, setSlug] = useState(product?.slug ?? "");
  const [description, setDescription] = useState(product?.description ?? "");
  const [categoryId, setCategoryId] = useState(product?.category_id ?? "");
  const [status, setStatus] = useState<ProductStatus>(
    product?.status ?? "draft",
  );

  return (
    <form className="space-y-6">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Name
        </label>

        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Slug
        </label>

        <input
          value={slug}
          onChange={(event) => setSlug(event.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Description
        </label>

        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          rows={5}
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Category
        </label>

        <select
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
        >
          <option value="">Select category</option>

          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Status
        </label>

        <select
          value={status}
          onChange={(event) => setStatus(event.target.value as ProductStatus)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600"
        >
          {product ? "Save changes" : "Create product"}
        </button>

        <Link
          href="/admin/products"
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
