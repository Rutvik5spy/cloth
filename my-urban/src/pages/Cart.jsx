import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { SearchContext } from "../context/SearchContext";

export default function Cart  () {
  const { cart, removeFromCart } = useContext(CartContext);
  const { searchTerm } = useContext(SearchContext);

  // 🔎 Filter cart items
  const filteredCart = cart.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">🛒 Cart</h1>

      {filteredCart.length === 0 ? (
        <p className="text-center text-gray-500">No items found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCart.map((item) => (
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

              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white py-2 rounded hover:bg-red-600 mt-auto"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
