import { ArrowUp } from "lucide-react";
import { useScrolled } from "../hooks/useScrollReveal";

/** Back-to-top button — appears after scrolling down one screen. */
export default function BackToTop() {
  const visible = useScrolled(500);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-5 left-5 z-40 rounded-full border border-gold-500/60 bg-maroon-700/95 p-3 text-gold-300 shadow-card backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-maroon-600 sm:bottom-7 sm:left-7 ${
        visible ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp size={20} />
    </button>
  );
}
