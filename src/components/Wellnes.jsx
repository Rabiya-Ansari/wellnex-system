import React from "react";
import { motion } from "framer-motion";

const Wellnes = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full py-16 px-6 md:px-20 bg-[var(--color1)]">
      <motion.h2
                variants={{
                  hidden: { opacity: 0, y: -30 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="font text-4xl md:text-5xl font-extrabold text-center mb-20 leading-tight text-gray-900"
              >
                Why{" "}
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00B894] to-[#FFB800]">
                  Wellnes
                </span>
              </motion.h2>

      <div className="space-y-8 max-w-5xl mx-auto">
        {/* Card 1 */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.03, y: -5 }}
          className="flex items-start gap-4 p-6 rounded-2xl shadow-md bg-gradient-to-r from-[var(--color2)] to-[var(--color3)] hover:bg-gradient-to-r hover:from-[var(--cGreen)] hover:to-[var(--yellow)] transition-all duration-500"
        >
          <i className="ri-heart-line text-3xl text-black"></i>
          <div>
            <h3 className="text-xl font-semibold text-black">
              Integrated Wellness
            </h3>
            <p className="text-sm text-black/80">
              Physical, mental, and emotional health in one ecosystem
            </p>
          </div>
        </motion.div>

        {/* Card 2 (Hover Gradient) */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.03, y: -5 }}
          className="flex items-start gap-4 p-6 rounded-2xl shadow-md bg-gradient-to-r from-[var(--color2)] to-[var(--color3)] hover:bg-gradient-to-r hover:from-[var(--cGreen)] hover:to-[var(--yellow)] transition-all duration-500"
        >
          <i className="ri-magic-line text-3xl text-black"></i>
          <div>
            <h3 className="text-xl font-semibold text-black">
              AI-Driven Personalization
            </h3>
            <p className="text-sm text-black/80">
              Smart recommendations tailored to your goals
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.03, y: -5 }}
          className="flex items-start gap-4 p-6 rounded-2xl shadow-md bg-gradient-to-r from-[var(--color2)] to-[var(--color3)] hover:bg-gradient-to-r hover:from-[var(--cGreen)] hover:to-[var(--yellow)] transition-all duration-500"
        >
          <i className="ri-line-chart-line text-3xl text-black"></i>
          <div>
            <h3 className="text-xl font-semibold text-black">
              Built for the Future
            </h3>
            <p className="text-sm text-black/80">
              Cloud-native, mobile-first, and privacy-conscious
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Wellnes;
