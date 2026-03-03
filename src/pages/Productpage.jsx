// ProductPage.jsx
// Usage with React Router v6:
//   <Route path="/product/:id" element={<ProductPage />} />
// In ItemGrid, wrap card with:
//   <Link to={`/product/${item.id}`}>...</Link>

import { useState } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";

// ── Mock hook (remove when wiring real router) ────────────────────────────────
const useParams = () => ({ id: "1" });
const useNavigate = () => () => {};
const Link = ({ to, children, className }) => <a href={to} className={className}>{children}</a>;

// ── Data ──────────────────────────────────────────────────────────────────────
const PRODUCTS = {
  "1": {
    id: "1",
    name: "Minimalist Watch",
    price: 129.99,
    originalPrice: 179.99,
    seller: { name: "TimeCo Studio", avatar: "https://i.pravatar.cc/48?img=11", rating: 4.9, sales: 2341 },
    rating: 4.8,
    reviews: 124,
    badge: "Popular",
    description: "A refined timepiece stripped of excess. The Minimalist Watch features a brushed stainless steel case, sapphire crystal glass, and a genuine leather strap that molds to your wrist over time. Built for those who understand that true luxury is in restraint.",
    specs: ["38mm case diameter", "Sapphire crystal glass", "Japanese quartz movement", "Genuine leather strap", "Water resistant 5 ATM"],
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&h=700&fit=crop",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=700&h=700&fit=crop",
      "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=700&h=700&fit=crop",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=700&h=700&fit=crop",
    ],
    reviewList: [
      { id: 1, name: "Alex M.", avatar: "https://i.pravatar.cc/40?img=3", rating: 5, date: "Jan 12, 2025", text: "Absolutely stunning. Wore it to a business dinner and got three compliments." },
      { id: 2, name: "Jamie L.", avatar: "https://i.pravatar.cc/40?img=5", rating: 4, date: "Dec 28, 2024", text: "Great quality for the price. The leather strap is stiff at first but softens nicely." },
      { id: 3, name: "Sam K.", avatar: "https://i.pravatar.cc/40?img=8", rating: 5, date: "Nov 5, 2024", text: "Minimalist without being boring. Exactly what I was looking for." },
    ],
  },
};

const RELATED = [
  { id: "2", name: "Desk Analog Clock", price: 42.00, image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=300&h=300&fit=crop", rating: 4.7, seller: "TimeCo Studio" },
  { id: "3", name: "Leather Wallet", price: 55.00, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=300&h=300&fit=crop", rating: 4.5, seller: "Craft & Co." },
  { id: "4", name: "Canvas Backpack", price: 49.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop", rating: 4.9, seller: "Carry Co." },
  { id: "5", name: "Titanium Card Holder", price: 38.00, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=300&fit=crop", rating: 4.6, seller: "EdgeWorks" },
];

// ── Sub-components ─────────────────────────────────────────────────────────────

function StarIcon({ filled, half }) {
  return (
    <svg className={`w-4 h-4 ${filled || half ? "text-amber-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => <StarIcon key={s} filled={s <= Math.round(rating)} />)}
    </div>
  );
}

function ImageGallery({ images }) {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + images.length) % images.length);
  const next = () => setActive((a) => (a + 1) % images.length);

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 group">
        <img
          key={active}
          src={images[active]}
          alt="product"
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition opacity-0 group-hover:opacity-100"
        >
          <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition opacity-0 group-hover:opacity-100"
        >
          <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
        </button>
        {/* Dot indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className={`w-1.5 h-1.5 rounded-full transition-all ${i === active ? "bg-white w-4" : "bg-white/50"}`} />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${i === active ? "border-gray-900 scale-95" : "border-transparent opacity-60 hover:opacity-100"}`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

function RelatedCard({ item }) {
  return (
    <Link to={`/product/${item.id}`} className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
      <div className="aspect-square overflow-hidden bg-gray-50">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-3">
        <p className="text-xs text-gray-400 truncate">{item.seller}</p>
        <p className="text-sm font-semibold text-gray-900 truncate">{item.name}</p>
        <div className="flex items-center justify-between mt-1">
          <Stars rating={item.rating} />
          <span className="text-sm font-bold text-gray-900">${item.price}</span>
        </div>
      </div>
    </Link>
  );
}

// ── ProductPage ───────────────────────────────────────────────────────────────

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS[id] || PRODUCTS["1"];

  const [qty, setQty] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2200);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Nav */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-gray-700 transition">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-gray-700 transition">Shop</Link>
            <span>/</span>
            <span className="text-gray-700 font-medium truncate max-w-40">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

          {/* Left: Gallery */}
          <ImageGallery images={product.images} />

          {/* Right: Info */}
          <div className="flex flex-col gap-6">

            {/* Badge + name */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                {product.badge && (
                  <span className="bg-black text-white text-xs font-semibold px-2.5 py-1 rounded-full">{product.badge}</span>
                )}
                {discount > 0 && (
                  <span className="bg-rose-100 text-rose-600 text-xs font-bold px-2.5 py-1 rounded-full">-{discount}% OFF</span>
                )}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 leading-tight">{product.name}</h1>
            </div>

            {/* Rating summary */}
            <div className="flex items-center gap-3">
              <Stars rating={product.rating} />
              <span className="text-sm text-gray-600 font-medium">{product.rating}</span>
              <span className="text-sm text-gray-400">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-[15px]">{product.description}</p>

            {/* Specs */}
            <ul className="flex flex-col gap-1.5">
              {product.specs.map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>

            {/* Qty + CTA */}
            <div className="flex items-center gap-3 pt-2">
              {/* Qty */}
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-10 h-11 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition text-lg font-light">−</button>
                <span className="w-10 text-center text-sm font-semibold text-gray-900">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} className="w-10 h-11 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition text-lg font-light">+</button>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                className={`flex-1 h-11 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  addedToCart
                    ? "bg-green-500 text-white"
                    : "bg-gray-900 text-white hover:bg-gray-700 active:scale-95"
                }`}
              >
                {addedToCart ? "Added to Cart ✓" : "Add to Cart"}
              </button>

              {/* Wishlist */}
              <button
                onClick={() => setWishlisted(w => !w)}
                className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all ${
                  wishlisted ? "border-rose-300 bg-rose-50" : "border-gray-200 hover:bg-gray-100"
                }`}
              >
                <svg className={`w-5 h-5 ${wishlisted ? "text-rose-500" : "text-gray-500"}`} fill={wishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            {/* Seller card */}
            <div className="border border-gray-100 rounded-2xl p-4 flex items-center gap-4 bg-white">
              <img src={product.seller.avatar} alt={product.seller.name} className="w-12 h-12 rounded-full object-cover" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm">{product.seller.name}</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Stars rating={product.seller.rating} />
                  <span className="text-xs text-gray-500">{product.seller.sales.toLocaleString()} sales</span>
                </div>
              </div>
              <button className="text-sm font-medium text-gray-700 border border-gray-200 px-3 py-1.5 rounded-xl hover:bg-gray-50 transition whitespace-nowrap">
                Visit Shop
              </button>
            </div>
          </div>
        </div>

        {/* ── Reviews ── */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {product.reviewList.map((r) => (
              <div key={r.id} className="bg-white rounded-2xl p-5 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <img src={r.avatar} alt={r.name} className="w-9 h-9 rounded-full" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{r.name}</p>
                    <p className="text-xs text-gray-400">{r.date}</p>
                  </div>
                </div>
                <Stars rating={r.rating} />
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Related Products ── */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {RELATED.map((item) => (
              <RelatedCard key={item.id} item={item} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}