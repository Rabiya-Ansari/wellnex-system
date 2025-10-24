import React from "react";
import { motion } from "framer-motion";

const ParticleRing = () => {
  const particleCount = 80; 
  const particles = Array.from({ length: particleCount });

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((_, i) => {
        const randomX = Math.random() * 100; 
        const randomY = Math.random() * 100; 
        const delay = Math.random() * 2;
        const size = Math.random() * 4 + 2; 

        return (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
              width: size,
              height: size,
              background: `radial-gradient(circle, var(--red) 0%, var(--orange) 100%)`,
              filter: "blur(1px)",
              boxShadow: "0 0 12px var(--orange)",
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 30 - 15],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
          />
        );
      })}
    </div>
  );
};

export default ParticleRing;
