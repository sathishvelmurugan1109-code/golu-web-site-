import { Link } from "react-router-dom";
import { Heart, ArrowRight, Flower2, Paintbrush, MapPin } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";

const STATS = [
  { icon: Flower2, value: "85+", label: "Curated posts" },
  { icon: Paintbrush, value: "100%", label: "Hand-painted" },
  { icon: MapPin, value: "India", label: "Nationwide delivery" },
];

export default function About() {
  // IMPORTANT: two separate refs — never share one ref between two elements,
  // otherwise only the last element gets observed and the other stays hidden.
  const imageRef = useScrollReveal();
  const copyRef = useScrollReveal();

  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-cream-200 py-16 sm:py-24"
      aria-label="About us"
    >
      {/* Subtle traditional mandala decorations */}
      <div
        className="pattern-paisley pointer-events-none absolute -left-10 -top-10 h-52 w-52 rounded-full opacity-60"
        aria-hidden="true"
      />
      <div
        className="pattern-paisley pointer-events-none absolute -bottom-14 -right-10 h-64 w-64 rounded-full opacity-50"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ——— Image: large framed Golu display ——— */}
          <div
            ref={imageRef}
            className="reveal relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            {/* Offset gold frame behind the photo */}
            <div
              className="absolute -left-4 -top-4 h-full w-full rounded-2xl border-2 border-gold-500/50 sm:-left-6 sm:-top-6"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-2xl bg-cream-100 p-2 shadow-card ring-1 ring-gold-500/40">
              <img
                src="/images/rama-durbar-set.jpg"
                alt="Traditional Golu steps display featuring the Rama Durbar set with hand-painted idols"
                loading="lazy"
                className="aspect-[4/5] w-full rounded-xl object-cover object-center transition-transform duration-700 hover:scale-[1.03] sm:aspect-[5/6]"
              />
            </div>
            {/* Floating caption chip */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-cream-50/95 px-5 py-2 shadow-soft ring-1 ring-gold-500/40 backdrop-blur-sm">
              <p className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.22em] text-maroon-700">
                Golu Steps · Hand-painted
              </p>
            </div>
          </div>


          {/* ——— Copy ——— */}
          <div
            ref={copyRef}
            className="reveal text-center lg:text-left"
            style={{ "--reveal-delay": "150ms" }}
          >
            {/* Eyebrow: ✦ 🪷 OUR STORY */}
            <p className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-600 lg:justify-start">
              <span aria-hidden="true">✦</span>
              <Flower2 size={18} className="text-gold-500" aria-hidden="true" />
              Our Story
            </p>

            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-maroon-700 sm:text-5xl">
              Made with Passion and Love
            </h2>

            {/* Ornament divider: line – flower – line */}
            <div
              className="mt-5 flex items-center justify-center gap-3 lg:justify-start"
              aria-hidden="true"
            >
              <span className="h-px w-16 bg-gold-500" />
              <Flower2 size={18} className="text-gold-500" />
              <span className="h-px w-16 bg-gold-500" />
            </div>

            <p className="mt-7 text-base font-light leading-relaxed text-cocoa-600 sm:text-lg">
              At{" "}
              <strong className="font-semibold text-maroon-700">
                Unique Golu Collections
              </strong>
              , we bring beautiful traditional Golu dolls and divine Amman idols to
              your home. Our collections are carefully selected to add beauty,
              devotion and tradition to your Golu celebration.
            </p>
            <p className="mt-4 text-sm font-light leading-relaxed text-cocoa-600 sm:text-base">
              From the fierce grace of Varahi Amman to the royal charm of
              darbar-style Golu sets, every idol in our catalogue is hand-painted by
              skilled artisans and chosen with the devotion of a family that has
              celebrated Golu for generations.
            </p>

            {/* Stat cards */}
            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {STATS.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl bg-cream-50 px-4 py-5 text-center shadow-soft ring-1 ring-gold-500/40 transition-transform duration-300 hover:-translate-y-1"
                >
                  <Icon size={22} className="mx-auto text-gold-500" aria-hidden="true" />
                  <p className="mt-2 font-display text-2xl font-bold text-maroon-700">
                    {value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-cocoa-600">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                to="/collections"
                className="group inline-flex items-center gap-2 rounded-full bg-maroon-700 px-8 py-3.5 text-sm font-semibold text-cream-100 shadow-card ring-1 ring-gold-500/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-maroon-600"
              >
                Browse Our Collections
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <p className="flex items-center gap-2 text-sm text-cocoa-600">
                <Heart size={16} className="fill-brand-red text-brand-red" aria-hidden="true" />
                Loved by Golu families across India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}