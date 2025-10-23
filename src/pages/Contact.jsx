import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Typewriter from "typewriter-effect";

const Contact = () => {
    return (
        <>
            <section
                className="relative text-center py-32 px-6 md:px-16 overflow-hidden"
                style={{
                    backgroundColor: "#0d0d0d",
                }}
            >

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/media/contact-bg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>


                <div className="absolute inset-0 bg-black/80"></div>

                {/* ===== Content ===== */}
                <div className="relative z-10 text-[#e6d5b8]">
                    {/* ===== Static heading ===== */}
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-6xl font-serif font-medium mb-4"
                    >
                        Get in Touch with{" "}
                        <span className="bg-gradient-to-r from-[var(--text)] to-[var(--orange)] bg-clip-text text-transparent">
                            Wellnex Systems
                        </span>
                    </motion.h2>

                    {/* ===== Typewriter line ===== */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.6 }}
                        className="text-2xl md:text-3xl font-light text-[var(--red)] mb-6"
                    >
                        <Typewriter
                            options={{
                                strings: [
                                    "Contact Us",
                                    "Get in Touch with Wellnex Systems",
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 75,
                                deleteSpeed: 40,
                                pauseFor: 2500,
                            }}
                        />
                    </motion.div>

                    {/* ===== Sub text ===== */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="max-w-2xl mx-auto text-[#d2c4a3] text-lg md:text-xl leading-relaxed"
                    >
                        Let’s build something extraordinary. Whether you’re a business
                        visionary, a creator, or an innovator — we’d love to connect and
                        collaborate.
                    </motion.p>
                </div>
            </section>
            <section
                id="contact"
                className="min-h-screen bg-[#0d0d0d] text-[#e6d5b8] flex flex-col justify-center items-center px-6 md:px-16 lg:px-32 py-20"
            >


                {/* ===== Steps Section ===== */}
                <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-4"
                    >
                        <h3 className="text-2xl font-serif mb-6 text-[var(--orange)]">
                            What happens next?
                        </h3>

                        {[
                            "Our expert will review your request and contact you.",
                            "If needed, we’ll sign an NDA to ensure your privacy.",
                            "Our Pre-Sales Manager will send you a proposal.",
                            "Then we start working on your project together.",
                        ].map((text, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="text-[var(--orange)] w-6 h-6 flex-shrink-0 mt-1" />
                                <p className="text-[var(--text)] leading-relaxed">{text}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* ===== Form Section ===== */}
                    <motion.form
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="bg-transparent border-b border-[#3a3a3a] text-[var(--text)] placeholder-[var(--orange)] focus:border-[var(--orange)] focus:outline-none py-3"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-transparent border-b border-[#3a3a3a] text-[var(--text)] placeholder-[var(--orange)] focus:border-[var(--orange)] focus:outline-none py-3"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Phone number"
                                className="bg-transparent border-b border-[#3a3a3a] text-[var(--text)] placeholder-[var(--orange)] focus:border-[var(--orange)] focus:outline-none py-3"
                            />
                            <input
                                type="text"
                                placeholder="Company"
                                className="bg-transparent border-b border-[#3a3a3a] text-[var(--text)] placeholder-[var(--orange)] focus:border-[var(--orange)] focus:outline-none py-3"
                            />
                        </div>

                        <div className="flex items-center gap-3">
                            <input type="checkbox" id="nda" className="accent-[var(--orange)]" />
                            <label htmlFor="nda" className="text-sm text-[var(--orange)]">
                                Secure data with NDA first
                            </label>
                        </div>

                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            className="w-full bg-transparent border-b border-[#3a3a3a] text-[var(--text)] placeholder-[var(--orange)] focus:border-[var(--orange)] focus:outline-none py-3 resize-none"
                        ></textarea>

                        <motion.button
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="w-full py-3 rounded-md font-semibold tracking-wide border border-[var(--orange)] 
             text-[var(--text)] transition-all duration-300
             hover:text-[var(--white)] hover:bg-gradient-to-r hover:from-[var(--red)] hover:to-[var(--orange)]"
                        >
                            Send Message
                        </motion.button>

                    </motion.form>
                </div>
            </section>
        </>
    );
};

export default Contact;
