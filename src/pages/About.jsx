import React from "react";
import { Heart, Brain, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>

      <div
        id="about"
        className="relative min-h-screen bg-[var(--bg)] text-[var(--text)] py-24 px-6 md:px-12 overflow-hidden"
      >

        <div className="absolute top-40 left-10 w-72 h-72 bg-[var(--red)] opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-[var(--orange)] opacity-20 blur-3xl rounded-full"></div>


        <motion.div
          className="max-w-3xl text-center mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font text-4xl md:text-6xl font-extrabold mb-6">
            About{" "}
            <span className=" bg-gradient-to-r from-[var(--red)] via-[var(--orange)] to-[var(--red-dark)] bg-clip-text text-transparent">
              Wellnex Systems
            </span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg leading-relaxed">
            Redefining wellness through empathy, AI, and innovation creating
            harmony between technology and humanity.
          </p>
        </motion.div>


        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <Heart className="text-[var(--text)] w-6 h-6" />,
              color: "from-[var(--red)] to-[var(--red-dark)]",
              title: "Our Mission",
              text: "To empower every individual to achieve holistic well-being through AI-driven experiences that connect mind, body, and lifestyle.",
            },
            {
              icon: <Brain className="text-[var(--text)] w-6 h-6" />,
              color: "from-[var(--orange)] to-[var(--red)]",
              title: "Our Vision",
              text: "To build a connected ecosystem of wellness solutions that help people live consciously, move smartly, and grow emotionally.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className={`relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-transform hover:-translate-y-2`}
            >
              <div
                className={`absolute -top-5 left-5 w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center`}
              >
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-[var(--text)] mt-10 mb-4">
                {card.title}
              </h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>


      <div className="relative bg-[var(--bg)] text-[var(--text)] py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font text-4xl md:text-5xl font-extrabold text-[var(--white)] mb-4"
          >
            Our Journey
          </motion.h2>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
            From a small dream to a growing movement — Wellnex Systems continues
            to bridge wellness and AI innovation.
          </p>
        </div>


        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[var(--border)] transform -translate-x-1/2"></div>

          {[
            {
              year: "2023",
              title: "The Spark",
              desc: "Wellnex was born — merging emotional intelligence with artificial intelligence for meaningful change.",
            },
            {
              year: "2024",
              title: "Building Connections",
              desc: "We launched SoulWhispers & GymKey — empowering mindful communication and smarter fitness journeys.",
            },
            {
              year: "2025",
              title: "The Expansion",
              desc: "Our ecosystem continues to grow with innovative wellness products connecting mind, body, and tech.",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              className={`relative mb-16 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                } flex-col`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-full md:w-1/2 px-6">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-md">
                  <h4 className="text-xl font-bold text-[var(--orange)] mb-2">
                    {step.year}
                  </h4>
                  <h3 className="text-2xl font-semibold text-[var(--text)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[var(--text-muted)]">{step.desc}</p>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center w-1/2">
                <div className="w-5 h-5 bg-gradient-to-br from-[var(--red)] to-[var(--orange)] rounded-full shadow-[0_0_20px_rgba(255,100,50,0.5)]"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
  
      <div className="relative bg-[var(--bg)] text-[var(--text)] py-28 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-[var(--orange)] opacity-10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-32 w-96 h-96 bg-[var(--red)] opacity-10 blur-3xl rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font text-4xl md:text-6xl font-extrabold mb-4">
            Our <span className="text-[var(--orange)]">Core Values</span>
          </h2>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
            The principles that guide how we innovate, connect, and grow — building a future where technology feels human.
          </p>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <Heart className="w-10 h-10 text-[var(--red)]" />,
              title: "Empathy",
              desc: "Understanding human emotions and designing experiences that genuinely care.",
              gradient: "from-[var(--red)] to-[var(--orange)]",
            },
            {
              icon: <Brain className="w-10 h-10 text-[var(--orange)]" />,
              title: "Innovation",
              desc: "Blending AI and wellness to unlock new ways of personal growth and transformation.",
              gradient: "from-[var(--orange)] to-[var(--yellow)]",
            },
            {
              icon: <Sparkles className="w-10 h-10 text-[var(--red)]" />,
              title: "Integrity",
              desc: "Building trust through transparency, respect, and a deep sense of responsibility.",
              gradient: "from-[var(--red)] to-[var(--yellow)]",
            },
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="group relative overflow-hidden rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 p-10 text-center shadow-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-500 hover:-translate-y-3"
            >
              
              <div
                className={`absolute inset-0 rounded-[2rem] p-[2px] bg-gradient-to-r ${value.gradient} opacity-40 group-hover:opacity-80 transition-opacity duration-500`}
              >
                <div className="w-full h-full bg-[var(--bg)] rounded-[1.9rem]"></div>
              </div>

              <div className="relative flex justify-center mb-6">
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${value.gradient} text-white shadow-[0_0_25px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300`}
                >
                  {value.icon}
                </div>
              </div>

            
              <h3 className="text-2xl font-bold text-[var(--text)] mb-3 relative z-10">
                {value.title}
              </h3>
              <p className="text-[var(--text-muted)] leading-relaxed relative z-10">
                {value.desc}
              </p>

             
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent animate-pulse opacity-10"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative bg-[var(--bg)] text-center text-[var(--text)] py-28 px-6 md:px-12 overflow-hidden">
       
        <div className="absolute top-0 left-0 w-72 h-72 bg-[var(--orange)] opacity-10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--red)] opacity-10 blur-3xl rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h2 className="font text-4xl md:text-6xl font-extrabold mb-6">
            Join the{" "}
            <span className="bg-gradient-to-r from-[var(--red)] via-[var(--orange)] to-[var(--red)] bg-clip-text text-transparent">
              Wellness Revolution
            </span>
          </h2>

          <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-10">
            Be part of a global movement towards mindful, intelligent living.
            <br />
            Together, let’s shape the future of well-being.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[var(--red)] to-[var(--orange)] hover:opacity-90 text-[var(--text)] font-semibold px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            Get Involved
          </motion.button>
        </motion.div>
      </div>

    </>
  );
};

export default About;
