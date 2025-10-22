import React from "react";
import { motion } from "framer-motion";

const VisionSection = () => {
  return (
    <section className="bg-[var(--bg)] text-[var(--text)] py-20 px-6">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Video */}
        <div className="bg-[var(--bg-dark)] border border-[var(--border)] rounded-2xl p-4 flex items-center justify-center shadow-lg overflow-hidden relative">
          <video
            src="./media/vision.mp4" // 🔁 Replace with your actual video path
            autoPlay
            muted
            loop
            playsInline
            className="rounded-xl object-cover w-full h-[400px] md:h-[500px]"
          />
          <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-all duration-300"></div>
        </div>

        {/* Right Side - Text */}
        <div>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font text-6xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[var(--text)] via-[var(--orange)] to-[var(--red)] bg-clip-text text-transparent"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--red)] to-[var(--orange)]">
              Vision
            </span>
          </motion.h2>

          <p className="text-[var(--text-muted)] leading-relaxed mb-8">
            To create a digital wellness ecosystem where technology empowers
            balance, community, and consciousness — blending innovation with
            human empathy. We believe in harnessing AI to deliver personalized
            wellness journeys, fostering global communities of support, and
            designing intuitive tools that prioritize mental health, emotional
            wellbeing, and sustainable habits.
          </p>

          <button className="bg-[var(--red)] hover:bg-[var(--red-dark)] text-[var(--white)] font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-[0_0_15px_var(--red-dark)]">
            Learn More →
          </button>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="max-w-6xl mx-auto mt-20 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-[var(--bg-dark)] border border-[var(--border)] rounded-2xl p-6 text-center shadow-md hover:shadow-[0_0_15px_var(--orange)] transition-all duration-300">
          <div className="text-[var(--orange)] text-4xl mb-4">🧠</div>
          <h3 className="text-xl font-semibold mb-2">Intelligent Wellness</h3>
          <p className="text-[var(--text-muted)]">
            AI-driven insights that personalize mental and physical health
            experiences.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[var(--bg-dark)] border border-[var(--border)] rounded-2xl p-6 text-center shadow-md hover:shadow-[0_0_15px_var(--red)] transition-all duration-300">
          <div className="text-[var(--red)] text-4xl mb-4">❤️</div>
          <h3 className="text-xl font-semibold mb-2">Empathy in Tech</h3>
          <p className="text-[var(--text-muted)]">
            Designing technology that heals, motivates, and connects — not
            overwhelms.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[var(--bg-dark)] border border-[var(--border)] rounded-2xl p-6 text-center shadow-md hover:shadow-[0_0_15px_var(--orange)] transition-all duration-300">
          <div className="text-[var(--orange)] text-4xl mb-4">🌍</div>
          <h3 className="text-xl font-semibold mb-2">Global Wellbeing</h3>
          <p className="text-[var(--text-muted)]">
            Bridging communities across the world with a shared mission of
            wellness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;