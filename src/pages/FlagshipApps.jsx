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
    Brain: <Brain className="w-10 h-10 text-[var(--red)] drop-shadow-md" />,
    Dumbbell: <Dumbbell className="w-10 h-10 text-[var(--orange)] drop-shadow-md" />,
  };

  const fadeVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-[var(--bg)] text-[var(--text)] py-28 overflow-hidden">

      <div className="absolute top-0 left-0 w-72 h-72 bg-[var(--red)]/20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[var(--orange)]/20 blur-3xl rounded-full -z-10"></div>


      <div className="max-w-6xl mx-auto text-center mb-24">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--red)] to-[var(--orange)]"
        >
          Our Flagship Apps
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[var(--text-muted)] max-w-2xl mx-auto mt-6"
        >
          Discover our cutting-edge wellness and fitness apps that merge innovation, design, and wellbeing — redefining the way we live, move, and thrive.
        </motion.p>
      </div>


      <div className="flex flex-col gap-32 max-w-7xl mx-auto px-6">
        {apps.map((app, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              variants={fadeVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
            >

              <motion.div
                whileHover={{
                  rotateX: 10,
                  rotateY: -10,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 200 },
                }}
                className="relative w-full md:w-1/2 bg-[rgba(255,255,255,0.05)] backdrop-blur-xl border border-[var(--border)] rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.3)] overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--red)]/20 via-transparent to-[var(--orange)]/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative z-10 p-10 text-center">
                  <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-[var(--red)]/10 to-[var(--orange)]/10 border border-[var(--orange)]/40 mb-6">
                    {iconMap[app.icon] || <Brain className="w-10 h-10 text-[var(--red)]" />}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{app.name}</h3>
                  <p className="text-[var(--orange)] font-semibold mb-4">{app.tagline}</p>
                  <p className="text-[var(--text-muted)]">{app.description}</p>
                </div>
              </motion.div>


              <motion.div
                className="w-full md:w-1/2 text-center md:text-left space-y-5"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h4 className="text-3xl font-bold text-white">{app.name}</h4>
                <p className="text-[var(--text-muted)] text-lg">{app.description}</p>

                <ul className="space-y-3">
                  {app.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-[var(--text)]">
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
                  className="mt-6 px-6 py-3 border-2 border-[var(--orange)] text-[var(--text)] rounded-full font-semibold flex items-center gap-2 mx-auto md:mx-0"
                >
                  {app.buttonText}
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default FlagshipApps;
