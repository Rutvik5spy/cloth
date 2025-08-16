import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const products = [
  { id: 1, title: "UM Core Hoodie // Orchid Hush", price: 1849, oldPrice: 2500, discount: "26% OFF", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTu56ZlHho3W5N6cXFwjqG80gnk-gEHidE2J8Tzz0jAi2Ee2vfg-R5uDPU8_BL-td15MuR3AZtCyaPgTcULZNch1x8-wdtL0fAXDMHjWzt2CCyq_xE_9hkrOw" },
  { id: 2, title: "UM Core Hoodie // Rosette",     price: 1849, oldPrice: 2500, discount: "26% OFF", image: "https://www.urbanmonkey.com/cdn/shop/files/Urban-monkey-6039-867035.jpg?v=1733829637&width=400" },
  { id: 3, title: "Future Hoodie",                  price: 2049, oldPrice: 2850, discount: "28% OFF", image: "https://cdn.shopify.com/s/files/1/0661/7423/files/rich-kid-denim-washed-blue-um24a-de-006-xs-835713_400x.jpg?v=1734935737" },
  { id: 4, title: "Legacy Hoodie // 001",           price: 2399, oldPrice: 2850, discount: "16% OFF", image: "https://cdn.shopify.com/s/files/1/0661/7423/files/Urban-monkey-4742-314615_400x.jpg?v=1733830009" },
];

export default function NoRestock() {
  const { addToCart, addToWishlist } = useContext(CartContext);

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">🚫 No Restock</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div key={p.id} className="relative rounded-xl shadow hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 p-4 flex flex-col">
            <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded">NO RESTOCK</span>

            <img
              src={p.image}
              // alt={p.title}
              className="w-full h-64 object-cover rounded-md mb-3"
              onError={(e) => { e.currentTarget.src = "/images/placeholder.jpg"; }}
            />

            <h3 className="font-semibold text-gray-800 text-sm mb-1">{p.title}</h3>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-lg font-bold">₹{p.price}</span>
              <span className="line-through text-gray-500 text-sm">₹{p.oldPrice}</span>
              <span className="text-red-500 text-sm">{p.discount}</span>
            </div>

            <div className="mt-auto flex gap-2">
              <button
                onClick={() => addToCart(p)}
                className="flex-1 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Add to Cart
              </button>
              <button
                onClick={() => addToWishlist(p)}
                className="px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-300 transition"
                title="Add to Wishlist"
              >
                ❤️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
