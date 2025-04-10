"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import "./menu.css";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else if (isVisible) {
      const timer = setTimeout(() => setIsVisible(false), 300); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen, isVisible]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Menu Button */}
      <div
        className="absolute right-6 top-0 translate-y-1/2 text-white cursor-pointer z-[99] w-10 h-10 bg-white opacity-80 
          flex flex-col gap-1 justify-center items-center rounded-full hover:opacity-90 transition-all group hover:scale-105"
        onClick={toggleMenu}
      >
        <div
          className={`border-solid border-1 w-4 bg-black border-black transition-all duration-500 rounded ${
            isOpen && "translate-y-1 rotate-45"
          }`}
        />
        <div
          className={`border-solid border-1 w-4 bg-black border-black transition-all duration-500 rounded ${
            isOpen && "-translate-y-0.5 -rotate-45"
          }`}
        />
      </div>

      {/* Overlay and Menu Content */}
      {isVisible && (
        <div
          className={`fixed inset-0  bg-cover bg-top z-50 flex justify-center items-center backgroundOverlay ${
            isOpen ? "animate-fade-in" : "animate-fade-out"
          }`}
          onClick={toggleMenu}
        >
          {/* Menu Items */}
          <nav className="text-white/70 flex flex-col items-center gap-4 text-3xl font-bold">
            <div className="max-[800px]:flex-col flex items-center max-[800px]:gap-4 gap-10">
              <Link
                href="/"
                className="hover:opacity-100 hover:text-white transition-all duration-500"
              >
                Homepage
              </Link>
              <Link
                href="/about-me"
                className="hover:opacity-100 hover:text-white transition-all duration-500"
              >
                About me
              </Link>
              <Link
                href="/skills"
                className="hover:opacity-100 hover:text-white transition-all duration-500"
              >
                Dev skills
              </Link>
            </div>

            <div className="max-[800px]:flex-col flex items-center max-[800px]:gap-4 gap-10">
              <Link
                href="/projects"
                className="hover:opacity-100 hover:text-white transition-all duration-500"
              >
                Projects
              </Link>
              <Link
                href="/life"
                className="hover:opacity-100 hover:text-white transition-all duration-500"
              >
                Life
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Menu;
