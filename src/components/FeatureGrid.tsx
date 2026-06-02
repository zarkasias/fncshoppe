import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Product } from '@/shared/types';

type ProductCardProps = {
  product: Product;
  index: number;
};

function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.2, 1, 0.3, 1] }}
      className="bg-[#F1F5F9] rounded-xl overflow-hidden"
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        {/* Info */}
        <div className="bg-white px-4 py-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground leading-snug">{product.name}</p>
            {product.price_range && (
              <p className="text-sm text-foreground/70 mt-0.5">{product.price_range}</p>
            )}
          </div>
          <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#38BDF8] flex items-center gap-1 whitespace-nowrap ml-4">
            Shop Now <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

type FeaturedGridProps = {
  products: Product[];
};

export default function FeaturedGrid({ products }: FeaturedGridProps) {
  if (!products || products.length === 0) return null;

  return (
    <section className="max-w-5xl mx-auto px-6 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}