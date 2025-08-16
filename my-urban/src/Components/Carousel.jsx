import React, { useState, useEffect, useRef } from "react";

const Carousel = () => {
  const images = [
    "https://cdn.shopify.com/s/files/1/0661/7423/files/gully-gang-um-banner.jpg?v=1637315468",
    "https://cdn.shopify.com/s/files/1/0661/7423/files/rannvijay-um-banner.jpg?v=1637315469",
    "https://freight.cargo.site/t/original/i/4ab57ca3b2c8eac03d923e5346e43ba7205a9c37fff3d1e4f15e7c903d2d4d6b/vari0us-various-Urban-Monkey-Planet-Displa-2.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Touch events
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    } else if (diff < -50) {
      setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full overflow-hidden h-[500px] md:h-[650px]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-yellow-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
