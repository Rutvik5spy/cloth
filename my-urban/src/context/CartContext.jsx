/* eslint-disable react-refresh/only-export-components */
// src/context/CartContext.js 
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
// error commimg
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem("wishlist")) || []);

  // Persist to localStorage whenever state changes
  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem("wishlist", JSON.stringify(wishlist)), [wishlist]);

  const addToCart = (item) => {
    setCart((prev) => (prev.find((x) => x.id === item.id) ? prev : [...prev, item]));
  };
  const addToWishlist = (item) => {
    setWishlist((prev) => (prev.find((x) => x.id === item.id) ? prev : [...prev, item]));
  };
  const removeFromCart = (id) => setCart((prev) => prev.filter((x) => x.id !== id));
  const removeFromWishlist = (id) => setWishlist((prev) => prev.filter((x) => x.id !== id));

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        cartCount: cart.length,
        wishlistCount: wishlist.length,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
