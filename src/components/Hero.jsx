import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

const words = [
  "Empower Your Wellness",
  "Train Smarter Every Day",
  "Merge Mind & Fitness",
  "Reimagine Your Strength",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (index === words.length) return;

    const currentWord = words[index];
    let timeout;

    if (!deleting && subIndex <= currentWord.length) {

      timeout = setTimeout(() => {
        setText(currentWord.substring(0, subIndex));
        setSubIndex(subIndex + 1);
      }, 120);
    } else if (deleting && subIndex >= 0) {

      timeout = setTimeout(() => {
        setText(currentWord.substring(0, subIndex));
        setSubIndex(subIndex - 1);
      }, 60);
    } else if (subIndex === currentWord.length + 1) {

      timeout = setTimeout(() => setDeleting(true), 1000);
    } else if (subIndex < 0) {

      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      setSubIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[var(--bg-dark)] text-white overflow-hidden px-6 pt-24 md:pt-0">

      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover opacity-70"
          src="./media/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
      </div>

   
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-[var(--bg-dark)] rounded-full blur-3xl"
        animate={{ x: [0, 40, -20, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--bg-dark)] rounded-full blur-3xl"
        animate={{ x: [0, -30, 15, 0], y: [0, -20, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

    
      <div className="relative z-20 max-w-7xl w-full grid md:grid-cols-2 items-center gap-10">

        <div className="text-left">
          <h1 className="font text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[var(--text)] via-[var(--orange)] to-[var(--red)] bg-clip-text text-transparent">
            Wellnex Systems
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--red)] mb-6 min-h-[2.5rem]">
            {text}
            <span className="border-r-2 border-[var(--red)] animate-pulse ml-1"></span>
          </h2>

          <p className="text-gray-300 text-lg max-w-xl mb-8">
            A unified digital ecosystem empowering individuals, gyms, and
            wellness providers through cutting-edge HealthTech and fitness
            innovation. Our mission: to merge wellness with what’s next.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-[var(--red)] to-[var(--orange)] hover:opacity-90 text-[var(--text)] font-semibold px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105">
              Join the Movement
            </button>
            <button className="flex items-center gap-2 border border-[var(--border)] text-[var(--red)] px-6 py-3 rounded-full hover:bg-gradient-to-r from-red-600 to-orange-500 hover:text-white transition-all">
              <PlayCircle size={22} /> Explore Our Apps
            </button>
          </div>

          <div className="mt-6">
            <span className="bg-[var(--red-dark)] text-[var(--text)] px-4 py-2 rounded-full text-sm font-semibold">
              Trusted by 10K+ Active Users
            </span>
          </div>
        </div>

        <div className="relative flex items-center justify-center min-h-[300px] md:min-h-[400px]">
          <motion.i
            className="ri-heart-pulse-fill text-[var(--red)] text-6xl md:text-7xl z-30"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          ></motion.i>
        </div>
      </div>
    </div>
  );
};

export default Hero;