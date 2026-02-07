"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#141414]" : "bg-linear-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-10 lg:px-16 h-16 md:h-20">
        <h1 className="text-[#E50914] font-bold text-2xl md:text-3xl">
          NETFLIX
        </h1>

        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
          <span className="cursor-pointer hover:text-white hover:font-bold duration-500 transition-all text-white/80">
            Home
          </span>
          <span className="cursor-pointer hover:text-white hover:font-bold duration-500 transition-all text-white/80">
            TV Shows
          </span>
          <span className="cursor-pointer hover:text-white hover:font-bold duration-500 transition-all text-white/80">
            Movies
          </span>
          <span className="cursor-pointer hover:text-white hover:font-bold duration-500 transition-all text-white/80">
            New & Popular
          </span>
          <span className="cursor-pointer hover:text-white hover:font-bold duration-500 transition-all text-white/80">
            My List
          </span>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button className="hover:text-white text-white/70 transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          <div className="w-8 h-8 bg-[#E50914] rounded flex items-center justify-center text-sm font-semibold">
            U
          </div>
        </div>
      </div>
    </nav>
  );
}