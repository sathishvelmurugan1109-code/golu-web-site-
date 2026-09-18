/**
 * Unique Golu Collections — Product catalogue data.
 *
 * HOW TO ADD / EDIT PRODUCTS:
 *  - Add a new object to the `products` array below.
 *  - `id` must be a unique slug (used in the URL /product/:id).
 *  - `price`: set a number (in ₹) or leave `null` to show "Contact for Price".
 *  - `image` / `gallery`: place photos in /public/images and reference them
 *    as "/images/your-photo.jpg" (1:1 square crops look best).
 *  - `categories`: array of category slugs (see `categories` below) so the
 *    product appears under multiple filters.
 */

export const BUSINESS = {
  name: "Unique Golu Collections",
  tagline: "Celebrate Golu Like Never Before!",
  phoneDisplay: "9843141720",
  phoneIntl: "919843141720",
  email: "uniquegolucollections@gmail.com",
  instagram: "uniquegolucollections",
  instagramUrl: "https://www.instagram.com/uniquegolucollections",
  facebook: "Unique Golu Collections",
  address: "2, Rathna Nagar, Manjakuppam, Cuddalore, Tamil Nadu 607001",
  hours: "Open daily · 9:00 am – 6:00 pm",
};

/** Filterable catalogue categories (slug + label). */
export const categories = [
  { slug: "all", label: "All Collections" },
  { slug: "amman-idols", label: "Amman Idols" },
  { slug: "golu-dolls", label: "Golu Doll Collections" },
  { slug: "clay-dolls", label: "Clay Dolls" },
  { slug: "traditional-idols", label: "Traditional Divine Idols" },
  { slug: "combo-sets", label: "Golu Combo Sets" },
];

export const products = [
  {
    id: "rama-durbar-set",
    name: "Rama Durbar Golu Set",
    categories: ["golu-dolls", "traditional-idols", "combo-sets"],
    shortDescription:
      "Sri Rama with Sita Piratti, Lakshmana and Anjaneya — the divine durbar for your Golu.",
    description:
      "A regal Rama Durbar set featuring Sri Rama with his bow, Sita Piratti in a rich red saree and Lakshmana with Anjaneya at his feet. Hand-painted in classic greens, reds and golds, this set brings the divine presence of the Ramayana to the very centre of your Golu display.",
    size: "Set of 3 · Available on request",
    material: "Hand-painted traditional finish",
    price: null,
    image: "/images/rama-durbar-set.jpg",
    gallery: ["/images/rama-durbar-set.jpg"],
    featured: true,
  },
  {
    id: "vintage-krishna-terracotta",
    name: "Vintage Krishna with Cows",
    categories: ["clay-dolls", "traditional-idols"],
    shortDescription:
      "A rare vintage-style terracotta set of Krishna with his cows in aged, earthy tones.",
    description:
      "A rare vintage-style terracotta set of four — Krishna with his cows rendered in aged, earthy tones with hand-painted garlands. Sourced for collectors who love the old-world charm of traditional Golu, each piece carries the soft patina of time and true hand-made character.",
    size: "Set of 4 · Available on request",
    material: "Terracotta with aged patina finish",
    price: null,
    image: "/images/vintage-krishna-terracotta.jpg",
    gallery: ["/images/vintage-krishna-terracotta.jpg"],
    featured: true,
  },
  {
    id: "chettiar-couple",
    name: "Chettiar & Chetti Dolls",
    categories: ["golu-dolls", "traditional-idols"],
    shortDescription:
      "The beloved Thanjavur merchant couple — a nostalgic must-have on every Golu step.",
    description:
      "The beloved Thanjavur Chettiar and Chetti couple — the traditional merchant dolls of the Golu steps, depicted with their signature turbans, sarees and warm smiles. A nostalgic must-have for every kolu, believed to bring prosperity and good fortune to the home.",
    size: "Available on request",
    material: "Hand-painted traditional finish",
    price: null,
    image: "/images/chettiar-couple.jpg",
    gallery: ["/images/chettiar-couple.jpg"],
    featured: true,
  },
  {
    id: "arakasu-amman",
    name: "Arakasu Amman",
    categories: ["amman-idols", "traditional-idols"],
    shortDescription:
      "Majestic 1.5 ft Arakasu Amman in paper mache — resplendent in red and gold.",
    description:
      "A majestic 1.5 ft Arakasu Amman in lightweight paper mache — seated in resplendent red and gold with sacred garlands draped around her arch. Richly detailed yet easy to handle, she is ideal as the focal Amman of your Golu or puja space during Navaratri.",
    size: "1.5 ft · Paper Mache",
    material: "Paper mache, hand-painted with gold accents",
    price: null,
    image: "/images/arakasu-amman.jpg",
    gallery: ["/images/arakasu-amman.jpg"],
    featured: true,
  },
  {
    id: "raja-rani-dancing-couple",
    name: "Raja Rani Dancing Doll Couple",
    categories: ["golu-dolls", "clay-dolls"],
    shortDescription:
      "Classic king-and-queen dancing dolls with bobbing heads in festive red and green.",
    description:
      "Classic raja-rani (king and queen) dancing dolls with the signature bobbing heads, dressed in festive red and green with gold accents. A playful, traditional pair that adds movement and old-world charm to any shelf of your Golu display.",
    size: "Couple set · Available on request",
    material: "Hand-painted with bobblehead finish",
    price: null,
    image: "/images/raja-rani-dancing-couple.jpg",
    gallery: ["/images/raja-rani-dancing-couple.jpg"],
    featured: false,
  },
  {
    id: "sumangali-ladies-set",
    name: "Sumangali Ladies Set",
    categories: ["combo-sets", "golu-dolls"],
    shortDescription:
      "Four graceful ladies in vibrant sarees — blue, red, pink and green — in one set.",
    description:
      "A graceful set of four standing ladies in vibrant sarees — blue, red, pink and green — each with traditional jewellery and gentle poses. Perfect for the manai (household) theme of your Golu, symbolising sumangali blessings and prosperity for the home.",
    size: "Set of 4 · Available on request",
    material: "Hand-painted clay finish",
    price: null,
    image: "/images/sumangali-ladies-set.jpg",
    gallery: ["/images/sumangali-ladies-set.jpg"],
    featured: false,
  },
  {
    id: "little-krishna",
    name: "Little Krishna Idol",
    categories: ["traditional-idols", "clay-dolls"],
    shortDescription:
      "An enchanting blue Krishna in tribhanga pose, adorned with golden jewels.",
    description:
      "An enchanting hand-painted Krishna, standing with hands on hips in his signature tribhanga pose, adorned with golden jewels, pearl malas and a peacock-crowned mukut. A divine showstopper for the Krishna theme of your Golu or a cherished gift.",
    size: "Available on request",
    material: "Hand-painted with detailed jewellery work",
    price: null,
    image: "/images/little-krishna.jpg",
    gallery: ["/images/little-krishna.jpg"],
    featured: true,
  },
  {
    id: "krishna-feast-set",
    name: "Krishna Feast Family Set",
    categories: ["combo-sets", "clay-dolls"],
    shortDescription:
      "Krishna and friends enjoying a feast, complete with golden plates of offerings.",
    description:
      "A heart-warming Krishna feast set — little Krishna and his friends enjoying a meal, complete with golden plates of traditional offerings like curd rice and fruits. A delightful narrative set that brings the stories of Krishna's mischief to life on your Golu steps.",
    size: "Set with offerings · Available on request",
    material: "Hand-painted clay set",
    price: null,
    image: "/images/krishna-feast-set.jpg",
    gallery: ["/images/krishna-feast-set.jpg"],
    featured: false,
  },
  {
    id: "dancing-dolls-collection",
    name: "Thanjavur Dancing Doll",
    categories: ["golu-dolls", "clay-dolls"],
    shortDescription:
      "Classic thalayatti bommai dancer in royal purple and magenta with a golden crown.",
    description:
      "A classic Thanjavur thalayatti bommai dancing doll, dressed in a royal purple pleated skirt with a magenta golden-draped saree and an ornate golden head-dress. Hand-painted face and henna-decorated palms capture the grace of a Bharatanatyam dancer — the timeless dancing doll every traditional Golu display deserves.",
    size: "Single doll · Available on request",
    material: "Hand-painted with gold detailing",
    price: null,
    image: "/images/dancing-dolls-collection.jpg",
    gallery: ["/images/dancing-dolls-collection.jpg"],
    featured: true,
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getFeaturedProducts = () => products.filter((p) => p.featured);

export const categoryLabel = (slug) =>
  categories.find((c) => c.slug === slug)?.label ?? slug;
