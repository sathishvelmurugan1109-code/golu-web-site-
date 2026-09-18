import { MessageCircle, ArrowRight } from "lucide-react";
import { buildWhatsAppLink } from "../utils/whatsapp";

/** Sticky floating WhatsApp order button (bottom-right). */
export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-[#0d6d5c] py-3 pl-4 pr-4 text-white shadow-[0_14px_34px_-10px_rgba(13,109,92,0.6)] ring-1 ring-white/20 transition-all duration-300 hover:scale-105 hover:bg-[#0a594b] sm:bottom-7 sm:right-7"
    >
      <span
        className="animate-wa-ping absolute inset-0 -z-10 rounded-full bg-[#0d6d5c]"
        aria-hidden="true"
      />
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
        <MessageCircle size={19} strokeWidth={1.8} />
      </span>
      <span className="hidden text-sm font-semibold tracking-wide sm:inline">
        Order on WhatsApp
      </span>
      <ArrowRight
        size={16}
        className="hidden transition-transform duration-300 group-hover:translate-x-1 sm:inline"
      />
    </a>
  );
}
