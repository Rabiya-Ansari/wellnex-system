import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const VisionSection = () => {

  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);


  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      ref={ref}
      className="relative bg-[var(--bg)] text-[var(--text)] py-24 px-6 overflow-hidden"
    >

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-dark)]/40 to-[var(--bg)] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate={controls}
          className="bg-[var(--bg-dark)] border border-[var(--border)] rounded-3xl p-3 md:p-4 shadow-lg shadow-[var(--border)]/40 overflow-hidden relative hover:scale-[1.02] transition-transform duration-700"
        >
          <video
            src="/media/vision.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="rounded-2xl object-cover w-full h-[380px] md:h-[500px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 opacity-60 hover:opacity-0 transition-all duration-500"></div>
        </motion.div>


        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate={controls}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[var(--text)] via-[var(--orange)] to-[var(--red)] bg-clip-text text-transparent leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-[var(--red)] to-[var(--orange)] text-transparent bg-clip-text">
              Vision
            </span>
          </h2>

          <p className="text-[var(--text-muted)] text-lg leading-relaxed">
            To create a <strong>digital wellness ecosystem</strong> where
            technology empowers balance, community, and consciousness —
            blending innovation with empathy. We harness AI to design
            personalized wellness journeys that nurture mental health,
            emotional wellbeing, and sustainable habits for all.
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px var(--red)",
            }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-[var(--red)] to-[var(--orange)] text-[var(--white)] font-semibold px-8 py-3 rounded-full transition-all duration-300"
          >
            Learn More →
          </motion.button>
        </motion.div>
      </div>


      <div className="relative z-10 max-w-6xl mx-auto mt-24 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {[
          {
            icon: "🧠",
            title: "Intelligent Wellness",
            desc: "AI-driven insights that personalize mental and physical health experiences.",
            glow: "var(--orange)",
          },
          {
            icon: "❤️",
            title: "Empathy in Tech",
            desc: "Designing technology that heals, motivates, and connects — not overwhelms.",
            glow: "var(--red)",
          },
          {
            icon: "🌍",
            title: "Global Wellbeing",
            desc: "Bridging communities worldwide with a shared mission of wellness.",
            glow: "var(--orange)",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            transition={{ delay: i * 0.2 }}
            className="group relative bg-[var(--bg-dark)] border border-[var(--border)] rounded-3xl p-8 text-center shadow-md transition-all duration-500 hover:-translate-y-2"
            style={{
              boxShadow: `0 0 0px ${card.glow}33`,
            }}
          >
            <div
              className="text-5xl mb-4 transition-transform duration-500 group-hover:scale-110"
              style={{ color: card.glow }}
            >
              {card.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[var(--text)]">
              {card.title}
            </h3>
            <p className="text-[var(--text-muted)]">{card.desc}</p>

            {/* Hover Glow */}
            <div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"
              style={{
                background: `radial-gradient(circle at center, ${card.glow}, transparent 70%)`,
              }}
            ></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VisionSection;
