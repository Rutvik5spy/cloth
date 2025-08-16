import React, { useState , useContext} from "react";
import { User, Heart, ShoppingCart, Menu, X } from "lucide-react"; // Lighter icons
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
   const { cartCount, wishlistCount } = useContext(CartContext);
   //  const { cart = [], wishlist = [] } = useContext(CartContext) || {}; 

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Brand */}
        <Link
  to="/"
  className="text-2xl font-bold text-gray-800 ml-4 md:ml-32"
>
  URBAN MONKEY
</Link>

        {/* Search Bar (Hidden on mobile) */}
        <div className="hidden md:flex flex-1 justify-center px-4">
          <input
            type="text"
            placeholder="Search for Products"
            className="w-full max-w-2xl px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Desktop Icons */}
            <div className="hidden md:flex items-center space-x-6 text-gray-600 mr-40">
  {/* Account */}
  <Link to="/account" className="relative hover:text-yellow-500">
    <User className="w-6 h-6" strokeWidth={1.5} />
  </Link>

  {/* Wishlist with Counter */}
<Link to="/wishlist" className="relative hover:text-yellow-500">
  <Heart className="w-6 h-6" strokeWidth={1.5} />
  {wishlistCount > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
      {wishlistCount}
    </span>
  )}
</Link>

<Link to="/cart" className="relative hover:text-yellow-500">
  <ShoppingCart className="w-6 h-6" strokeWidth={1.5} />
  {cartCount > 0 && (
    <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
      {cartCount}
    </span>
  )}
</Link>

</div>


        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
     {/* Mobile Menu */}
    {isOpen && (
     <div className="md:hidden bg-white shadow-md">
    <div className="px-4 py-2">
      <input
        type="text"
        placeholder="Search for Products"
        className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-3"
      />

      {/* Icons in a row */}
      <div className="flex justify-center space-x-6 text-gray-600">
        <Link to="/account" className="hover:text-yellow-500" onClick={() => setIsOpen(false)}>
          <User className="w-6 h-6" strokeWidth={1.5} />
        </Link>
        <Link to="/wishlist" className="hover:text-yellow-500" onClick={() => setIsOpen(false)}>
          <Heart className="w-6 h-6" strokeWidth={1.5} />
        </Link>
        <Link to="/cart" className="hover:text-yellow-500" onClick={() => setIsOpen(false)}>
          <ShoppingCart className="w-6 h-6" strokeWidth={1.5} />
        </Link>
      </div>
    </div>
    </div>
     )}
    

   {/* Secondary Navbar */}
       {/* Secondary Navbar */}
<div className="bg-gray-200 border-t border-gray-300">
  <div className="container mx-auto flex flex-wrap justify-center gap-4 sm:space-x-14 py-4 font-mono">
    <a
      href="/no-restock"
      className="text-sm sm:text-base font-bold tracking-widest hover:text-yellow-500 transition-colors"
    >
      NO RESTOCK
    </a>
    <a
      href="/eyewear"
      className="text-sm sm:text-base font-bold tracking-widest hover:text-yellow-500 transition-colors"
    >
      EYEWEAR
    </a>
    <a
      href="/hats-caps"
      className="text-sm sm:text-base font-bold tracking-widest hover:text-yellow-500 transition-colors"
    >
      HATS & CAPS
    </a>
    <a
      href="/collabs"
      className="text-sm sm:text-base font-bold tracking-widest hover:text-yellow-500 transition-colors"
    >
      COLLABS
    </a>
  </div>
</div>





    </nav>
  );
};

export default Navbar;
