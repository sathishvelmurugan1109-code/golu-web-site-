import { PackageOpen } from "lucide-react";
import ProductCard from "./ProductCard.jsx";

/**
 * Responsive product grid with an elegant empty state.
 * Props: products (array), emptyTitle, emptyMessage
 */
export default function ProductGrid({
  products = [],
  emptyTitle = "No idols found",
  emptyMessage = "Try a different category or search term — or reach out to us on WhatsApp, we may have it in stock!",
}) {
  if (!products.length) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center gap-4 rounded-2xl bg-cream-50 px-6 py-14 text-center ring-1 ring-gold-500/30">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-100">
          <PackageOpen size={28} className="text-gold-600" />
        </span>
        <h3 className="font-display text-2xl font-bold text-maroon-700">{emptyTitle}</h3>
        <p className="text-sm font-light leading-relaxed text-cocoa-600">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} delay={(i % 3) * 120} />
      ))}
    </div>
  );
}
