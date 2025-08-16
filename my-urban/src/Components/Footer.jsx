// src/components/Footer.js
import React from "react";
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube, FaSpotify } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black py-10 px-6 md:px-16">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm font-mono">
        <div>
          <h3 className="font-bold mb-3">COOL STUFF</h3>
          <ul className="space-y-1">
            <li><a href="#">about us</a></li>
            <li><a href="#">blog</a></li>
            <li><a href="#">shop all</a></li>
            <li><a href="#">new arrivals</a></li>
            <li><a href="#">hats and caps</a></li>
            <li><a href="#">apparel</a></li>
            <li><a href="#">eyewear</a></li>
            <li><a href="#">accessories</a></li>
            <li><a href="#">collabs</a></li>
            <li><a href="#">rewards</a></li>
            <li><a href="#">loop waitlist</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">BORING STUFF</h3>
          <ul className="space-y-1">
            <li><a href="#">track order</a></li>
            <li><a href="#">returns</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">LEGAL</h3>
          <ul className="space-y-1">
            <li><a href="#">terms and conditions</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">shipping policy</a></li>
            <li><a href="#">returns policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">LET'S CONNECT</h3>
          <ul className="space-y-1">
            <li><a href="#">whatsapp</a></li>
            <li><a href="#">email</a></li>
            <li><a href="#">contact us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">STORE LOCATOR</h3>
          <ul className="space-y-1">
            <li><a href="#">mumbai</a></li>
            <li><a href="#">bangalore</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media */}
      {/* Social Media */}
<div className="mt-10">
  <h3 className="font-bold mb-3">UM SOCIAL MEDIA</h3>
  <div className="flex space-x-4 text-xl">
    <a href="#" className="transition-transform duration-300 hover:scale-110">
      <FaFacebook />
    </a>
    <a href="#" className="transition-transform duration-300 hover:scale-110">
      <FaInstagram />
    </a>
    <a href="#" className="transition-transform duration-300 hover:scale-110">
      <FaPinterest />
    </a>
    <a href="#" className="transition-transform duration-300 hover:scale-110">
      <FaYoutube />
    </a>
    <a href="#" className="transition-transform duration-300 hover:scale-110">
      <FaSpotify />
    </a>
  </div>
</div>


      {/* Popular Searches */}
      <div className="mt-10 text-sm">
        <h3 className="font-bold mb-2">POPULAR SEARCHES</h3>
        <p className="leading-relaxed text-gray-700">
          hats & caps, baseball caps, snapback caps, dad caps, athleisure caps,
          trucker caps, bucket caps, beanies, eyewear, sunglasses, eyeglasses,
          wallets, unisex clothing, accessories, sling bags, loop watch, hoodies,
          sweatshirts, jogger pants, shorts, boxers, oversized t-shirts, regular fit
          t-shirts, denims, long sleeve t-shirts, jackets, co-ord sets, new arrivals,
          urban monkey sale, backpacks, skateboard deck, skateboard spare parts,
          streetwear belts, collaborations
        </p>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-xs text-gray-500 text-center border-t border-gray-300 pt-4">
        COPYRIGHT © 2025 URBAN MONKEY® – HEADWEAR, T-SHIRTS, SUNGLASSES,
        WALLETS, FACE MASKS, CAPS, SKATEBOARDS
      </div>
    </footer>
  );
}
