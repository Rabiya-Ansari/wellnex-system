import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHeart, FiCpu, FiBarChart2, FiCloud } from "react-icons/fi";

const items = [
  {
    id: 1,
    title: "Integrated Wellness",
    icon: <FiHeart />,
    image:
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1d?q=80&w=1470&auto=format&fit=crop",
    description:
      "Physical, mental, and emotional health united in one ecosystem — designed for balance and harmony in modern life.",
  },
  {
    id: 2,
    title: "AI-Driven Personalization",
    icon: <FiCpu />,
    image:
      "https://images.unsplash.com/photo-1631515242809-d4b6c4b6b3b5?q=80&w=1470&auto=format&fit=crop",
    description:
      "Experience truly smart insights that evolve with your lifestyle — powered by AI that understands you.",
  },
  {
    id: 3,
    title: "Scalable for Providers",
    icon: <FiBarChart2 />,
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1470&auto=format&fit=crop",
    description:
      "Built to empower individuals, gyms, and health networks — scaling seamlessly as your community grows.",
  },
  {
    id: 4,
    title: "Built for the Future",
    icon: <FiCloud />,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1470&auto=format&fit=crop",
    description:
      "Cloud-native, privacy-conscious, and mobile-first — ready to evolve with the next generation of wellness.",
  },
];

const Wellnes = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="bg-[var(--bg)] text-[var(--white)] py-28 px-6 overflow-hidden relative">

      <div className="absolute top-0 left-0 w-72 h-72 bg-[var(--red)]/20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[var(--orange)]/20 blur-3xl rounded-full -z-10"></div>


      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[var(--red)] to-[var(--orange)] bg-clip-text text-transparent"
        >
          Why Wellnex?
        </motion.h2>
        <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
          Because the future of wellness deserves smarter, deeper, and more connected solutions.
        </p>
      </div>


      <div className="flex flex-col lg:flex-row h-fit lg:h-[480px] max-w-6xl mx-auto shadow-lg overflow-hidden rounded-3xl">
        {items.map((item) => {
          const isOpen = open === item.id;
          return (
            <div key={item.id} className="relative flex-1">

              <button
                onClick={() => setOpen(item.id)}
                className={`w-full h-[100px] lg:h-full flex lg:flex-col items-center justify-center gap-4 border border-[var(--border)] transition-all bg-[var(--bg-dark)] hover:bg-[var(--red)]/20 ${
                  isOpen ? "bg-[var(--red)]/30" : ""
                }`}
              >
                <div className="text-2xl text-[var(--orange)]">{item.icon}</div>
                <span className="font-semibold">{item.title}</span>
              </button>


              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    key={`panel-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "100%", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 z-10 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col justify-end p-6">
                      <p className="text-sm text-gray-200 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Wellnes;
