"use client";

import { useState } from "react";

import type { Category, Product } from "@/shared/types";

type ProductDetailsFormProps = {
  product?: Product;
  categories: Category[];
  action: (formData: FormData) => void | Promise<void>;
  submitLabel: string;
};

export default function ProductDetailsForm({
  product,
  categories,
  action,
  submitLabel,
}: ProductDetailsFormProps) {
  const [name, setName] = useState(product?.name ?? "");

  const [slug, setSlug] = useState(product?.slug ?? "");

  const [description, setDescription] = useState(product?.description ?? "");

  const [categoryId, setCategoryId] = useState(product?.category_id ?? "");

  return (
    <form action={action} className="space-y-4">
      {product && <input type="hidden" name="id" value={product.id} />}

      <div>
        <label
          htmlFor="name"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Name
        </label>

        <input
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label
          htmlFor="slug"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Slug
        </label>

        <input
          id="slug"
          name="slug"
          value={slug}
          onChange={(event) => setSlug(event.target.value)}
          required
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Description
        </label>

        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          rows={6}
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label
          htmlFor="category_id"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Category
        </label>

        <select
          id="category_id"
          name="category_id"
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

      <div className="flex flex-col gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:justify-end">
        <button
          type="submit"
          name="intent"
          value="save"
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
        >
          Save
        </button>

        <button
          type="submit"
          name="intent"
          value="continue"
          className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
