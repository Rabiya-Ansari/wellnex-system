import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Brain, Dumbbell, CheckCircle, ChevronRight } from "lucide-react";

function FlagshipApps() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/data/apps.json")
      .then((res) => res.json())
      .then((data) => setApps(data))
      .catch((err) => console.error("Failed to load apps data:", err));
  }, []);

  const iconMap = {
    Brain: <Brain className="w-8 h-8 text-[var(--red)] drop-shadow-md" />,
    Dumbbell: <Dumbbell className="w-8 h-8 text-[var(--orange)] drop-shadow-md" />,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
    hover: { y: -8, scale: 1.02 },
  };

  return (
    <div className="py-28 px-6 bg-[var(--text)]  relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--red)]/20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[var(--orange)]/20 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto text-center">
      
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=" font text-4xl md:text-6xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[var(--red)] to-[var(--orange)]"
        >
          Our Flagship Apps
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 max-w-2xl mx-auto mb-20"
        >
          Explore our cutting-edge wellness and fitness apps that bring innovation and technology together for a smarter, healthier future.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {apps.map((app, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              transition={{ type: "spring", stiffness: 200 }}
              className="relative rounded-3xl p-8 bg-white/70 backdrop-blur-xl border border-white/30 shadow-[0_8px_40px_rgba(0,0,0,0.05)] transition-all duration-500 overflow-hidden group"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--red)]/20 via-transparent to-[var(--orange)]/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[var(--red)]/10 to-[var(--orange)]/10 flex items-center justify-center border border-[var(--orange)]/40 shadow-inner shadow-[var(--orange)]/10">
                  {iconMap[app.icon] || <Brain className="w-8 h-8 text-[var(--red)]" />}
                </div>
              </div>

              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{app.name}</h3>
                <p className="text-[var(--orange)] font-medium mb-4">{app.tagline}</p>
                <p className="text-gray-600 mb-6">{app.description}</p>

                <ul className="text-left space-y-2 mb-8">
                  {app.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-[var(--orange)]" />
                      {feature}
                    </li>
                  ))}
                </ul>

               
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    background: "linear-gradient(to right, var(--red), var(--orange))",
                    color: "#fff",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border-2 border-[var(--orange)] text-[var(--bg)] rounded-full font-semibold transition duration-300 flex items-center justify-center gap-2 mx-auto"
                >
                  {app.buttonText}
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default FlagshipApps;
