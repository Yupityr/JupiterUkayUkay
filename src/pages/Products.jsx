import { ItemCard } from "../common/Itemcard"

const sampleItem = {
  id: 1,
  image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
  name: "Minimalist Watch",
  price: 129.99,
  originalPrice: 179.99,
  seller: "TimeCo Studio",
  rating: 4.8,
  reviews: 124,
};

export const Products = () => {

    return (
        <div className="flex flex-col gap-4 justify-center items-center h-screen bg-sky-50">
            <ItemCard item={sampleItem} />
        </div>
    )
}