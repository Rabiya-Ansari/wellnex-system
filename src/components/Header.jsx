import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-transparent backdrop-blur-md  shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          <i className="ri-heart-pulse-line text-2xl text-red-600"></i>
          <span className="text-xl font-bold text-gray-800">Wellnex</span>
        </div>

        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-dark hover:text-[#029e7a] transition">
            About
          </a>
          <a href="#apps" className="text-dark hover:text-[#029e7a] transition">
            Apps
          </a>
          <a href="#features" className="text-dark hover:text-[#029e7a] transition">
            Features
          </a>
          <button className="px-5 py-2 bg-[#00B894] text-white font-semibold rounded-full shadow-lg hover:bg-[#029e7a] transition-transform hover:scale-105">
            Join Now
          </button>
        </nav>

        
        <button
          className="md:hidden text-3xl text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <i className="ri-close-line"></i> : <i className="ri-menu-line"></i>}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-tranparent backdrop-blur-md shadow-md px-6 py-4 space-y-4">
          <a href="#about" className="block text-dark hover:text-purple-600 transition">
            About
          </a>
          <a href="#apps" className="block text-dark hover:text-purple-600 transition">
            Apps
          </a>
          <a href="#features" className="block text-dark hover:text-purple-600 transition">
            Features
          </a>
          <button className="w-full bg-[#00B894] text-white font-semibold rounded-full shadow-lg hover:bg-[#029e7a] transition-transform hover:scale-105">
            Join Now
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
