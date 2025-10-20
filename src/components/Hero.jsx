import React from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color1)] via-[var(--color2)] to-[var(--color3)] flex flex-col md:flex-row items-center justify-between min-h-screen px-8 md:px-20 py-20">
      
     
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-[var(--yellow)]/30 rounded-full blur-3xl"
        animate={{ x: [0, 20, -20, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-[var(--cGreen)]/20 rounded-full blur-3xl"
        animate={{ x: [0, -20, 10, 0], y: [0, -10, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

     
      <div className="w-full md:w-1/2 space-y-6 relative z-10">
        <motion.h1
          className="font text-4xl md:text-6xl font-Nativera font-extrabold leading-tight text-gray-900"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Reimagine Your{" "}
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[var(--cGreen)] to-[var(--yellow)]">
            Wellness Journey
          </span>
        </motion.h1>

        <motion.p
          className="text-gray-600 text-lg md:text-xl max-w-md"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Empower your mind, body, and lifestyle with intelligent wellness technology
          that adapts to you — not the other way around.
        </motion.p>

        <motion.div
          className="flex gap-4 mt-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
        >
          <button className="px-6 py-3 bg-[#00B894] text-white font-semibold rounded-full shadow-lg hover:bg-gradient-to-r hover:from-[var(--cGreen)] hover:to-[var(--yellow)] transition-transform hover:scale-105">
            Join the Movement
          </button>
          <button className="flex items-center gap-2 px-6 py-3 border-2 border-[#00B894] text-[#00B894] font-semibold rounded-full hover:bg-gradient-to-r hover:from-[var(--cGreen)] hover:to-[var(--yellow)] hover:text-white transition-all">
            <PlayCircle size={22} /> Explore Our Apps
          </button>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center relative mt-16 md:mt-0">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >

          <motion.img
            src="./media/hero.jpg"
            alt="Human Wellness"
            className="w-[400px] md:w-[450px] "
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />


          <motion.div
            className="absolute -top-8 -left-8 bg-gradient-to-r from-[var(--cGreen)] to-[var(--yellow)] backdrop-blur-lg p-3 px-5 rounded-2xl shadow-lg text-gray-700 font-medium"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
           <i class="ri-brain-2-line"></i> Mind Balance
          </motion.div>

          <motion.div
            className="absolute top-20 -right-10 bg-gradient-to-r from-[var(--cGreen)] to-[var(--yellow)] backdrop-blur-lg p-3 px-5 rounded-2xl shadow-lg text-gray-700 font-medium"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <i class="ri-service-line"></i> Health Sync
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-0 bg-gradient-to-r from-[var(--cGreen)] to-[var(--yellow)] backdrop-blur-lg p-3 px-5 rounded-2xl shadow-lg text-gray-700 font-medium"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
          >
            <i class="ri-global-line"></i> Smart Fitness
          </motion.div>
        </motion.div>
      </div>

      
    </section>
  );
};

export default Hero;
