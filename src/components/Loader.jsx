import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center gap-3"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-600 to-orange-500 rounded-full shadow-lg"
        >
          <i className="ri-fire-fill text-white text-3xl"></i>
        </motion.div>

        <motion.span
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-white tracking-wide"
        >
          WELLNEX
        </motion.span>
      </motion.div>


      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-6 text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#dc2626] to-[#ea580c]"
      >
        Wellnex Systems
      </motion.h1>
    </motion.div>
  );
};

export default Loader;
