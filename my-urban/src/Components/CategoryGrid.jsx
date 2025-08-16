// src/components/CategoryGrid.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CategoryGrid() {
  const [categories, setCategories] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [err, setErr] = useState("");

  // useEffect(() => {
  //   fetch("/categories.json")
  //     .then((r) => {
  //       if (!r.ok) throw new Error(`HTTP ${r.status}`);
  //       return r.json();
  //     })
  //     .then(setCategories)
  //     .catch((e) => setErr(`Failed to load categories: ${e.message}`));
  // }, []);
  useEffect(() => {
  fetch("/categories.json")
    .then((res) => res.json())
    .then((data) => setCategories(data))
    .catch((err) => console.error("Failed to load categories:", err));
}, []);


  if (err) {
    return <div className="text-red-600 p-4">{err}</div>;
  }

  return (
    <div className="bg-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {categories.map((cat, i) => (
          <Link
            key={`${cat.name}-${i}`}
            to={cat.link}
            className="group bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="w-full h-48 sm:h-56 lg:h-60 flex items-center justify-center bg-white">
              <img
                src={cat.image}
                alt={cat.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="bg-black py-2 text-center">
              <span className="text-white font-bold tracking-widest text-sm group-hover:text-yellow-400 transition-colors">
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
