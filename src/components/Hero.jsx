import { Link } from "react-router-dom";
import {
  MessageCircle,
  ArrowRight,
  Paintbrush,
  ShieldCheck,
  Flower2,
} from "lucide-react";
import { BUSINESS } from "../data/products";

const HERO_IMG = "/images/little-krishna.jpg";

const FEATURES = [
  { icon: Paintbrush, title: "Hand-painted" },
  { icon: ShieldCheck, title: "Safe packing" },
  { icon: Flower2, title: "Authentic Quality" },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-cream-100"
      aria-label="Welcome banner"
    >
      {/* Very subtle warm gold glow (background only) */}
      <div
        className="absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(212,165,63,0.10),transparent_65%)]"
        aria-hidden="true"
      />
      {/* One tiny gold lotus accent */}
      <Flower2
        size={26}
        strokeWidth={1.4}
        aria-hidden="true"
        className="absolute right-[6%] top-16 hidden text-gold-500/40 lg:block"
      />

      {/* ---------- Compact 2-column hero ---------- */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 pb-12 pt-8 sm:px-6 sm:pt-10 lg:min-h-[560px] lg:grid-cols-[1fr_0.9fr] lg:gap-8 lg:pb-16 lg:pt-12 xl:px-10">
        {/* Left copy */}
        <div className="max-w-xl">
          {/* Gold eyebrow */}
          <p
            className="hero-anim text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-600 sm:text-xs"
            style={{ animationDelay: "60ms" }}
          >
            Navaratri Golu · Amman Idols · Clay Dolls
          </p>

          {/* Headline */}
          <h1
            className="hero-anim mt-3 font-display text-5xl font-bold leading-[1.05] tracking-tight text-maroon-700 sm:text-6xl lg:text-[4rem]"
            style={{ animationDelay: "160ms" }}
          >
            Celebrate Golu
            <br />
            <span className="bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 bg-clip-text text-transparent">
              Like Never Before!
            </span>
          </h1>

          {/* Description */}
          <p
            className="hero-anim mt-4 max-w-md text-base font-light leading-relaxed text-cocoa-700 sm:text-lg"
            style={{ animationDelay: "300ms" }}
          >
            Beautiful Traditional Golu Dolls &amp; Amman Idols — Made with
            Passion and Love.
          </p>

          {/* CTAs */}
          <div
            className="hero-anim mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "420ms" }}
          >
            <Link
              to="/collections"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-maroon-700 px-7 py-3 text-sm font-semibold tracking-wide text-cream-100 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-maroon-600 hover:shadow-card"
            >
              Explore Collections
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href={`https://wa.me/${BUSINESS.phoneIntl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-gold-500 bg-cream-50 px-6 py-3 text-sm font-semibold tracking-wide text-maroon-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-50"
            >
              <MessageCircle size={17} className="text-green-600" aria-hidden="true" />
              Order on WhatsApp
            </a>
          </div>

          {/* Three small trust features */}
          <ul
            className="hero-anim mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 sm:divide-x sm:divide-gold-500/25"
            style={{ animationDelay: "560ms" }}
          >
            {FEATURES.map(({ icon: Icon, title }, i) => (
              <li
                key={title}
                className={`flex items-center gap-2.5 ${i > 0 ? "sm:pl-6" : ""}`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-500/40 text-gold-600">
                  <Icon size={16} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-maroon-800">
                  {title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: single premium Krishna idol image (portrait garden scene) */}
        <div className="relative lg:h-[520px]">
          {/* Soft warm halo behind the idol */}
          <div
            className="absolute inset-8 rounded-full bg-[radial-gradient(circle,rgba(220,179,84,0.14),transparent_70%)]"
            aria-hidden="true"
          />
          <div className="animate-hero-float relative mx-auto w-full max-w-[22rem] overflow-hidden rounded-[2.5rem] shadow-card ring-1 ring-gold-500/25 sm:max-w-[24rem] lg:w-[26rem] lg:max-w-none">
            <img
              src={HERO_IMG}
              alt="Little Krishna playing the flute on a carved stone bench in a palace garden with peacocks, lotus flowers and marigolds"
              fetchPriority="high"
              className="h-[400px] w-full object-cover object-[50%_62%] sm:h-[460px] lg:h-[520px]"
            />
          </div>
        </div>
      </div>

      {/* ---------- Thin gold curved divider with lotus ---------- */}
      <div className="relative z-10 -mb-px">
        <svg
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          className="block h-8 w-full sm:h-10"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="heroCurveGold" x1="0" x2="1440" gradientUnits="userSpaceOnUse">
              <stop stopColor="#d4a53f" stopOpacity="0.15" />
              <stop offset="0.5" stopColor="#d4a53f" />
              <stop offset="1" stopColor="#d4a53f" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <path
            d="M0 38 C 420 8, 1020 8, 1440 38"
            fill="none"
            stroke="url(#heroCurveGold)"
            strokeWidth="1.5"
          />
        </svg>
        {/* Small lotus symbol in the center */}
        <span
          className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50 p-1.5 text-gold-500 ring-1 ring-gold-500/50"
          aria-hidden="true"
        >
          <Flower2 size={16} strokeWidth={1.6} />
        </span>
      </div>
    </section>
  );
}

