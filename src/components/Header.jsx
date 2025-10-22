import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);

  // ✅ Scroll detection + progress calculation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollWidth(progress);
      setIsScrolled(scrollTop > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* --- Scroll Progress Bar (separate from navbar) --- */}
      <div
        className="fixed top-0 left-0 h-1.5 z-[60] bg-gradient-to-r from-[var(--red-dark)] via-[var(--red)] to-[var(--orange)] shadow-lg transition-all duration-200"
        style={{ width: `${scrollWidth}%` }}
      ></div>

      {/* --- Navbar --- */}
      <header
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${isScrolled
            ? "bg-black/50 backdrop-blur-lg border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-full scale-100"
            : "bg-black/30 backdrop-blur-md border border-white/10 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          }`}
        style={{
          width: "90%",
          maxWidth: "1000px",
        }}
      >
        <div className="flex items-center justify-between px-6 py-3 md:px-8 relative">
          {/* --- Logo Section --- */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-9 h-9 bg-gradient-to-r from-red-600 to-orange-500 rounded-full shadow-md">
              <i className="ri-fire-fill text-white text-xl"></i>
            </div>
            <span className="text-xl md:text-2xl font-bold text-white tracking-wide">
              WELLNEX
            </span>
          </div>

          {/* --- Desktop Navigation --- */}
          <nav className="hidden md:flex items-center gap-10 font-medium">
            {["/", "/about", "/app", "/contact"].map((path, i) => {
              const names = ["Home", "About", "App", "Contact"];
              return (
                <NavLink
                  key={path}
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) =>
                    `uppercase transition text-sm ${isActive
                      ? "text-red-500"
                      : "text-gray-100 hover:text-red-500 duration-200"
                    }`
                  }
                >
                  {names[i]}
                </NavLink>
              );
            })}
          </nav>

          {/* --- CTA Button --- */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-red-600 to-orange-500 hover:opacity-90 text-white font-semibold px-5 py-2 rounded-full uppercase text-sm transition-all shadow-lg">
              Join Now
            </button>
          </div>

          {/* --- Mobile Menu Toggle --- */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative text-white text-2xl md:hidden focus:outline-none w-8 h-8 flex items-center justify-center"
          >
            <i
              className={`ri-menu-line absolute transition-all duration-300 ease-in-out transform ${menuOpen ? "opacity-0 scale-0 rotate-90" : "opacity-100 scale-100 rotate-0"
                }`}
            ></i>

            <i
              className={`ri-close-line absolute transition-all duration-300 ease-in-out transform ${menuOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 -rotate-90"
                }`}
            ></i>
          </button>
        </div>

        {/* --- Mobile Navigation --- */}
        {menuOpen && (
          <div className="md:hidden bg-black/90 text-center rounded-b-3xl backdrop-blur-md py-5 border-t border-white/10 shadow-lg">
            <ul className="space-y-5 text-sm font-semibold uppercase">
              {["/", "/app", "/about", "/contact"].map((path, i) => {
                const names = ["Home", "App", "About", "Contact"];
                return (
                  <li key={path}>
                    <NavLink
                      to={path}
                      onClick={() => setMenuOpen(false)}
                      className="text-gray-200 hover:text-red-500"
                    >
                      {names[i]}
                    </NavLink>
                  </li>
                );
              })}
              <li>
                <button className="bg-gradient-to-r from-red-600 to-orange-500 w-3/4 py-2 rounded-full text-white font-semibold transition shadow-md">
                  Join Now
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
