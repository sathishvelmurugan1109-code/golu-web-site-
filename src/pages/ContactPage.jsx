import Contact from "../components/Contact.jsx";
import DeliverySection from "../components/DeliverySection.jsx";

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-maroon-800 via-maroon-700 to-maroon-800 py-16 sm:py-20">
        <div className="pattern-paisley absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-300">
            We Would Love To Hear From You
          </p>
          <h1 className="font-display text-4xl font-bold text-cream-100 sm:text-5xl">
            Bring Tradition Home
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-cream-200/80 sm:text-base">
            Bookings, size enquiries, custom Golu sets or delivery questions — reach out
            and we will respond personally.
          </p>
        </div>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="absolute bottom-0 left-0 block h-8 w-full fill-cream-50 sm:h-12" aria-hidden="true">
          <path d="M0 60 C 360 10 1080 10 1440 60 L1440 60 L0 60 Z" />
        </svg>
      </section>

      <Contact />
      <DeliverySection />
    </>
  );
}
