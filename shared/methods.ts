import type { Product, ProductFilters } from "@/shared/types";

export function filterAndSortProducts(
  products: Product[],
  filters: ProductFilters,
): Product[] {
  const filtered = products.filter((product) => {
    const matchesCategory =
      filters.category === "all" || product.category?.slug === filters.category;

    const matchesStore =
      filters.store === "all" ||
      product.listings?.some((listing) => listing.channel === filters.store);

    return matchesCategory && matchesStore;
  });

  return [...filtered].sort((a, b) => {
    const nameOrder = a.name.localeCompare(b.name);

    const dateA = new Date(a.published_at ?? a.created_at).getTime();
    const dateB = new Date(b.published_at ?? b.created_at).getTime();

    const dateOrder = filters.sort === "oldest" ? dateA - dateB : dateB - dateA;

    return dateOrder !== 0 ? dateOrder : nameOrder;
  });
}

export function getFilterOptions(products: Product[]) {
  const categories = [
    ...new Set(
      products
        .map((product) => product.category?.slug)
        .filter((value): value is string => Boolean(value)),
    ),
  ];

  const stores = [
    ...new Set(
      products.flatMap(
        (product) => product.listings?.map((listing) => listing.channel) ?? [],
      ),
    ),
  ];

  categories.sort((a, b) => formatLabel(a).localeCompare(formatLabel(b)));

  stores.sort((a, b) => formatLabel(a).localeCompare(formatLabel(b)));

  return {
    categories,
    stores,
  };
}

export function formatLabel(value: string) {
  return value
    .split(/[- ]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
