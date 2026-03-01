import { ItemCard } from "../common/Itemcard"
import { useState } from "react";

const ITEMS = [
  { id: 1, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop", name: "Minimalist Watch", price: 129.99, originalPrice: 179.99, seller: "TimeCo Studio", rating: 4.8, reviews: 124, badge: "Popular" },
  { id: 2, image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop", name: "Matte Lip Set", price: 34.99, originalPrice: null, seller: "Glow Lab", rating: 4.5, reviews: 88, badge: null },
  { id: 3, image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=400&fit=crop", name: "Trail Runner Pro", price: 89.99, originalPrice: 119.99, seller: "KickBase", rating: 4.7, reviews: 210, badge: "Sale" },
  { id: 4, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop", name: "Instant Camera", price: 74.99, originalPrice: null, seller: "SnapHouse", rating: 4.6, reviews: 57, badge: "New" },
  { id: 5, image: "https://images.unsplash.com/photo-1611186871525-2f2e6c9e4ff5?w=400&h=400&fit=crop", name: "Wireless Buds X", price: 59.99, originalPrice: 89.99, seller: "SoundDrop", rating: 4.4, reviews: 302, badge: null },
  { id: 6, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop", name: "Canvas Backpack", price: 49.99, originalPrice: null, seller: "Carry Co.", rating: 4.9, reviews: 176, badge: "Popular" },
  { id: 7, image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop", name: "Classic Sneakers", price: 95.00, originalPrice: 130.00, seller: "SoleCraft", rating: 4.3, reviews: 95, badge: "Sale" },
  { id: 8, image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=400&h=400&fit=crop", name: "Desk Analog Clock", price: 42.00, originalPrice: null, seller: "TimeCo Studio", rating: 4.7, reviews: 43, badge: null },
];

const CATEGORIES = ["All", "Accessories", "Beauty", "Footwear", "Tech", "Bags"];

export const Products = () => {
const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const sorted = [...ITEMS].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Marketplace</h1>
            <p className="text-sm text-gray-400">{ITEMS.length} items</p>
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 cursor-pointer"
          >
            <option value="default">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Category Pills */}
        <div className="max-w-6xl mx-auto px-6 pb-4 flex gap-2 overflow-x-auto scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150 ${
                activeCategory === cat
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {sorted.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
    )
}