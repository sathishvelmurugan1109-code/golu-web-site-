import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MessageCircle,
  Mail,
  Minus,
  Plus,
  Ruler,
  Hammer,
  Truck,
  ShieldCheck,
  ArrowLeft,
  CircleCheckBig,
} from "lucide-react";
import { BUSINESS, categoryLabel } from "../data/products";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { formatPrice } from "./ProductCard.jsx";
import useScrollReveal from "../hooks/useScrollReveal";

export default function ProductDetails({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.gallery[0] ?? product.image);
  const [enquired, setEnquired] = useState(false);
  const ref = useScrollReveal();

  useEffect(() => {
    setQuantity(1);
    setActiveImage(product.gallery[0] ?? product.image);
    setEnquired(false);
  }, [product]);

  const orderLink = buildWhatsAppLink({
    product: product.name,
    size: product.size,
    quantity,
  });

  const enquiryMessage =
    `Hello Unique Golu Collections,\n\n` +
    `I would like to enquire about:\n` +
    `Product: ${product.name}\n` +
    `Size: ${product.size}\n\n` +
    `Please share the price, availability and delivery details.`;

  const enquireLink = `https://wa.me/${BUSINESS.phoneIntl}?text=${encodeURIComponent(enquiryMessage)}`;

  return (
    <section className="py-12 sm:py-16" aria-label={`Product details for ${product.name}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-cocoa-600">
            <li>
              <Link to="/" className="transition-colors hover:text-maroon-700">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link to="/collections" className="transition-colors hover:text-maroon-700">Collections</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-maroon-700">{product.name}</li>
          </ol>
        </nav>

        <div ref={ref} className="reveal grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Gallery */}
          <div>
            <div className="relative overflow-hidden rounded-3xl bg-cream-200 shadow-card ring-1 ring-gold-500/40">
              <img
                src={activeImage}
                alt={product.name}
                className="aspect-square w-full object-cover object-top"
                fetchPriority="high"
              />
              <span className="absolute left-4 top-4 rounded-full bg-maroon-700/95 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-gold-200 ring-1 ring-gold-500/50">
                {categoryLabel(product.categories[0])}
              </span>
            </div>

            {product.gallery.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-1" role="listbox" aria-label="Product image gallery">
                {product.gallery.map((img) => (
                  <button
                    key={img}
                    type="button"
                    role="option"
                    aria-selected={activeImage === img}
                    onClick={() => setActiveImage(img)}
                    className={`shrink-0 overflow-hidden rounded-xl ring-2 transition-all ${
                      activeImage === img ? "ring-gold-500" : "ring-transparent hover:ring-gold-500/50"
                    }`}
                  >
                    <img src={img} alt="" className="h-20 w-20 object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <h1 className="font-display text-3xl font-bold leading-tight text-maroon-700 sm:text-4xl">
              {product.name}
            </h1>

            <p className="mt-3 font-display text-2xl font-bold text-cocoa-800">
              {formatPrice(product.price)}
              {product.price == null && (
                <span className="ml-2 align-middle font-body text-xs font-light uppercase tracking-wider text-cocoa-500">
                  · Price on request
                </span>
              )}
            </p>

            <p className="mt-5 text-sm font-light leading-relaxed text-cocoa-600 sm:text-base">
              {product.description}
            </p>

            {/* Attributes */}
            <dl className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl bg-cream-50 px-4 py-3 ring-1 ring-gold-500/30">
                <Ruler size={18} className="mt-0.5 shrink-0 text-gold-600" />
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-cocoa-500">Available Size</dt>
                  <dd className="text-sm font-medium text-cocoa-800">{product.size}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-cream-50 px-4 py-3 ring-1 ring-gold-500/30">
                <Hammer size={18} className="mt-0.5 shrink-0 text-gold-600" />
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-cocoa-500">Craftsmanship</dt>
                  <dd className="text-sm font-medium text-cocoa-800">{product.material}</dd>
                </div>
              </div>
            </dl>

            {/* Quantity */}
            <div className="mt-7 flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-cocoa-700">Quantity</span>
              <div className="flex items-center rounded-full border border-gold-500/50 bg-cream-50 shadow-soft">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="rounded-full p-2.5 text-maroon-700 transition-colors hover:bg-gold-100 disabled:opacity-40"
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <span aria-live="polite" className="w-10 text-center font-display text-lg font-bold text-maroon-700">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                  aria-label="Increase quantity"
                  className="rounded-full p-2.5 text-maroon-700 transition-colors hover:bg-gold-100"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={orderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1fb957] hover:shadow-card"
              >
                <MessageCircle size={18} />
                Order on WhatsApp
              </a>
              <a
                href={enquireLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setEnquired(true)}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-maroon-700 px-6 py-3.5 text-sm font-semibold text-maroon-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-maroon-700 hover:text-cream-100"
              >
                <Mail size={18} />
                Enquire Now
              </a>
            </div>

            {enquired && (
              <p className="mt-4 flex items-center gap-2 text-sm text-green-700">
                <CircleCheckBig size={16} />
                Your enquiry is ready in WhatsApp — just press send there.
              </p>
            )}

            {/* Assurances */}
            <ul className="mt-8 grid gap-3 border-t border-gold-500/30 pt-6 sm:grid-cols-3">
              {[
                [ShieldCheck, "Carefully packed"],
                [Truck, "Delivery across India"],
                [MessageCircle, "Bookings: " + BUSINESS.phoneDisplay],
              ].map(([Icon, label]) => (
                <li key={label} className="flex items-center gap-2 text-xs font-light text-cocoa-600">
                  <Icon size={16} className="shrink-0 text-gold-600" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>

            <Link
              to="/collections"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-maroon-700 transition-colors hover:text-maroon-500"
            >
              <ArrowLeft size={16} />
              Back to all collections
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
