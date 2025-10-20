import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["About", "Apps", "Features"];

  return (
    <header className="w-full bg-transparent backdrop-blur-md shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <i className="ri-heart-pulse-line text-2xl text-red-600"></i>
          <span className="text-xl font-bold text-gray-800">Wellnex</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex justify-between gap-8 font-bold">
            <li className="text-dark hover:text-[#029e7a] transition">
              <NavLink to="/" end>Home</NavLink>
            </li>
            <li className="text-dark hover:text-[#029e7a] transition">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="text-dark hover:text-[#029e7a] transition">
              <NavLink to="/app">App</NavLink>
            </li>
            <li className="text-dark hover:text-[#029e7a] transition">
              Features
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <i className="ri-close-line"></i> : <i className="ri-menu-line"></i>}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-transparent backdrop-blur-md shadow-md px-6 py-4 space-y-4">
          <ul className="space-y-4">
            <li
              onClick={() => setMenuOpen(false)}
              className="block text-dark hover:text-[#029e7a] transition cursor-pointer"
            >
              <NavLink to="/" className="block w-full" end>
                Home
              </NavLink>
            </li>

            <li
              onClick={() => setMenuOpen(false)}
              className="block text-dark hover:text-[#029e7a] transition cursor-pointer"
            >
              <NavLink to="/about" className="block w-full">
                About
              </NavLink>
            </li>

            <li
              onClick={() => setMenuOpen(false)}
              className="block text-dark hover:text-[#029e7a] transition cursor-pointer"
            >
              <NavLink to="/app" className="block w-full">
                App
              </NavLink>
            </li>

            <li
              onClick={() => setMenuOpen(false)}
              className="block text-dark hover:text-[#029e7a] transition cursor-pointer"
            >

                Features
              
            </li>

            <li>
              <button className="w-full bg-[#00B894] text-white font-semibold rounded-full shadow-lg hover:bg-[#029e7a] transition-transform hover:scale-105">
                Join Now
              </button>
            </li>
          </ul>
        </div>

      )}
    </header>
  );
}

export default Header;
