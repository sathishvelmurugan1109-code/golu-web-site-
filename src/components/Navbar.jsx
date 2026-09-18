import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Search, ShoppingBag, Menu, X, MessageCircle } from "lucide-react";
import { BUSINESS } from "../data/products";
import { buildWhatsAppLink } from "../utils/whatsapp";
import SearchOverlay from "./SearchOverlay.jsx";
import { useScrolled } from "../hooks/useScrollReveal";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About Us" },
  { to: "/#why-choose-us", label: "Why Choose Us", hash: "why-choose-us" },
  { to: "/#contact", label: "Contact", hash: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const scrolled = useScrolled(20);
  const location = useLocation();
  const navigate = useNavigate();

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /** Smooth-scrolls to a section on the home page (from any route). */
  const goToSection = (hash) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    } else {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const desktopLinkClass = ({ isActive }) =>
    `relative px-1 py-2 text-sm font-medium tracking-wide transition-colors duration-300
     after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:rounded-full
     after:bg-gold-500 after:transition-all after:duration-300
     ${
       isActive
         ? "text-maroon-700 after:w-full"
         : "text-cocoa-700 hover:text-maroon-700 after:w-0 hover:after:w-full"
     }`;

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-500 ${
          scrolled
            ? "bg-cream-50/95 shadow-soft backdrop-blur-md"
            : "bg-cream-100/80 backdrop-blur-sm"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6"
        >
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3" aria-label="Unique Golu Collections – Home">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold-500 bg-maroon-700 shadow-soft transition-transform duration-300 group-hover:scale-105">
              <span className="font-display text-lg font-bold text-gold-300">UG</span>
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold tracking-wide text-maroon-700 sm:text-xl">
                Unique Golu Collections
              </span>
              <span className="block text-[10px] font-light uppercase tracking-[0.28em] text-gold-600">
                Traditional · Divine · Handmade
              </span>
            </span>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) =>
              link.hash ? (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => goToSection(link.hash)}
                    className="relative px-1 py-2 text-sm font-medium tracking-wide text-cocoa-700 transition-colors duration-300 hover:text-maroon-700
                               after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </button>
                </li>
              ) : (
                <li key={link.label}>
                  <NavLink to={link.to} end={link.to === "/"} className={desktopLinkClass}>
                    {link.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search products"
              className="rounded-full p-2.5 text-cocoa-700 transition-all duration-300 hover:bg-gold-100 hover:text-maroon-700"
            >
              <Search size={20} strokeWidth={1.8} />
            </button>

            <Link
              to="/collections"
              aria-label="Browse collections"
              className="relative rounded-full p-2.5 text-cocoa-700 transition-all duration-300 hover:bg-gold-100 hover:text-maroon-700"
            >
              <ShoppingBag size={20} strokeWidth={1.8} />
            </Link>

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-maroon-700 to-maroon-600 px-4 py-2.5 text-xs font-medium tracking-wide text-cream-100 shadow-soft ring-1 ring-gold-500/50 transition-all duration-300 hover:from-maroon-600 hover:to-maroon-500 hover:shadow-card sm:flex"
            >
              <MessageCircle size={16} className="text-gold-300" />
              WhatsApp
            </a>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="rounded-full p-2.5 text-maroon-700 transition-colors hover:bg-gold-100 lg:hidden"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
        <div className="pattern-divider" />
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${menuOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <div
          className={`absolute inset-0 bg-cocoa-900/60 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-80 max-w-[85vw] flex-col bg-cream-50 shadow-2xl transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-label="Mobile navigation menu"
        >
          <div className="flex items-center justify-between border-b border-gold-500/30 px-5 py-4">
            <span className="font-display text-lg font-bold text-maroon-700">Menu</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="rounded-full p-2 text-cocoa-700 hover:bg-gold-100"
            >
              <X size={22} />
            </button>
          </div>
          <ul className="flex-1 space-y-1 px-5 py-6">
            {NAV_LINKS.map((link) =>
              link.hash ? (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => goToSection(link.hash)}
                    className="block w-full rounded-lg px-3 py-3 text-left font-display text-lg font-semibold text-cocoa-800 transition-colors hover:bg-gold-100 hover:text-maroon-700"
                  >
                    {link.label}
                  </button>
                </li>
              ) : (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-3 font-display text-lg font-semibold transition-colors hover:bg-gold-100 hover:text-maroon-700 ${
                        isActive ? "text-maroon-700" : "text-cocoa-800"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>
          <div className="space-y-3 border-t border-gold-500/30 px-5 py-6">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-4 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.02]"
            >
              <MessageCircle size={18} />
              Order on WhatsApp
            </a>
            <a
              href={`tel:+${BUSINESS.phoneIntl}`}
              className="flex items-center justify-center gap-2 rounded-full border border-maroon-700 px-4 py-3 text-sm font-semibold text-maroon-700 transition-colors hover:bg-maroon-700 hover:text-cream-100"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
