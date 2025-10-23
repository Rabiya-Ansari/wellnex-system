import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg)] text-[var(--text)] px-6 py-20"
      style={{
        background: "linear-gradient(to bottom right, #000000, #0a0a0a)",
      }}
    >

      <div className="max-w-3xl text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--red)] to-[var(--orange)] mb-6"
        >
          Get in Touch with <br /> Wellnex Systems
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[var(--text-muted)] text-lg md:text-xl leading-relaxed"
        >
          Let’s build something extraordinary. Whether you’re a business
          visionary, a creator, or an innovator — we’d love to connect and
          collaborate.
        </motion.p>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="font text-4xl md:text-6xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[var(--red)] to-[var(--orange)] text-center"
      >
        Send Us a <br /> Message
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-md bg-[var(--bg-dark)] backdrop-blur-xl border border-[var(--border)] rounded-2xl shadow-2xl p-8"
      >
    
        <div className="mb-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-transparent text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--orange)]"
          />
        </div>

 
        <div className="mb-5">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-transparent text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--orange)]"
          />
        </div>

    
        <div className="mb-6">
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-transparent text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--orange)]"
          ></textarea>
        </div>

 
        <motion.button
          whileHover={{
            scale: 1.05,
            background: "linear-gradient(to right, var(--red), var(--orange))",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="w-full flex items-center justify-center gap-2 
                     bg-gradient-to-r from-[var(--red)] to-[var(--orange)]
                     text-[var(--white)] py-3 rounded-lg border border-[var(--border)] 
                     shadow-md hover:shadow-lg transition-all duration-300"
        >
          <Send className="w-5 h-5" />
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Contact;
