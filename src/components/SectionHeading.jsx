import useScrollReveal from "../hooks/useScrollReveal";

/**
 * Consistent section heading with gold ornament.
 * Props: eyebrow, title, subtitle, align ("center" | "left"), dark (bool)
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}) {
  const ref = useScrollReveal();
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div ref={ref} className={`reveal max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] ${
            dark ? "text-gold-300" : "text-gold-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-bold leading-snug sm:text-4xl ${
          dark ? "text-cream-100" : "text-maroon-700"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-4 flex items-center gap-2 ${align === "center" ? "justify-center" : ""}`}
        aria-hidden="true"
      >
        <span className={`h-px w-10 ${dark ? "bg-gold-500/70" : "bg-gold-500"}`} />
        <span className={`h-2 w-2 rotate-45 ${dark ? "bg-gold-400" : "bg-gold-500"}`} />
        <span className={`h-px w-10 ${dark ? "bg-gold-500/70" : "bg-gold-500"}`} />
      </div>
      {subtitle && (
        <p
          className={`mt-4 text-sm font-light leading-relaxed sm:text-base ${
            dark ? "text-cream-200/80" : "text-cocoa-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
