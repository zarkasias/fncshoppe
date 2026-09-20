"use client";

import { useMemo, useState } from "react";

import ProductFilterBar from "@/components/products/ProductFilterBar";
import ProductCard from "./ProductCard";
import { filterAndSortProducts, getFilterOptions } from "@/shared/methods";
import type { Product, ProductFilters } from "@/shared/types";

type FeaturedGridProps = {
  products: Product[];
};

const DEFAULT_FILTERS: ProductFilters = {
  category: "all",
  store: "all",
  sort: "newest",
};

export default function FeaturedGrid({ products }: FeaturedGridProps) {
  const [filters, setFilters] = useState<ProductFilters>(DEFAULT_FILTERS);

  const { categories, stores } = useMemo(
    () => getFilterOptions(products),
    [products],
  );

  const filteredProducts = useMemo(
    () => filterAndSortProducts(products, filters),
    [products, filters],
  );

  if (!products.length) {
    return null;
  }

  return (
    <section className="mx-auto mt-12 max-w-5xl px-6 pb-16">
      <ProductFilterBar
        filters={filters}
        onChange={setFilters}
        categories={categories}
        stores={stores}
        resultCount={filteredProducts.length}
      />

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      ) : (
        <p className="rounded-xl border border-dashed border-gray-200 bg-white px-6 py-12 text-center text-sm text-gray-500">
          No products match these filters. Try adjusting category or store.
        </p>
      )}
    </section>
  );
}
