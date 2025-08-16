
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Wishlist() {
  const { wishlist, removeFromWishlist,addToCart  } = useContext(CartContext);
  
   const moveToCart = (item) => {
    removeFromWishlist(item.id);
    addToCart(item);
  };
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">❤️ My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <img
                src={item.image}
               
                className="w-full h-64 object-cover rounded"
                onError={(e) => { e.currentTarget.src = "/images/placeholder.jpg"; }}
              />
              <h3 className="mt-3 font-semibold">{item.title}</h3>
              <p className="text-red-500 font-bold">₹{item.price}</p>

              <button
                onClick={() => removeFromWishlist(item.id)}
                className="mt-3 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Remove
              </button>

                <button
                  onClick={() => moveToCart(item)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                >
                  Move to Cart
                </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
