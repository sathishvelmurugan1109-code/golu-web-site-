import { useState } from "react";
import { Search } from "lucide-react";
import ProductGrid from "../components/ProductGrid.jsx";
import { products, categories } from "../data/products";
import useScrollReveal from "../hooks/useScrollReveal";

export default function CollectionsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");
  const ref = useScrollReveal();

  const filtered = products.filter((p) => {
    const matchesCategory =
      activeCategory === "all" || p.categories.includes(activeCategory);
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      `${p.name} ${p.shortDescription} ${p.description}`.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  const activeLabel =
    categories.find((c) => c.slug === activeCategory)?.label ?? "All Collections";

  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-maroon-800 via-maroon-700 to-maroon-800 py-16 sm:py-20">
        <div className="pattern-paisley absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-300">
            Explore Our Range
          </p>
          <h1 className="font-display text-4xl font-bold text-cream-100 sm:text-5xl">
            Our Special Collections
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-cream-200/80 sm:text-base">
            Traditional Golu dolls, Amman idols, clay dolls and divine combo sets —
            hand-painted with devotion, delivered with care.
          </p>
        </div>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="absolute bottom-0 left-0 block h-8 w-full fill-cream-100 sm:h-12" aria-hidden="true">
          <path d="M0 60 C 360 10 1080 10 1440 60 L1440 60 L0 60 Z" />
        </svg>
      </section>

      {/* Filters + grid */}
      <section className="py-12 sm:py-16" aria-label="Product catalogue">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Search */}
          <div className="mx-auto max-w-xl">
            <label htmlFor="collection-search" className="sr-only">
              Search collections
            </label>
            <div className="flex items-center gap-3 rounded-full bg-cream-50 px-5 py-3.5 shadow-soft ring-1 ring-gold-500/40 focus-within:ring-2 focus-within:ring-gold-500">
              <Search size={18} className="shrink-0 text-gold-600" aria-hidden="true" />
              <input
                id="collection-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for Krishna, Amman, Golu sets…"
                className="w-full bg-transparent text-sm text-cocoa-800 placeholder:text-cocoa-500/50 focus:outline-none"
              />
            </div>
          </div>

          {/* Category pills */}
          <div
            ref={ref}
            className="reveal mt-8 flex flex-wrap items-center justify-center gap-2.5"
            role="group"
            aria-label="Filter by category"
          >
            {categories.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setActiveCategory(cat.slug)}
                aria-pressed={activeCategory === cat.slug}
                className={`rounded-full px-4 py-2 text-xs font-medium tracking-wide transition-all duration-300 sm:text-sm ${
                  activeCategory === cat.slug
                    ? "bg-maroon-700 text-cream-100 shadow-soft ring-1 ring-gold-500/50"
                    : "bg-cream-50 text-cocoa-700 ring-1 ring-gold-500/40 hover:bg-gold-100 hover:text-maroon-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Result meta */}
          <p className="mt-8 text-center text-xs uppercase tracking-[0.2em] text-cocoa-500" aria-live="polite">
            Showing {filtered.length} {filtered.length === 1 ? "piece" : "pieces"} · {activeLabel}
          </p>

          <div className="mt-6">
            <ProductGrid
              products={filtered}
              emptyTitle="No idols match your search"
              emptyMessage="Try a different category or search term — or reach out to us on WhatsApp, we may have it in stock!"
            />
          </div>
        </div>
      </section>
    </>
  );
}
