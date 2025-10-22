import React from "react";

function Footer() {
  return (
    <footer className="bg-[var(--bg)] text-[var(--text)] py-12 px-6 md:px-16 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-red-600 to-orange-500 rounded-full shadow-md">
              <i className="ri-fire-fill text-white text-xl"></i>
            </div>
            <span className="text-2xl font-bold text-white tracking-wide">
              WELLNEX
            </span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Empowering wellness through innovation — connect with smarter
            fitness, health, and lifestyle solutions built for the modern world.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-gradient-to-r from-red-500 to-orange-500 after:mt-1">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Apps", "Features", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-[var(--red)] transition-colors duration-200 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold text-white mb-4 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-gradient-to-r from-red-500 to-orange-500 after:mt-1">
            Stay Connected
          </h3>
          <div className="flex items-center gap-4 mb-4">
            <a
              href="#"
              className="text-gray-400 hover:text-[var(--red)] transition-colors text-xl"
            >
              <i className="ri-facebook-line"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[var(--red)] transition-colors text-xl"
            >
              <i className="ri-instagram-line"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[var(--red)] transition-colors text-xl"
            >
              <i className="ri-twitter-x-line"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[var(--red)] transition-colors text-xl"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
          </div>
          <p className="text-sm text-gray-400">
            Join our community and stay updated with the latest in health tech
            and wellness innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;