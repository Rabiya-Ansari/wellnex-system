import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-[#000000] flex flex-col items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >

      <motion.div
        className="w-24 h-24 rounded-full border-4 border-t-transparent border-gradient-to-r from-[#dc2626] to-[#ea580c]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        style={{
          borderImage: "linear-gradient(to right, #dc2626, #ea580c) 1",
          borderStyle: "solid",
          borderWidth: "4px",
          borderTopColor: "transparent",
        }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-8 text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#dc2626] to-[#ea580c]"
      >
        Wellnex Systems
      </motion.h1>
    </motion.div>
  );
};

export default Loader;
