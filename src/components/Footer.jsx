import React from "react";
import ParticleRing from "./ParticleRing"; 

function Footer() {
  return (
    <footer className="relative bg-[var(--bg)] text-[var(--text)] pt-16 pb-8 px-6 md:px-16 border-t border-[var(--border)] overflow-hidden">


      <div className="absolute inset-0 z-10 opacity-40">
        <ParticleRing />
      </div>


      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">
        

        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-[var(--red)] to-[var(--orange)] rounded-full shadow-md">
              <i className="ri-fire-fill text-[var(--white)] text-xl"></i>
            </div>
            <span className="text-2xl font-bold text-[var(--white)] tracking-wide">
              WELLNEX
            </span>
          </div>
          <p className="text-sm leading-relaxed text-[var(--text-muted)]">
            Empowering wellness through AI and innovation — bridging mind, body,
            and technology for a healthier tomorrow.
          </p>
        </div>


        <div>
          <h3 className="text-lg font-semibold text-[var(--white)] mb-4 border-l-4 border-[var(--red)] pl-3">
            Contact Us
          </h3>
          <ul className="space-y-2 text-sm text-[var(--text-muted)]">
            <li className="flex items-start gap-2">
              <i className="ri-map-pin-line text-[var(--orange)] mt-[2px]"></i>
              <span>Tech Park, Clifton, Karachi, Pakistan</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="ri-phone-line text-[var(--orange)]"></i>
              <span>+92 311 4567890</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="ri-mail-line text-[var(--orange)]"></i>
              <span>support@wellnex.com</span>
            </li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold text-[var(--white)] mb-4 border-l-4 border-[var(--red)] pl-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-[var(--text-muted)]">
            {["Home", "About", "Our Apps", "Why Wellness", "Future Vision", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-[var(--orange)] transition-colors duration-200 cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold text-[var(--white)] mb-4 border-l-4 border-[var(--red)] pl-3">
            Stay Connected
          </h3>
          <div className="flex items-center gap-4 mb-4">
            {[
              "ri-facebook-fill",
              "ri-instagram-line",
              "ri-twitter-x-line",
              "ri-linkedin-fill",
            ].map((icon, index) => (
              <a
                key={index}
                href="#"
                className="w-9 h-9 rounded-full bg-[var(--bg-dark)] flex items-center justify-center 
                           text-[var(--text-muted)] hover:text-[var(--orange)] hover:bg-[var(--orange)]/10 
                           transition-all duration-300 text-lg"
              >
                <i className={icon}></i>
              </a>
            ))}
          </div>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            Join our community and stay updated with the latest in health tech
            and wellness innovation.
          </p>
        </div>
      </div>


      <div className="relative z-10 border-t border-[var(--border)] mt-12 pt-6 text-center text-sm text-[var(--text-muted)]">
        <p>
          © 2025{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--red)] to-[var(--orange)] font-medium">
            Wellnex Systems
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
