import { useState } from "react";

function StarIcon({ filled }) {
  return (
    <svg className={`w-3.5 h-3.5 ${filled ? "text-amber-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function HeartIcon({ filled }) {
  return (
    <svg className={`w-4 h-4 transition-all duration-200 ${filled ? "text-rose-500 scale-110" : "text-gray-400"}`} fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

export function ItemCard({ item }) {
  const [liked, setLiked] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);


  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="group relative w-72 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-50 h-64">
        <img
          src={item.image}
          alt={item.name}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
        />

        {/* Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse" />
        )}

        {/* Wishlist */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-150"
        >
          <HeartIcon filled={liked} />
        </button>

        {/* Quick view overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/60 backdrop-blur-sm py-3 flex justify-center">
          <span className="text-white text-sm font-medium tracking-wide">Quick View</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Seller */}
        <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">{item.seller}</p>

        {/* Name */}
        <h3 className="text-gray-900 font-semibold text-base leading-snug mb-2 truncate">{item.name}</h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <StarIcon key={s} filled={s <= Math.round(item.rating)} />
            ))}
          </div>
          <span className="text-xs text-gray-500">{item.rating} ({item.reviews})</span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-gray-900">${item.price}</span>
          </div>

          <button
            onClick={handleAddToCart}
            className={`text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 ${
              addedToCart
                ? "bg-green-500 text-white scale-95"
                : "bg-gray-900 text-white hover:bg-gray-700 active:scale-95"
            }`}
          >
            {addedToCart ? "Added ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
