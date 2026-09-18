import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center gap-6 px-4 py-28 text-center">
      <p className="font-display text-7xl font-bold text-gold-500">404</p>
      <h1 className="font-display text-3xl font-bold text-maroon-700">
        This step of the Golu is empty
      </h1>
      <p className="text-sm font-light leading-relaxed text-cocoa-600">
        The page you are looking for doesn’t exist — but our collections certainly do.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-full bg-maroon-700 px-7 py-3 text-sm font-semibold text-cream-100 shadow-soft transition-all hover:-translate-y-0.5 hover:bg-maroon-600"
      >
        <Home size={16} />
        Back to Home
      </Link>
    </section>
  );
}
