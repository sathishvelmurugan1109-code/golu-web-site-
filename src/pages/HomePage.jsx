import Hero from "../components/Hero.jsx";
import CategorySection from "../components/CategorySection.jsx";
import About from "../components/About.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import DeliverySection from "../components/DeliverySection.jsx";
import Contact from "../components/Contact.jsx";
import ProductCard from "../components/ProductCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { products, getFeaturedProducts } from "../data/products";
import useScrollReveal from "../hooks/useScrollReveal";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const newestRef = useScrollReveal();

  return (
    <>
      <Hero />

      {/* Featured / special collections */}
      <CategorySection
        id="collections"
        eyebrow="Handpicked For You"
        title="Our Special Collections"
        subtitle="Traditional Amman idols, clay Golu dolls and divine combo sets — each piece hand-painted and chosen with devotion."
        products={featured}
        viewAllLink="/collections"
        viewAllLabel="View All Collections"
      />

      {/* New arrivals strip */}
      <section className="bg-cream-50 py-16 sm:py-20" aria-label="Shop by collection">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Golu Essentials"
            title="Complete Your Kolu Steps"
            subtitle="From a single centrepiece Amman to full darbar sets — everything your Golu needs, in one place."
          />
          <div ref={newestRef} className="reveal mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
            {products.slice(-3).map((product, i) => (
              <ProductCard key={product.id} product={product} delay={i * 120} />
            ))}
          </div>
        </div>
      </section>

      <About />
      <WhyChooseUs />
      <DeliverySection />
      <Contact />
    </>
  );
}
