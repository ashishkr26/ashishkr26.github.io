import { useState } from "react";

export default function ProjectSlider({ images }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative rounded-xl overflow-hidden border border-gray-800">
      <img
        src={images[current]}
        alt="Project screenshot"
        className="w-full h-56 object-cover"
      />

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded-md"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded-md"
      >
        ›
      </button>
    </div>
  );
}
