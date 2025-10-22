import React from "react";
import { motion } from "framer-motion";

const Wellnes = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full py-20 px-6 md:px-20 bg-[var(--white)] text-center">
      {/* Heading */}
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="font text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[var(--text)] via-[var(--orange)] to-[var(--red)] bg-clip-text text-transparent"
      >
        Why{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--red)] to-[var(--orange)]">
          Wellnex
        </span>{" "}
        ?
      </motion.h2>

      <p className="text-gray-600 max-w-2xl mx-auto mb-16">
        Because the future of wellness deserves smarter, deeper, and more
        connected solutions.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="p-8 rounded-2xl bg-[var(--white)] shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-[var(--red)] to-[var(--orange)] text-white rounded-full mb-5">
            <i className="ri-heart-pulse-fill text-2xl"></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Integrated Wellness
          </h3>
          <p className="text-gray-500 text-sm">
            Physical, mental, and emotional health united in one ecosystem.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="p-8 rounded-2xl bg-[var(--white)] shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-[var(--red)] to-[var(--orange)] text-white rounded-full mb-5">
            <i className="ri-cpu-line text-2xl"></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            AI-Driven Personalization
          </h3>
          <p className="text-gray-500 text-sm">
            Smart insights that adapt to your unique lifestyle and goals.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="p-8 rounded-2xl bg-[var(--white)] shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-[var(--red)] to-[var(--orange)] text-white rounded-full mb-5">
            <i className="ri-line-chart-line text-2xl"></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Scalable for Providers
          </h3>
          <p className="text-gray-500 text-sm">
            Seamlessly supports individuals, gyms, and healthcare networks alike.
          </p>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="p-8 rounded-2xl bg-[var(--white)] shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-[var(--red)] to-[var(--orange)] text-white rounded-full mb-5">
            <i className="ri-cloud-line text-2xl"></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Built for the Future
          </h3>
          <p className="text-gray-500 text-sm">
            Cloud-native, mobile-first, and privacy-conscious at every layer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Wellnes;
