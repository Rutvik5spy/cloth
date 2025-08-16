import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { SearchContext } from "../context/SearchContext";

export default function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart } = useContext(CartContext);
  const { searchTerm } = useContext(SearchContext);

  // 🔎 Filter wishlist items
  const filteredWishlist = wishlist.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">❤️ Wishlist</h1>

      {filteredWishlist.length === 0 ? (
        <p className="text-center text-gray-500">No items found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredWishlist.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded mb-3"
              />
              <h2 className="font-semibold text-lg mb-2">{item.title}</h2>
              <p className="text-gray-700 mb-2">₹{item.price}</p>

              <div className="mt-auto flex gap-2">
                <button
                  onClick={() => addToCart(item)}
                  className="flex-1 bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
                >
                  Move to Cart
                </button>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-300"
                >
                  ❌
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
