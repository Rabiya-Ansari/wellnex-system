import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const iconVariants = {
  hidden: { scale: 0.6, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 10 },
  },
};

function AboutWellnex() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-16 lg:px-32 bg-gradient-to-br from-[var(--color1)] via-[var(--color2)] to-[var(--color3)] text-black"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 items-center"
      >
        {/* Left content */}
        <div className="space-y-6">
          <motion.h1
            variants={itemVariants}
            className=" font text-4xl md:text-4xl  font-extrabold leading-tight text-gray-900"
          >
            About{" "}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00B894] to-[#FFB800]">
              Wellnex
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="font text-2xl sm:text-4xl font-extrabold leading-tight"
          >
            Where Wellness Meets What’s Next
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg max-w-prose leading-relaxed opacity-90"
          >
            Wellness is no longer just gyms and diets — it’s connection,
            personalization, and ease.{" "}
            <span className="font-semibold">Wellnex Systems</span> combines
            smart technology with real human needs so people can stay active,
            motivated, and connected wherever they are.
          </motion.p>

          {/* Features list */}
          <motion.ul
            variants={containerVariants}
            className="grid gap-4 sm:grid-cols-2"
          >
            {[
              {
                title: "Smart Tracking",
                desc: "AI-powered insights that grow with your journey.",
                bg: "bg-emerald-500/20",
              },
              {
                title: "Community at Heart",
                desc: "Find trainers, peers and support in one place.",
                bg: "bg-cyan-500/20",
              },
              {
                title: "All-in-One Platform",
                desc: "Workouts, meals & recovery — all synchronized.",
                bg: "bg-violet-500/20",
              },
              {
                title: "Access From Anywhere",
                desc: "Seamless experience across all devices.",
                bg: "bg-orange-400/20",
              },
            ].map((feat, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="flex gap-3 items-start p-3 rounded-xl bg-white/20 backdrop-blur-md shadow-sm hover:shadow-md transition"
              >
                <motion.div
                  variants={iconVariants}
                  className={`flex-shrink-0 w-10 h-10 rounded-lg ${feat.bg} grid place-items-center`}
                >
                  <img
                    src="https://globalcybersecuritynetwork.com/wp-content/uploads/2024/04/Key-Steps-to-Implement-AI-in-Your-Business-blog-image.jpg"
                    alt="icon"
                    className="w-5 h-5"
                  />
                </motion.div>
                <div>
                  <strong className="block">{feat.title}</strong>
                  <span className="text-sm opacity-80">{feat.desc}</span>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutWellnex;
