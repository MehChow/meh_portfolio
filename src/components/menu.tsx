"use client";

import { useState } from "react";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Menu Button */}
      <div
        className="absolute right-6 top-0 translate-y-1/2 text-white cursor-pointer z-99 w-12 h-12 bg-red-200 flex justify-center items-center rounded-full"
        onClick={toggleMenu}
      >
        Menu
      </div>

      {/* Overlay and Menu Content */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center"
          onClick={toggleMenu}
        >
          <div
            className="bg-white p-8 rounded-lg w-80 max-w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
          >
            {/* Close Button */}
            <button className="absolute top-4 right-4 text-black text-2xl" onClick={toggleMenu}>
              ✕
            </button>

            {/* Menu Items */}
            <nav>
              <ul className="space-y-4">
                <li>
                  <button className="w-full text-left py-2 px-4 bg-blue-500 text-white rounded">
                    Homepage
                  </button>
                </li>
                <li>
                  <button className="w-full text-left py-2 px-4 bg-blue-500 text-white rounded">
                    Portfolio
                  </button>
                </li>
                <li>
                  <button className="w-full text-left py-2 px-4 bg-blue-500 text-white rounded">
                    Motion
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
