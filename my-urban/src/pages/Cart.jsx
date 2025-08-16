
// import React, { useContext, useState, useEffect } from "react";
// import { CartContext } from "../context/CartContext";

// const Cart = () => {
//   const { removeFromCart } = useContext(CartContext);
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(cart);
//   }, []);

//   const handleRemove = (id) => {
//     removeFromCart(id);
//     setCartItems(cartItems.filter((item) => item.id !== id));
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>No items in cart.</p>
//       ) : (
//         <div className="grid gap-4">
//           {cartItems.map((item) => (
//             <div key={item.id} className="p-4 border rounded-lg flex justify-between">
//               <div>
//                 <img src={item.image} alt={item.title} className="w-24 h-24 object-cover" />
//                 <p className="font-bold">{item.title}</p>
//               </div>
//               <button
//                 onClick={() => handleRemove(item.id)}
//                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
// src/pages/Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">🛒 My Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cart.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <img
                src={item.image}
                
                className="w-full h-64 object-cover rounded"
                onError={(e) => { e.currentTarget.src = "/images/placeholder.jpg"; }}
              />
              <h3 className="mt-3 font-semibold">{item.title}</h3>
              <p className="text-red-500 font-bold">₹{item.price}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-3 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
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
