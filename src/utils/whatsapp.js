import { BUSINESS } from "../data/products";

/**
 * Builds a WhatsApp click-to-chat URL with a pre-filled order message.
 * @param {object} opts
 * @param {string} [opts.product]  Product name
 * @param {string} [opts.size]     Size / variant
 * @param {number} [opts.quantity] Quantity
 */
export const buildWhatsAppLink = ({ product, size, quantity } = {}) => {
  const lines = [
    "Hello Unique Golu Collections,",
    "I am interested in:",
    product ? `Product: ${product}` : "Product: General enquiry",
    size ? `Size: ${size}` : null,
    quantity ? `Quantity: ${quantity}` : null,
    "",
    "Please share the price and delivery details.",
  ].filter((line) => line !== null);

  const message = lines.join("\n");
  return `https://wa.me/${BUSINESS.phoneIntl}?text=${encodeURIComponent(message)}`;
};

/** Opens WhatsApp in a new tab with the composed message. */
export const orderOnWhatsApp = (opts) => {
  window.open(buildWhatsAppLink(opts), "_blank", "noopener,noreferrer");
};
