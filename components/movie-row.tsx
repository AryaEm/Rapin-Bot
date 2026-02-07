"use client";

import { useRef } from "react";

type Props = {
  title: string;
};

export default function MovieRow({ title }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (rowRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="mb-8 md:mb-12 group">
      <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4 px-4 md:px-0">
        {title}
      </h2>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-0 bottom-0 z-20 w-12 bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 hidden md:flex items-center justify-center"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        <div
          ref={rowRef}
          className="flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide scroll-smooth px-4 md:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="min-w-35 md:min-w-50 lg:min-w-60 h-20 md:h-27.5 lg:h-33.75 shrink-0  bg-linear-to-br from-gray-700 to-gray-800 rounded-md cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10 hover:shadow-2xl relative overflow-hidden group/card"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000" />
              
              {title === "Trending Now" && i < 3 && (
                <div className="absolute bottom-2 left-2 text-white font-bold text-lg md:text-2xl drop-shadow-lg">
                  #{i + 1}
                </div>
              )}

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg
                  className="w-10 h-10 md:w-12 md:h-12 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-0 bottom-0 z-20 w-12 bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 hidden md:flex items-center justify-center"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </div>
    </div>
  );
}