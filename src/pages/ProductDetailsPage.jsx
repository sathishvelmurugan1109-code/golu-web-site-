import { useParams, Link } from "react-router-dom";
import ProductDetails from "../components/ProductDetails.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { getProductById, products } from "../data/products";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) {
    return (
      <section className="mx-auto flex max-w-xl flex-col items-center gap-5 px-4 py-24 text-center">
        <h1 className="font-display text-4xl font-bold text-maroon-700">Idol Not Found</h1>
        <p className="text-sm font-light text-cocoa-600">
          The piece you are looking for may have been moved or sold. Browse our full
          collections or message us on WhatsApp — we may have it in stock.
        </p>
        <Link
          to="/collections"
          className="rounded-full bg-maroon-700 px-7 py-3 text-sm font-semibold text-cream-100 shadow-soft transition-all hover:-translate-y-0.5 hover:bg-maroon-600"
        >
          Browse Collections
        </Link>
      </section>
    );
  }

  const related = products.filter(
    (p) => p.id !== product.id && p.categories.some((c) => product.categories.includes(c))
  );

  return (
    <>
      <ProductDetails product={product} />

      {related.length > 0 && (
        <section className="bg-cream-50 py-16" aria-label="You may also like">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Divine Pairings"
              title="You May Also Like"
              subtitle="More hand-painted idols that pair beautifully with this piece on your Golu steps."
            />
            <div className="mt-12">
              <ProductGrid products={related} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
