import { Truck, ShieldCheck, Clock3, MapPin, ArrowRight, Flower2, Package, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";

const POINTS = [
  { icon: ShieldCheck, title: "Secure multi-layer packing", text: "Protective packaging for every idol" },
  { icon: Truck, title: "Dispatched with care & speed", text: "Carefully prepared for dispatch" },
  { icon: MapPin, title: "Pan-India doorstep delivery", text: "Tradition delivered to your doorstep" },
];

export default function DeliverySection() {
  const ref = useScrollReveal();

  return (
    <section
      className="relative overflow-hidden bg-cream-100 px-4 py-12 sm:px-6 sm:py-20"
      aria-label="Delivery information"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-48 w-48 opacity-25" aria-hidden="true">
        <Flower2 size={180} strokeWidth={0.7} className="text-gold-500" />
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 rotate-180 opacity-20" aria-hidden="true">
        <Flower2 size={180} strokeWidth={0.7} className="text-gold-500" />
      </div>
      <div className="mx-auto max-w-[1440px]">
        <div
          ref={ref}
          className="reveal relative overflow-hidden rounded-[2rem] border border-gold-500/60 bg-gradient-to-br from-cocoa-900 via-[#2c180d] to-maroon-900 shadow-[0_28px_70px_-30px_rgba(54,30,16,0.8)]"
        >
          <div className="pattern-paisley absolute inset-0 opacity-20" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-3 rounded-[1.7rem] border border-gold-300/15" aria-hidden="true" />
          <div className="pointer-events-none absolute left-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_15%_42%,rgba(212,165,63,0.14),transparent_36%)]" aria-hidden="true" />
          <div
            className="absolute right-[38%] top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-gold-500/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid md:grid-cols-[1.1fr_0.9fr]">
            <div className="relative z-10 flex flex-col justify-center px-7 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16 xl:px-20">
              <p className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.35em] text-gold-300 sm:text-xs">
                <Flower2 size={17} strokeWidth={1.5} />
                Safe Delivery · Pan India
                <span className="h-px w-14 bg-gold-400/60" />
              </p>
              <h2 className="mt-5 max-w-xl font-display text-4xl font-bold leading-[0.98] text-cream-100 sm:text-5xl lg:text-[4.25rem]">
                Swift &amp; Reliable Delivery
                <span className="block bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600 bg-clip-text text-transparent">
                  Across India
                </span>
              </h2>
              <div className="mt-5 flex items-center gap-3 text-gold-400/80" aria-hidden="true">
                <span className="h-px w-20 bg-gold-400/70" />
                <Flower2 size={16} strokeWidth={1.4} />
                <span className="h-px w-20 bg-gold-400/70" />
              </div>
              <p className="mt-5 max-w-xl text-sm font-light leading-relaxed text-cream-200/80 sm:text-base">
                We carefully pack every idol to ensure it reaches you safely. From our workshop in
                Cuddalore to your Golu steps — each doll is cushioned, sealed and tracked all the
                way to your doorstep.
              </p>

              <ul className="mt-7 grid gap-4 sm:grid-cols-3 lg:max-w-2xl lg:gap-5">
                {POINTS.map(({ icon: Icon, title, text }) => (
                  <li key={title} className="group border-l border-gold-500/35 pl-3 transition-colors hover:border-gold-300">
                    <Icon size={23} strokeWidth={1.4} className="mb-2 text-gold-300" aria-hidden="true" />
                    <strong className="block font-display text-base font-semibold leading-tight text-cream-100">{title}</strong>
                    <span className="mt-1 block text-[11px] leading-snug text-gold-100/60">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/collections"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 px-7 py-3.5 text-sm font-semibold text-cocoa-900 shadow-[0_12px_30px_-10px_rgba(212,165,63,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_16px_36px_-10px_rgba(212,165,63,0.9)]"
                >
                  Start Your Golu Order
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="flex items-center gap-2 font-display text-sm italic text-gold-100/75">
                  <Flower2 size={17} className="text-gold-400" />
                  Packed with care. Delivered with devotion.
                </span>
              </div>
            </div>

            <div className="relative min-h-[390px] overflow-hidden border-t border-gold-500/20 lg:min-h-[570px] lg:border-l lg:border-t-0">
              <img
                src="/images/dancing-dolls-collection.jpg"
                alt="Handcrafted South Indian Golu dolls prepared for delivery"
                loading="lazy"
                className="animate-hero-zoom absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cocoa-900 via-cocoa-900/10 to-transparent" aria-hidden="true" />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900/75 via-transparent to-cocoa-900/10" aria-hidden="true" />

              {/* Branded parcel and route marker create the delivery story without overpowering the photography. */}
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-gold-300/50 bg-cocoa-900/70 p-4 shadow-2xl backdrop-blur-md sm:left-12 sm:right-auto sm:w-64">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-400/15 text-gold-300 ring-1 ring-gold-300/50">
                    <Package size={19} strokeWidth={1.5} />
                  </span>
                  <span className="text-right text-[9px] uppercase tracking-[0.25em] text-gold-300">Packed with devotion</span>
                </div>
                <p className="mt-3 font-display text-lg font-semibold text-cream-100">Unique Golu Collections</p>
                <div className="mt-2 flex items-center justify-between border-t border-gold-300/20 pt-2 text-[10px] text-cream-200/65">
                  <span>Cuddalore, TN</span>
                  <span className="flex items-center gap-1 text-gold-300"><MapPin size={11} /> India</span>
                </div>
              </div>

              <div className="absolute right-7 top-8 flex items-center gap-2 text-gold-300/70" aria-hidden="true">
                <Sparkles size={14} />
                <span className="h-px w-16 bg-gold-300/50" />
                <MapPin size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
