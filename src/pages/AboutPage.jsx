import { Link } from "react-router-dom";
import About from "../components/About.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import DeliverySection from "../components/DeliverySection.jsx";
import Contact from "../components/Contact.jsx";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-maroon-800 via-maroon-700 to-maroon-800 py-16 sm:py-20">
        <div className="pattern-paisley absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-300">
            Our Story
          </p>
          <h1 className="font-display text-4xl font-bold text-cream-100 sm:text-5xl">
            Made with Passion and Love
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-cream-200/80 sm:text-base">
            The heart behind Unique Golu Collections — a family devoted to bringing
            traditional Golu celebrations to homes across India.
          </p>
        </div>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="absolute bottom-0 left-0 block h-8 w-full fill-cream-100 sm:h-12" aria-hidden="true">
          <path d="M0 60 C 360 10 1080 10 1440 60 L1440 60 L0 60 Z" />
        </svg>
      </section>

      <About />

      {/* Traditional values strip */}
      <section className="py-16" aria-label="Our promise">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="font-display text-2xl font-medium italic leading-relaxed text-maroon-700 sm:text-3xl">
            “Every Golu we deliver carries the blessing of tradition — the colours of our
            culture, painted by hand, packed with love.”
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">
            — Unique Golu Collections Family
          </p>
          <Link
            to="/collections"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-maroon-700 px-8 py-3.5 text-sm font-semibold text-cream-100 shadow-soft ring-1 ring-gold-500/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-maroon-600"
          >
            Explore Our Collections
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <WhyChooseUs />
      <DeliverySection />
      <Contact />
    </>
  );
}
