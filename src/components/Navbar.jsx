import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 text-left group">
            <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-red-600/40">
              ⚡
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-wider text-white block leading-tight">
                APEX SPORTS CARS
              </span>
              <span className="text-xs tracking-widest text-red-500 uppercase font-semibold">
                SUPERCAR MUSEUM
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#featured"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
            >
              Supercars
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#collection"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
            >
              Categories
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {/* Book Tickets CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-red-600/30 hover:scale-105"
            >
              Book Tickets
            </a>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-md hover:bg-zinc-800 transition cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  // X Close Icon
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // Hamburger Icon
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#111111] border-b border-[#222222] px-4 pt-2 pb-6 space-y-3">
          <a
            href="#home"
            onClick={closeMenu}
            className="block text-base font-medium text-gray-300 hover:text-white py-2 px-3 rounded hover:bg-zinc-800"
          >
            Home
          </a>
          <a
            href="#featured"
            onClick={closeMenu}
            className="block text-base font-medium text-gray-300 hover:text-white py-2 px-3 rounded hover:bg-zinc-800"
          >
            Supercars
          </a>
          <a
            href="#about"
            onClick={closeMenu}
            className="block text-base font-medium text-gray-300 hover:text-white py-2 px-3 rounded hover:bg-zinc-800"
          >
            About
          </a>
          <a
            href="#collection"
            onClick={closeMenu}
            className="block text-base font-medium text-gray-300 hover:text-white py-2 px-3 rounded hover:bg-zinc-800"
          >
            Categories
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="block text-base font-medium text-gray-300 hover:text-white py-2 px-3 rounded hover:bg-zinc-800"
          >
            Contact
          </a>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={closeMenu}
              className="block text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-lg transition"
            >
              Book Tickets
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
