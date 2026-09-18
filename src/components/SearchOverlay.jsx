import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Search, X, SearchX } from "lucide-react";
import { products, categoryLabel } from "../data/products";

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 80);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products.filter((p) =>
      `${p.name} ${p.shortDescription} ${p.categories.map(categoryLabel).join(" ")}`
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  if (!open) return null;

  return (
    <div
      className="animate-fade-in fixed inset-0 z-[60] flex items-start justify-center bg-cocoa-900/70 px-4 pt-24 backdrop-blur-sm sm:pt-32"
      role="dialog"
      aria-modal="true"
      aria-label="Search products"
      onClick={onClose}
    >
      <div
        className="animate-slide-down w-full max-w-2xl overflow-hidden rounded-2xl bg-cream-50 shadow-card ring-1 ring-gold-500/40"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-gold-500/30 px-5 py-4">
          <Search size={20} className="shrink-0 text-gold-600" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Golu dolls, Amman idols, Krishna sets…"
            aria-label="Search products"
            className="w-full bg-transparent text-base text-cocoa-800 placeholder:text-cocoa-500/50 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="rounded-full p-1.5 text-cocoa-600 transition-colors hover:bg-gold-100 hover:text-maroon-700"
          >
            <X size={20} />
          </button>
        </div>

        <div className="max-h-[55vh] overflow-y-auto p-4">
          {query.trim() === "" ? (
            <div className="px-2 py-6 text-center">
              <p className="text-sm text-cocoa-600">
                Try “Krishna”, “Amman”, “Golu” or “combo set”
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="flex flex-col items-center gap-3 px-2 py-10 text-center">
              <SearchX size={36} className="text-gold-600" />
              <p className="font-display text-lg font-semibold text-maroon-700">
                No idols found
              </p>
              <p className="text-sm text-cocoa-600">
                We couldn’t find anything for “{query}”. Try a different name or{" "}
                <Link to="/collections" onClick={onClose} className="font-medium text-maroon-700 underline decoration-gold-500 underline-offset-4">
                  browse all collections
                </Link>
                .
              </p>
            </div>
          ) : (
            <ul className="space-y-2">
              {results.map((p) => (
                <li key={p.id}>
                  <Link
                    to={`/product/${p.id}`}
                    onClick={onClose}
                    className="group flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-gold-100/60"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-14 w-14 shrink-0 rounded-lg object-cover ring-1 ring-gold-500/40"
                    />
                    <span>
                      <span className="block font-display text-base font-semibold text-maroon-700 group-hover:text-maroon-600">
                        {p.name}
                      </span>
                      <span className="block text-xs text-cocoa-600">
                        {p.categories.map(categoryLabel).join(" · ")}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
