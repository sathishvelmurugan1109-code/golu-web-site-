import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Phone,
  MapPin,
  Mail,
  Truck,
  MessageCircle,
  Clock3,
} from "lucide-react";
import { BUSINESS } from "../data/products";
import { buildWhatsAppLink } from "../utils/whatsapp";

const QUICK_LINKS = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-cocoa-900 text-cream-200" aria-label="Footer">
      {/* Delivery ribbon */}
      <div className="border-b border-gold-500/20 bg-cocoa-800">
        <p className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-4 py-3.5 text-center text-xs font-medium tracking-[0.18em] text-gold-300 sm:text-sm">
          <Truck size={17} className="text-gold-400" aria-hidden="true" />
          SWIFT &amp; RELIABLE DELIVERY ACROSS INDIA
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:py-16">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold-500 bg-maroon-700">
              <span className="font-display text-lg font-bold text-gold-300">UG</span>
            </span>
            <span className="font-display text-xl font-bold leading-tight text-cream-100">
              Unique Golu
              <br />
              Collections
            </span>
          </div>
          <p className="mt-4 font-display text-lg italic text-gold-300">
            “{BUSINESS.tagline}”
          </p>
          <p className="mt-3 text-sm font-light leading-relaxed text-cream-200/70">
            Traditional Golu dolls, Amman idols and divine clay collections — made with
            passion and love, delivered with care.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram – @uniquegolucollections"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/40 text-gold-300 transition-all duration-300 hover:bg-gold-500 hover:text-cocoa-900"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/uniquegolucollections"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook – Unique Golu Collections"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/40 text-gold-300 transition-all duration-300 hover:bg-gold-500 hover:text-cocoa-900"
            >
              <Facebook size={18} />
            </a>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/40 text-gold-300 transition-all duration-300 hover:bg-gold-500 hover:text-cocoa-900"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer quick links">
          <h3 className="font-display text-lg font-bold text-cream-100">Quick Links</h3>
          <span className="mt-2 block h-0.5 w-10 rounded-full bg-gold-500" aria-hidden="true" />
          <ul className="mt-5 space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="group inline-flex items-center gap-2 text-sm font-light text-cream-200/75 transition-colors hover:text-gold-300"
                >
                  <span className="h-1 w-1 rounded-full bg-gold-500 transition-all group-hover:w-3" aria-hidden="true" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="font-display text-lg font-bold text-cream-100">Contact</h3>
          <span className="mt-2 block h-0.5 w-10 rounded-full bg-gold-500" aria-hidden="true" />
          <ul className="mt-5 space-y-3 text-sm font-light text-cream-200/75">
            <li>
              <a href={`tel:+${BUSINESS.phoneIntl}`} className="flex items-center gap-2.5 transition-colors hover:text-gold-300">
                <Phone size={15} className="shrink-0 text-gold-400" />
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-start gap-2.5 break-all transition-colors hover:text-gold-300">
                <Mail size={15} className="mt-0.5 shrink-0 text-gold-400" />
                {BUSINESS.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 shrink-0 text-gold-400" />
              {BUSINESS.address}
            </li>
            <li className="flex items-center gap-2.5">
              <Clock3 size={15} className="shrink-0 text-gold-400" />
              {BUSINESS.hours}
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-display text-lg font-bold text-cream-100">Follow Us</h3>
          <span className="mt-2 block h-0.5 w-10 rounded-full bg-gold-500" aria-hidden="true" />
          <a
            href={BUSINESS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center gap-3 rounded-xl bg-cocoa-800 px-4 py-3 text-sm text-cream-200/80 ring-1 ring-gold-500/25 transition-colors hover:text-gold-300"
          >
            <Instagram size={18} className="shrink-0 text-gold-400" />
            <span>
              Instagram
              <span className="block text-xs font-light text-cream-200/60">
                @{BUSINESS.instagram}
              </span>
            </span>
          </a>
          <p className="mt-4 text-sm font-light leading-relaxed text-cream-200/70">
            Daily new arrivals, Golu inspiration and behind-the-scenes videos of our
            hand-painted idols.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold-500/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs font-light text-cream-200/60 sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p>Celebrate Golu Like Never Before! · Made with devotion in Cuddalore, Tamil Nadu</p>
        </div>
      </div>
    </footer>
  );
}
