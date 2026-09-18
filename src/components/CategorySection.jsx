import SectionHeading from "./SectionHeading.jsx";
import ProductGrid from "./ProductGrid.jsx";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";

/**
 * A titled section showcasing products.
 * Props: id, eyebrow, title, subtitle, products, viewAllLink, viewAllLabel
 */
export default function CategorySection({
  id,
  eyebrow,
  title,
  subtitle,
  products = [],
  viewAllLink,
  viewAllLabel = "View All Collections",
  columns = 3,
}) {
  const ref = useScrollReveal();

  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20" aria-label={title}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <div ref={ref} className="reveal mt-12">
          <ProductGrid products={products} />
        </div>

        {viewAllLink && (
          <div className="mt-12 text-center">
            <Link
              to={viewAllLink}
              className="group inline-flex items-center gap-2 rounded-full bg-maroon-700 px-8 py-3.5 text-sm font-semibold tracking-wide text-cream-100 shadow-soft ring-1 ring-gold-500/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-maroon-600 hover:shadow-card"
            >
              {viewAllLabel}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
