import "@tailwindplus/elements";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-indigo-900 shadow-lg relative">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-blue-200 hover:bg-white/10 hover:text-white focus:outline-none transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon hamburger */}
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                // Icon close
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M6 18 18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Logo & Desktop menu */}
          <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
            <div className="flex shrink-0 items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent md:text-center sm:text-center absolute left-1/2 -translate-x-1/2 sm:static sm:translate-x-0">
                Wira Teknologi
              </h1>
            </div>
            <div className="hidden sm:block">
              <div className="flex space-x-1">
                <a
                  href="#home"
                  className="px-4 py-2 text-sm font-medium text-blue-100 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300 relative group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#about"
                  className="px-4 py-2 text-sm font-medium text-blue-100 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300 relative group"
                >
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#services"
                  className="px-4 py-2 text-sm font-medium text-blue-100 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300 relative group"
                >
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#portofolio"
                  className="px-4 py-2 text-sm font-medium text-blue-100 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300 relative group"
                >
                  Portfolio
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#contact"
                  className="px-4 py-2 text-sm font-medium text-blue-100 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300 relative group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden px-2 pt-2 pb-3 space-y-1 bg-blue-900/95 backdrop-blur-sm">
          <a
            href="#home"
            className="block px-3 py-2 text-base font-medium text-blue-100 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300 relative"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="block px-3 py-2 text-base font-medium text-blue-100 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300 relative"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 hover:w-full"></span>
          </a>
          <a
            href="#services"
            className="block px-3 py-2 text-base font-medium text-blue-100 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300 relative"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 hover:w-full"></span>
          </a>
          <a
            href="#portofolio"
            className="block px-3 py-2 text-base font-medium text-blue-100 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300 relative"
          >
            Portfolio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 text-base font-medium text-blue-100 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300 relative"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 hover:w-full"></span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
