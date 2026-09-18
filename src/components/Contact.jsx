import { useState } from "react";
import {
  MessageCircle,
  Phone,
  MapPin,
  Mail,
  ArrowRight,
  Flower2,
  CircleCheckBig,
} from "lucide-react";
import { BUSINESS } from "../data/products";
import useScrollReveal from "../hooks/useScrollReveal";

const INITIAL_FORM = { name: "", email: "", phone: "", enquiryType: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const ref = useScrollReveal();

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((err) => ({ ...err, [field]: undefined }));
    setSent(false);
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) err.email = "Enter a valid email address";
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s+/g, "")))
      err.phone = "Enter a valid 10-digit mobile number";
    if (!form.enquiryType) err.enquiryType = "Choose an enquiry type";
    if (!form.message.trim()) err.message = "Please write a short message";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const enquiry =
      `Hello Unique Golu Collections,\n\n` +
      `*New Enquiry*\n` +
      `Name: ${form.name.trim()}\n` +
      `Email: ${form.email.trim()}\n` +
      `Phone: ${form.phone.trim()}\n` +
      `Enquiry Type: ${form.enquiryType}\n` +
      `Message: ${form.message.trim()}`;

    window.open(
      `https://wa.me/${BUSINESS.phoneIntl}?text=${encodeURIComponent(enquiry)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
  };

  const inputClass = (field) =>
    `w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-cocoa-800 placeholder:text-cocoa-500/45
     transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400/40
     ${errors[field] ? "border-brand-red" : "border-gold-500/35 focus:border-gold-500"}`;

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-cream-100 py-16 sm:py-20" aria-label="Contact us">
      {/* Minimal background texture */}
      <div className="pattern-paisley pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden="true" />

      {/* Small devotional visual — diya, doll, marigolds (bottom-right, decorative only) */}
      <div
        className="pointer-events-none absolute bottom-4 right-4 hidden select-none items-end gap-2 opacity-90 lg:flex xl:right-14"
        aria-hidden="true"
      >
        {/* Soft warm light + clean blurred backdrop */}
        <div className="absolute -inset-8 rounded-full bg-[radial-gradient(circle_at_60%_55%,rgba(220,179,84,0.18),rgba(253,249,238,0.55)_55%,transparent_75%)] blur-md" />
        {/* Small Golu doll */}
        <div className="relative h-20 w-20 overflow-hidden rounded-full ring-1 ring-gold-500/50">
          <img
            src="/images/little-krishna.jpg"
            alt=""
            className="h-full w-full object-cover object-top"
          />
        </div>
        {/* Brass diya with flame + marigold dots */}
        <svg viewBox="0 0 96 72" className="relative h-16 w-20">
          <defs>
            <radialGradient id="diyaGlow" cx="50%" cy="35%" r="55%">
              <stop offset="0%" stopColor="#fcd34d" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#fcd34d" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="flameGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
            <linearGradient id="brassGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e9c77b" />
              <stop offset="100%" stopColor="#b8862b" />
            </linearGradient>
          </defs>
          <circle cx="48" cy="24" r="22" fill="url(#diyaGlow)" />
          {/* flame */}
          <path d="M48 8c3 4.2 4.6 7 4.6 9.8 0 3-2.1 5.2-4.6 5.2s-4.6-2.2-4.6-5.2C43.4 15 45 12.2 48 8Z" fill="url(#flameGrad)" />
          {/* diya bowl */}
          <path d="M22 48c1.5 9.5 12 15 26 15s24.5-5.5 26-15c-8 3-16.5 4.5-26 4.5S30 51 22 48Z" fill="url(#brassGrad)" />
          <ellipse cx="48" cy="48" rx="26" ry="4.5" fill="#f0dc9e" />
          {/* wick base */}
          <circle cx="48" cy="46" r="2" fill="#966b22" />
          {/* marigold + jasmine dots */}
          <circle cx="14" cy="62" r="4" fill="#ea8a0c" />
          <circle cx="23" cy="66" r="3" fill="#f59e0b" />
          <circle cx="82" cy="63" r="3.4" fill="#f8ecca" />
          <circle cx="74" cy="67" r="2.6" fill="#f8ecca" />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.38em] text-gold-600 sm:text-sm">
            Get In Touch
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-maroon-700 sm:text-4xl lg:text-[2.75rem]">
            Bring Tradition Home
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm font-light leading-relaxed text-cocoa-600 sm:text-base">
            Have a question or want to place an order? Reach out to us — we&apos;re happy to help.
          </p>
          {/* Very small gold decorative line */}
          <div className="mx-auto mt-5 h-px w-16 bg-gold-500/70" aria-hidden="true" />
        </div>

        <div ref={ref} className="reveal relative mt-10 grid items-start gap-6 md:grid-cols-2 lg:gap-8">
          {/* LEFT — contact info */}
          <div className="space-y-4">
            <div className="rounded-2xl bg-maroon-700 p-6 text-cream-100 sm:p-7">
              <p className="font-display text-2xl font-bold">{BUSINESS.name}</p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-gold-300">
                Traditional · Divine · Handmade
              </p>

              <div className="mt-6 space-y-4 text-sm">
                <a href={`tel:+${BUSINESS.phoneIntl}`} className="flex items-center gap-3 transition-colors hover:text-gold-200">
                  <Phone size={15} className="shrink-0 text-gold-300" />
                  <span className="font-medium">+91 {BUSINESS.phoneDisplay}</span>
                </a>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 break-all transition-colors hover:text-gold-200">
                  <Mail size={15} className="shrink-0 text-gold-300" />
                  <span className="font-medium">{BUSINESS.email}</span>
                </a>
                <p className="flex items-center gap-3">
                  <MapPin size={15} className="shrink-0 text-gold-300" />
                  <span className="font-medium">Cuddalore, Tamil Nadu – 607001</span>
                </p>
              </div>

              {/* Thin gold divider */}
              <div className="mt-6 h-px w-full bg-gold-500/30" aria-hidden="true" />

              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href={`https://wa.me/${BUSINESS.phoneIntl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-4 py-2.5 text-xs font-semibold tracking-wide text-cocoa-900 transition-colors hover:bg-gold-300"
                >
                  <MessageCircle size={14} /> WhatsApp
                </a>
                <a
                  href={`tel:+${BUSINESS.phoneIntl}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-gold-400/60 px-4 py-2.5 text-xs font-semibold tracking-wide text-gold-200 transition-colors hover:bg-gold-400/10"
                >
                  <Phone size={14} /> Call Now
                </a>
              </div>
            </div>

            {/* Small cream note card */}
            <div className="rounded-2xl bg-cream-50 p-6 ring-1 ring-gold-500/25">
              <p className="flex items-center gap-2 font-display text-lg font-bold text-maroon-700">
                <Flower2 size={16} className="shrink-0 text-gold-600" strokeWidth={1.6} />
                We&apos;d love to hear from you!
              </p>
              <p className="mt-1.5 text-sm font-light leading-relaxed text-cocoa-600">
                Whether it&apos;s an enquiry, custom order or support, we&apos;re here to help.
              </p>
            </div>
          </div>

          {/* RIGHT — enquiry form */}
          <div className="rounded-2xl border border-gold-500/40 bg-cream-50 p-6 sm:p-7">
            <h3 className="font-display text-2xl font-bold text-maroon-700">Send us a Message</h3>

            <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cocoa-700">
                  Name <span className="text-brand-red">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your full name"
                  className={inputClass("name")}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="mt-1 text-xs text-brand-red">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cocoa-700">
                  Email <span className="text-brand-red">*</span>
                </label>
                <input id="email" type="email" value={form.email} onChange={update("email")} placeholder="you@example.com" className={inputClass("email")} aria-invalid={!!errors.email} />
                {errors.email && <p className="mt-1 text-xs text-brand-red">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cocoa-700">
                  Phone Number <span className="text-brand-red">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  inputMode="numeric"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="10-digit mobile number"
                  className={inputClass("phone")}
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && <p className="mt-1 text-xs text-brand-red">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="enquiryType" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cocoa-700">
                  Enquiry Type <span className="text-brand-red">*</span>
                </label>
                <select
                  id="enquiryType"
                  value={form.enquiryType}
                  onChange={update("enquiryType")}
                  className={inputClass("enquiryType")}
                  aria-invalid={!!errors.enquiryType}
                >
                  <option value="">Select an option</option>
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Custom Golu Order">Custom Golu Order</option>
                  <option value="Product Availability">Product Availability</option>
                  <option value="Delivery & Support">Delivery &amp; Support</option>
                </select>
                {errors.enquiryType && <p className="mt-1 text-xs text-brand-red">{errors.enquiryType}</p>}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cocoa-700">
                  Message <span className="text-brand-red">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell us how we can help you..."
                  className={`${inputClass("message")} resize-y`}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="mt-1 text-xs text-brand-red">{errors.message}</p>}
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-maroon-700 px-8 py-3 text-sm font-semibold tracking-wide text-cream-100 transition-colors duration-300 hover:bg-maroon-600"
                >
                  Submit Enquiry
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                {sent && (
                  <p className="mt-4 flex items-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-800 ring-1 ring-green-600/30">
                    <CircleCheckBig size={16} className="shrink-0 text-green-600" />
                    Thank you! Your enquiry is ready in WhatsApp — just press send there.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
