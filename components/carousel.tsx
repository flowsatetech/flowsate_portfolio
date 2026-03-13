"use client";
import React, { ReactNode, useRef } from "react";

interface CarouselProps {
  items: ReactNode[];
  itemMinWidth?: number; // Minimum width of each item in px
}

const Carousel: React.FC<CarouselProps> = ({ items, itemMinWidth = 250 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth / 2;
      containerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100 transition"
        aria-label="Scroll Left"
      >
        ←
      </button>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100 transition"
        aria-label="Scroll Right"
      >
        →
      </button>

      <div className="overflow-x-auto scrollbar-hide py-4" ref={containerRef}>
        <div className="flex gap-6" style={{ minWidth: "max-content" }}>
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0"
              style={{ minWidth: `${itemMinWidth}px` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;