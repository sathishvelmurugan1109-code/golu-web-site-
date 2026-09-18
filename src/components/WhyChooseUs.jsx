import { Paintbrush, ShieldCheck, Truck, Award, Heart, Flower2 } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";

/* ---------------- Decorative pieces ---------------- */

function Lotus({ className = "" }) {
  return (
    <svg viewBox="0 0 48 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M24 2.5 C21 8 21 14 24 18.5 C27 14 27 8 24 2.5 Z" fill="currentColor" fillOpacity="0.55" />
      <path d="M15 6.5 C15.5 12 18.5 17 24 18.5 C22.5 12.5 20 8.5 15 6.5 Z" />
      <path d="M33 6.5 C32.5 12 29.5 17 24 18.5 C25.5 12.5 28 8.5 33 6.5 Z" />
      <path d="M7 11 C9.5 16.5 15 19.5 24 19.5" />
      <path d="M41 11 C38.5 16.5 33 19.5 24 19.5" />
    </svg>
  );
}

function Mandala({ className = "" }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="96" strokeWidth="1" />
      <circle cx="100" cy="100" r="78" strokeWidth="0.8" strokeDasharray="4 7" />
      <circle cx="100" cy="100" r="56" strokeWidth="0.8" />
      <circle cx="100" cy="100" r="32" strokeWidth="0.8" strokeDasharray="2 6" />
      {Array.from({ length: 12 }).map((_, i) => (
        <path
          key={i}
          d="M100 14 C93.5 34 93.5 48 100 60 C106.5 48 106.5 34 100 14 Z"
          strokeWidth="0.8"
          transform={`rotate(${i * 30} 100 100)`}
        />
      ))}
    </svg>
  );
}

function Diya({ drop, delay = "0s", className = "" }) {
  return (
    <div className={`pointer-events-none absolute flex flex-col items-center ${className}`} aria-hidden="true">
      {/* hanging chain */}
      <div
        className="w-px"
        style={{
          height: drop,
          background:
            "linear-gradient(to bottom, rgba(212,165,63,0.05), rgba(212,165,63,0.55) 60%, rgba(232,199,123,0.9))",
        }}
      />
      {/* flame + bowl */}
      <div className="relative flex flex-col items-center">
        <div
          className="animate-flame absolute -top-3 h-9 w-9 rounded-full"
          style={{
            animationDelay: delay,
            background: "radial-gradient(circle, rgba(255,170,60,0.5), rgba(255,140,40,0.12) 60%, transparent 75%)",
            filter: "blur(2px)",
          }}
        />
        <div
          className="animate-flame relative h-4 w-2.5"
          style={{
            animationDelay: delay,
            borderRadius: "50% 50% 50% 50% / 64% 64% 36% 36%",
            background: "linear-gradient(to top, #ff7a1f, #ffc75a 55%, #fff3c4)",
            boxShadow: "0 0 10px 2px rgba(255,160,50,0.6)",
          }}
        />
        <div className="h-2.5 w-9 rounded-[50%] bg-gradient-to-b from-gold-200 via-gold-500 to-gold-700 shadow-[0_2px_8px_rgba(0,0,0,0.55)]" />
        <div className="h-1 w-7 rounded-b-full bg-gradient-to-b from-gold-600 to-gold-800" />
      </div>
    </div>
  );
}

function TemplePillar({ side }) {
  const isLeft = side === "left";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-y-0 hidden w-24 select-none lg:block ${
        isLeft ? "left-0" : "right-0"
      }`}
    >
      {/* capital */}
      <div className="absolute top-0 left-1/2 z-10 h-4 w-24 -translate-x-1/2 bg-gradient-to-b from-gold-400/50 to-cocoa-700/60" />
      <div className="absolute top-4 left-1/2 z-10 h-3 w-20 -translate-x-1/2 bg-gradient-to-b from-[#a5793a]/70 to-[#5b3413]/80" />
      {/* fluted shaft */}
      <div
        className="absolute top-7 bottom-7 left-1/2 w-14 -translate-x-1/2"
        style={{
          background:
            "repeating-linear-gradient(90deg, rgba(240,200,120,0.13) 0px, rgba(240,200,120,0.13) 2px, transparent 2px, transparent 8px), linear-gradient(180deg, #96662c, #5b3413 55%, #2e1708)",
          boxShadow: "inset 0 0 18px rgba(0,0,0,0.55)",
        }}
      />
      {/* carved bands */}
      <div className="absolute top-1/3 left-1/2 h-1.5 w-16 -translate-x-1/2 bg-gold-500/30" />
      <div className="absolute top-2/3 left-1/2 h-1.5 w-16 -translate-x-1/2 bg-gold-500/30" />
      {/* base */}
      <div className="absolute bottom-3 left-1/2 z-10 h-3 w-20 -translate-x-1/2 bg-gradient-to-b from-[#5b3413]/80 to-[#a5793a]/60" />
      <div className="absolute bottom-0 left-1/2 z-10 h-3 w-24 -translate-x-1/2 bg-gradient-to-b from-cocoa-700/70 to-gold-400/40" />
      {/* hanging diyas in front of the pillar */}
      <Diya drop={90} delay="0s" className={`top-0 ${isLeft ? "left-2" : "right-2"}`} />
      <Diya drop={170} delay="0.6s" className={`top-0 ${isLeft ? "right-3" : "left-3"}`} />
      <Diya drop={40} delay="1.1s" className={`top-0 ${isLeft ? "right-6" : "left-6"}`} />
    </div>
  );
}

/* ---------------- Feature data ---------------- */

const FEATURES = [
  {
    icon: Paintbrush,
    title: "Hand-Painted",
    text: "Each doll is lovingly hand-painted by skilled artisans, making every piece unique.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Packing",
    text: "Your Golu reaches you safely with premium and secure packaging.",
  },
  {
    icon: Truck,
    title: "Pan-India Delivery",
    text: "We deliver tradition across India, right to your doorstep.",
  },
  {
    icon: Award,
    title: "Authentic Quality",
    text: "Made with traditional craftsmanship and premium materials.",
  },
  {
    icon: Heart,
    title: "Trusted by Families",
    text: "Bringing happiness to Golu-loving homes for generations.",
  },
];

/* ---------------- Section ---------------- */

export default function WhyChooseUs() {
  const headRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section
      id="why-choose-us"
      className="relative scroll-mt-24 overflow-hidden"
      aria-label="Why choose us"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 0%, #6b1425 0%, #5c1220 42%, #430d18 100%)",
      }}
    >
      {/* subtle dot texture */}
      <div className="pattern-paisley absolute inset-0 opacity-20" aria-hidden="true" />

      {/* soft light rays from the top */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, rgba(255,214,140,0.10), transparent 70%)",
        }}
      />

      {/* corner mandalas */}
      <Mandala className="absolute -left-20 -top-20 h-72 w-72 text-gold-500/10" />
      <Mandala className="absolute -right-20 -top-20 h-72 w-72 text-gold-500/10" />
      <Mandala className="absolute -bottom-24 -left-16 h-64 w-64 text-gold-500/[0.07]" />
      <Mandala className="absolute -bottom-24 -right-16 h-64 w-64 text-gold-500/[0.07]" />

      {/* temple pillars with hanging diyas */}
      <TemplePillar side="left" />
      <TemplePillar side="right" />

      {/* tiny gold flower motifs */}
      <span className="animate-floaty-slow absolute left-[14%] top-[22%] hidden text-lg text-gold-500/40 md:block" aria-hidden="true">✽</span>
      <span className="animate-floaty absolute left-[10%] bottom-[30%] hidden text-sm text-gold-500/30 md:block" aria-hidden="true">✽</span>
      <span className="animate-floaty-slow absolute right-[14%] top-[24%] hidden text-lg text-gold-500/40 md:block" aria-hidden="true">✽</span>
      <span className="animate-floaty absolute right-[10%] bottom-[32%] hidden text-sm text-gold-500/30 md:block" aria-hidden="true">✽</span>

      {/* slow golden particles */}
      {[
        { left: "18%", top: "30%", d: "0s", s: "h-1 w-1" },
        { left: "30%", top: "60%", d: "1.4s", s: "h-1.5 w-1.5" },
        { left: "68%", top: "26%", d: "2.2s", s: "h-1 w-1" },
        { left: "82%", top: "55%", d: "0.8s", s: "h-1.5 w-1.5" },
        { left: "50%", top: "70%", d: "3s", s: "h-1 w-1" },
      ].map((p, i) => (
        <span
          key={i}
          className={`animate-drift pointer-events-none absolute rounded-full bg-gold-300/50 ${p.s} shadow-[0_0_6px_rgba(212,165,63,0.8)]`}
          style={{ left: p.left, top: p.top, animationDelay: p.d }}
          aria-hidden="true"
        />
      ))}

      <div className="relative mx-auto max-w-7xl px-4 pb-4 pt-16 sm:px-6 sm:pt-20">
        {/* ---------- Header ---------- */}
        <div ref={headRef} className="reveal mx-auto max-w-3xl text-center">
          {/* lotus ornament */}
          <div className="mb-3 flex items-center justify-center gap-3 text-gold-400" aria-hidden="true">
            <span className="pattern-divider w-16 sm:w-24" />
            <Lotus className="h-5 w-10" />
            <span className="pattern-divider w-16 sm:w-24" />
          </div>

          <p className="text-xs font-medium uppercase tracking-[0.45em] text-gold-400 sm:text-sm">
            ✦ Why Choose Us ✦
          </p>

          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-cream-100 sm:text-5xl lg:text-[3.4rem]">
            Devotion in{" "}
            <span className="bg-gradient-to-b from-gold-200 via-gold-400 to-gold-600 bg-clip-text text-transparent">
              Every Detail
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-light leading-relaxed text-cream-200/80 sm:text-base">
            Families across India trust Unique Golu Collections for their most cherished
            Navaratri traditions.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 text-gold-500/70" aria-hidden="true">
            <span className="pattern-divider w-12" />
            <Lotus className="h-4 w-8" />
            <span className="pattern-divider w-12" />
          </div>
        </div>

        {/* ---------- Feature cards ---------- */}
        <div
          ref={gridRef}
          className="reveal mt-12 grid items-stretch gap-5 sm:mt-14 md:grid-cols-3 lg:grid-cols-5"
        >
          {FEATURES.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              style={{ "--reveal-delay": `${i * 130}ms` }}
              className="why-card group flex min-h-[258px] flex-col rounded-2xl border border-gold-500/40 bg-maroon-900/45 p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-300/90 hover:bg-maroon-900/65 hover:shadow-[0_0_36px_rgba(212,165,63,0.22)] md:p-7"
            >
              {/* gold circular icon */}
              <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold-400/70 bg-gradient-to-br from-gold-500/25 via-gold-500/5 to-transparent text-gold-300 shadow-[inset_0_0_14px_rgba(212,165,63,0.25)] transition-all duration-500 group-hover:scale-105 group-hover:text-gold-200 group-hover:shadow-[inset_0_0_18px_rgba(212,165,63,0.4),0_0_18px_rgba(212,165,63,0.35)]">
                <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
              </span>

              <h3 className="font-display text-xl font-semibold text-cream-100">{title}</h3>

              <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-gold-100/65">
                {text}
              </p>

              {/* card bottom ornament */}
              <div className="mt-6 flex items-center justify-center gap-2 text-gold-500/60" aria-hidden="true">
                <span className="pattern-divider w-8" />
                <Flower2 size={14} strokeWidth={1.5} />
                <span className="pattern-divider w-8" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- Curved cream transition ---------- */}
      <div className="relative mt-14">
        <svg
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
          className="block h-16 w-full sm:h-24"
          aria-hidden="true"
        >
          <path d="M0,110 L0,84 C480,8 960,8 1440,84 L1440,110 Z" fill="var(--color-cream-100)" />
          <path
            d="M0,84 C480,8 960,8 1440,84"
            fill="none"
            stroke="var(--color-gold-500)"
            strokeWidth="3"
          />
        </svg>
        {/* gold lotus at the curve peak */}
        <div
          className="pointer-events-none absolute left-1/2 top-[14%] -translate-x-1/2 -translate-y-1/2 text-gold-500"
          aria-hidden="true"
        >
          <Lotus className="h-9 w-[4.5rem] drop-shadow-[0_0_8px_rgba(212,165,63,0.7)]" />
        </div>
      </div>
    </section>
  );
}


