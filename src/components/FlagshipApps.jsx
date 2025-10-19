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
    Brain: (
      <Brain className="w-8 h-8 text-[#00B894] drop-shadow-md" />
    ),
    Dumbbell: (
      <Dumbbell className="w-8 h-8 text-[#00B894] drop-shadow-md" />
    ),
  };

  return (
    <section
      id="apps"
      className="py-32 px-6"
      style={{
        background:
          "linear-gradient(135deg, var(--color1), var(--color2), var(--color3))",
      }}
    >
      <div className="max-w-7xl mx-auto">
       
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
          Our Flagship{" "}
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00B894] to-[#FFB800]">
            Apps
          </span>
        </motion.h2>

        
        <div className="grid md:grid-cols-2 gap-12">
          {apps.map((app, index) => (
            <motion.div
              key={index}
              className="relative rounded-3xl p-8 border border-[#00B894]/30 shadow-xl bg-white/60 backdrop-blur-sm hover:shadow-2xl transition-all group overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#00B894]/5 to-[#FFB800]/10 opacity-0 group-hover:opacity-100 transition-all duration-500"
              ></motion.div>

              <div className="relative z-10">
                
                <div className="w-16 h-16 bg-gradient-to-br from-[#E9F9EF] to-[#E3F2FD] rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-[#00B894]/30">
                  {iconMap[app.icon] || <Brain className="w-8 h-8 text-[#00B894]" />}
                </div>

                
                <h3 className="text-3xl font-bold mb-3 text-gray-900">
                  {app.name}
                </h3>
                <p className="text-[#00B894] text-lg mb-6 font-medium">
                  {app.tagline}
                </p>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  {app.description}
                </p>

                <div className="space-y-3 mb-8">
                  {app.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-[#00B894] flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-[#00B894] text-[#00B894] font-semibold rounded-full hover:bg-[#00B894] hover:text-white transition-all duration-300"
                >
                  {app.buttonText}
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FlagshipApps;
