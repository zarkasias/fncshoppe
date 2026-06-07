import type { Product, ProductFilters } from "@/shared/types";

export function filterAndSortProducts(products: Product[], filters: ProductFilters): Product[] {
    const filtered = products.filter((product) => {
      const matchesCategory =
        filters.category === "all" || product.type === filters.category;
      const matchesStore = filters.store === "all" || product.store === filters.store;
      return matchesCategory && matchesStore;
    });
  
    return [...filtered].sort((a, b) => {
      const nameOrder = a.name.localeCompare(b.name);
      const dateA = new Date(a.date_added).getTime();
      const dateB = new Date(b.date_added).getTime();
      const dateOrder = filters.sort === "oldest" ? dateA - dateB : dateB - dateA;
  
      return dateOrder !== 0 ? dateOrder : nameOrder;
    });
  }

  export function getFilterOptions(products: Product[]) {
    const categories = [...new Set(products.map((p) => p.type).filter(Boolean))] as NonNullable<
      Product["type"]
    >[];
    const stores = [...new Set(products.map((p) => p.store).filter(Boolean))] as NonNullable<
      Product["store"]
    >[];
  
    categories.sort((a, b) => formatLabel(a).localeCompare(formatLabel(b)));
    stores.sort((a, b) => formatLabel(a).localeCompare(formatLabel(b)));
  
    return { categories, stores };
  }

  export function formatLabel(value: string) {
    return value
      .split(/[- ]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }