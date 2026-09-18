import { Link } from "react-router-dom";
import { MessageCircle, Eye, Ruler, BadgeCheck } from "lucide-react";
import { categoryLabel } from "../data/products";
import { buildWhatsAppLink } from "../utils/whatsapp";
import useScrollReveal from "../hooks/useScrollReveal";

/** Format the price field: number → ₹ price, null → "Contact for Price". */
export const formatPrice = (price) =>
  price != null
    ? `₹ ${Number(price).toLocaleString("en-IN")}`
    : "Contact for Price";

export default function ProductCard({ product, delay = 0 }) {
  const ref = useScrollReveal();

  return (
    <article
      ref={ref}
      style={{ "--reveal-delay": `${delay}ms` }}
      className="reveal group flex h-full flex-col overflow-hidden rounded-2xl bg-cream-50 shadow-soft ring-1 ring-gold-500/30 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card"
    >
      {/* Image */}
      <Link
        to={`/product/${product.id}`}
        className="relative block overflow-hidden bg-cream-200"
        aria-label={`View details of ${product.name}`}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-maroon-700/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold-200 ring-1 ring-gold-500/50">
          {categoryLabel(product.categories[0])}
        </span>
        <span className="absolute inset-0 flex items-center justify-center bg-maroon-900/0 opacity-0 transition-all duration-300 group-hover:bg-maroon-900/30 group-hover:opacity-100">
          <span className="flex items-center gap-2 rounded-full bg-cream-50 px-4 py-2 text-xs font-semibold text-maroon-700 shadow-card">
            <Eye size={15} /> View Details
          </span>
        </span>
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-xl font-bold leading-snug text-maroon-700">
          <Link to={`/product/${product.id}`} className="transition-colors hover:text-maroon-500">
            {product.name}
          </Link>
        </h3>

        <p className="line-clamp-2 text-sm font-light leading-relaxed text-cocoa-600">
          {product.shortDescription}
        </p>

        <div className="mt-auto space-y-3">
          <div className="flex items-center justify-between gap-2 border-t border-gold-500/25 pt-3">
            <span className="flex items-center gap-1.5 text-xs text-cocoa-600">
              <Ruler size={14} className="text-gold-600" />
              {product.size}
            </span>
            <span className="font-display text-base font-bold text-maroon-700">
              {formatPrice(product.price)}
            </span>
          </div>

          <div className="flex gap-2">
            <Link
              to={`/product/${product.id}`}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-maroon-700/70 px-3 py-2.5 text-xs font-semibold text-maroon-700 transition-all duration-300 hover:bg-maroon-700 hover:text-cream-100"
            >
              <Eye size={14} /> View Details
            </Link>
            <a
              href={buildWhatsAppLink({
                product: product.name,
                size: product.size,
                quantity: 1,
              })}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Order ${product.name} on WhatsApp`}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#25d366] px-3 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#1fb957]"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
          </div>

          <p className="flex items-center gap-1.5 text-[11px] text-cocoa-500">
            <BadgeCheck size={13} className="text-gold-600" />
            Carefully packed · Delivered across India
          </p>
        </div>
      </div>
    </article>
  );
}
