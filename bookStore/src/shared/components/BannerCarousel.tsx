import React, { useState } from "react";

const banners = [
  "/banner1.jpg",
  "/banner2.jpg",
  "/banner3.jpg",
];

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-60 overflow-hidden bg-gray-200 rounded-lg">
      {/* Hiển thị banner hiện tại */}
      <img
        src={banners[currentIndex]}
        alt="Banner"
        className="w-full h-full object-cover transition-all duration-300"
      />

      {/* Nút Previous */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        ❮
      </button>

      {/* Nút Next */}
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  );
}
