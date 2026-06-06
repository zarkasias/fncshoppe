import type { Product } from "@/shared/types";

export type SortOption = "newest" | "oldest";
export type CategoryFilter = "all" | NonNullable<Product["type"]>;
export type StoreFilter = "all" | NonNullable<Product["store"]>;

export type ProductFilters = {
  category: CategoryFilter;
  store: StoreFilter;
  sort: SortOption;
};

type ProductFilterBarProps = {
  filters: ProductFilters;
  onChange: (filters: ProductFilters) => void;
  categories: NonNullable<Product["type"]>[];
  stores: NonNullable<Product["store"]>[];
  resultCount: number;
};

function formatLabel(value: string) {
  return value
    .split(/[- ]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

type FilterSelectProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
};

function FilterSelect({ label, value, onChange, options }: FilterSelectProps) {
  return (
    <label className="flex min-w-0 flex-1 flex-col gap-1.5 sm:flex-none sm:min-w-[140px]">
      <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gray-400">
        {label}
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 py-2.5 pr-8 text-sm text-gray-800 shadow-sm transition-colors hover:border-gray-300 focus:border-[#38BDF8] focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/20"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          aria-hidden
        >
          ▾
        </span>
      </div>
    </label>
  );
}

export default function ProductFilterBar({
  filters,
  onChange,
  categories,
  stores,
  resultCount,
}: ProductFilterBarProps) {
  const categoryOptions = [
    { value: "all", label: "All categories" },
    ...categories.map((category) => ({
      value: category,
      label: formatLabel(category),
    })),
  ];

  const storeOptions = [
    { value: "all", label: "All stores" },
    ...stores.map((store) => ({
      value: store,
      label: formatLabel(store),
    })),
  ];

  const sortOptions = [
    { value: "newest", label: "Latest" },
    { value: "oldest", label: "Oldest" },
  ];

  return (
    <div className="mb-8 rounded-xl border border-gray-100 bg-gray-50 px-4 py-4 shadow-sm sm:px-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:flex-wrap lg:gap-3">
          <FilterSelect
            label="Category"
            value={filters.category}
            onChange={(category) =>
              onChange({ ...filters, category: category as CategoryFilter })
            }
            options={categoryOptions}
          />
          <FilterSelect
            label="Store"
            value={filters.store}
            onChange={(store) => onChange({ ...filters, store: store as StoreFilter })}
            options={storeOptions}
          />
          <FilterSelect
            label="Sort by"
            value={filters.sort}
            onChange={(sort) => onChange({ ...filters, sort: sort as SortOption })}
            options={sortOptions}
          />
        </div>
        <p className="shrink-0 text-xs text-gray-500 lg:pb-2.5">
          {resultCount} {resultCount === 1 ? "item" : "items"}
        </p>
      </div>
    </div>
  );
}

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
