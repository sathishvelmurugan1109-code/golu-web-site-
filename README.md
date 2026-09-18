# Unique Golu Collections

**Celebrate Golu Like Never Before!**

Premium e-commerce catalogue website for traditional Golu dolls, Amman idols, clay idols
and Navaratri Golu collections — built with React + Vite + Tailwind CSS.

## Tech Stack

- React 19 + Vite 7
- Tailwind CSS v4 (`@tailwindcss/vite`)
- React Router v7
- Lucide React icons

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build (outputs to /dist)
npm run preview  # preview the production build
```

## Project Structure

```
public/
  images/            # product photography (add new photos here)
src/
  components/        # Navbar, Hero, ProductCard, ProductGrid, CategorySection,
                     # ProductDetails, About, WhyChooseUs, DeliverySection, Contact,
                     # Footer, WhatsAppButton, BackToTop, SearchOverlay, SectionHeading
  data/products.js   # ⭐ product catalogue — add/edit products here
  hooks/             # useScrollReveal (scroll animations)
  pages/             # Home, Collections, ProductDetails, About, Contact, 404
  utils/whatsapp.js  # WhatsApp order/enquiry link builder
```

## Managing Products

Open `src/data/products.js`:

- Add a new object to `products` with a unique slug `id`.
- Put the photo in `public/images/` and set `image: "/images/your-photo.jpg"`.
- Set `price` to a number, or leave `null` to display **“Contact for Price”**.
- Add category slugs to `categories` so the product shows up in filters.

## WhatsApp Ordering

All “Order on WhatsApp” buttons open `https://wa.me/919843141720` with a pre-filled
message containing product name, size and quantity. The enquiry form on the Contact
section also composes a formatted WhatsApp message.

## Business Details

- **Bookings:** 9843141720
- **Instagram:** [@uniquegolucollections](https://www.instagram.com/uniquegolucollections)
- **Address:** 2, Rathna Nagar, Manjakuppam, Cuddalore, Tamil Nadu 607001
