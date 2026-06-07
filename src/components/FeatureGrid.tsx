import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Product, ProductFilters } from '@/shared/types';
import ProductFilterBar from '@/components/ProductFilterBar';
import {
  filterAndSortProducts,
  getFilterOptions,
} from '@/shared/methods';

type ProductCardProps = {
  product: Product;
  index: number;
};

function ProductCard({ product, index }: ProductCardProps) {
  const shopHref = product.link ?? `/product/${product.id}`;
  const isExternalShop = Boolean(product.link);
  const isAvailable = product.available !== false;

  const imageBlock = (
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={product.image_url}
        alt={product.name}
        className={`w-full h-full object-cover transition-transform duration-500 ${
          isAvailable ? "hover:scale-105" : "opacity-90"
        }`}
      />
      {!isAvailable && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-white/50"
          aria-hidden
        >
          <span className="-rotate-12 text-3xl font-bold uppercase tracking-[0.2em] text-gray-500 drop-shadow-sm">
            Coming Soon
          </span>
        </div>
      )}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.2, 1, 0.3, 1] }}
      className="bg-[#F1F5F9] rounded-xl overflow-hidden border border-gray-200"
    >
      {isAvailable ? (
        <Link to={`/product/${product.id}`} className="block">
          {imageBlock}
        </Link>
      ) : (
        <div className="block">{imageBlock}</div>
      )}
      <div className="bg-white px-4 py-4 flex items-center justify-between">
        {isAvailable ? (
          <Link to={`/product/${product.id}`} className="min-w-0 flex-1">
            <p className="text-sm font-medium text-foreground leading-snug">{product.name}</p>
            {product.price_range && (
              <p className="text-sm text-foreground/70 mt-0.5">{product.price_range}</p>
            )}
          </Link>
        ) : (
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-foreground leading-snug">{product.name}</p>
            {product.price_range && (
              <p className="text-sm text-foreground/70 mt-0.5">{product.price_range}</p>
            )}
          </div>
        )}
        {isAvailable ? (
          isExternalShop ? (
            <a
              href={shopHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold tracking-[0.12em] uppercase text-[#38BDF8] flex items-center gap-1 whitespace-nowrap ml-4 shrink-0 hover:opacity-80"
            >
              Shop Now <ArrowRight className="w-3 h-3" />
            </a>
          ) : (
            <Link
              to={shopHref}
              className="text-xs font-semibold tracking-[0.12em] uppercase text-[#38BDF8] flex items-center gap-1 whitespace-nowrap ml-4 shrink-0 hover:opacity-80"
            >
              Shop Now <ArrowRight className="w-3 h-3" />
            </Link>
          )
        ) : (
          <span className="text-xs font-semibold tracking-[0.12em] uppercase text-gray-400 whitespace-nowrap ml-4 shrink-0">
            Coming Soon
          </span>
        )}
      </div>
    </motion.div>
  );
}

type FeaturedGridProps = {
  products: Product[];
};

const DEFAULT_FILTERS: ProductFilters = {
  category: 'all',
  store: 'all',
  sort: 'newest',
};

export default function FeaturedGrid({ products }: FeaturedGridProps) {
  const [filters, setFilters] = useState<ProductFilters>(DEFAULT_FILTERS);

  const { categories, stores } = useMemo(() => getFilterOptions(products), [products]);

  const filteredProducts = useMemo(
    () => filterAndSortProducts(products, filters),
    [products, filters],
  );

  if (!products || products.length === 0) return null;

  return (
    <section className="max-w-5xl mx-auto px-6 mt-12 pb-16">
      <ProductFilterBar
        filters={filters}
        onChange={setFilters}
        categories={categories}
        stores={stores}
        resultCount={filteredProducts.length}
      />

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {filteredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
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