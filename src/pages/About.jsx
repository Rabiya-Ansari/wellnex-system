import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const IMG_PADDING = 12;

const About = () => {
  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">

      <JourneySection />


      <TextParallaxSection
        imgUrl="https://cdn.pixabay.com/photo/2016/03/27/23/08/woman-1284656_1280.jpg"
        subheading="About Wellnex"
        heading="Where Wellness Meets What’s Next"
      >
        <AboutContent />
      </TextParallaxSection>


      <TextParallaxSection
        imgUrl="https://cdn.pixabay.com/photo/2023/08/30/17/04/athlete-8223797_1280.jpg"
        subheading="Our Mission"
        heading="Redefining Wellness Through Innovation"
      >
        <MissionContent />
      </TextParallaxSection>


      <TextParallaxSection
        imgUrl="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1600&q=80"
        subheading="Our Commitment"
        heading="Empowering Health, Together"
      >
        <CommitmentContent />
      </TextParallaxSection>
    </div>
  );
};




const JourneySection = () => {
  const journeyData = [
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
      desc: "Our ecosystem continues to grow with innovative wellness products connecting mind, body, and technology.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-[var(--red)] to-[var(--orange)] bg-clip-text text-transparent"
      >
        Our Journey
      </motion.h2>

      <div className="relative border-l border-[var(--border)] max-w-3xl mx-auto space-y-12">
        {journeyData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="pl-8 relative"
          >
            <span className="absolute left-[-10px] top-2 w-4 h-4 bg-gradient-to-r from-[var(--red)] to-[var(--orange)] rounded-full shadow-md" />
            <h3 className="text-2xl font-bold text-[var(--white)]">
              {item.year} — {item.title}
            </h3>
            <p className="text-[var(--text-muted)] text-lg mt-2 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};




const TextParallaxSection = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayText heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};


const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-[var(--bg-dark)]"
        style={{ opacity }}
      />
    </motion.div>
  );
};


const OverlayText = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{ y, opacity }}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-center"
    >
      <p className="text-xl md:text-2xl mb-2 text-[var(--orange)]">
        {subheading}
      </p>
      <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[var(--red)] to-[var(--orange)] bg-clip-text text-transparent">
        {heading}
      </h2>
    </motion.div>
  );
};


const AboutContent = () => (
  <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-10 px-6 pb-24 pt-12">
    <div className="md:col-span-4">
      <h3 className="text-3xl font-bold bg-gradient-to-r from-[var(--red)] to-[var(--orange)] bg-clip-text text-transparent mb-4">
        Empowering the Future of Wellness
      </h3>
    </div>
    <div className="md:col-span-8">
      <p className="text-[var(--text-muted)] text-lg mb-6 leading-relaxed">
        At Wellnex, we redefine how wellness integrates with technology. Our
        mission is to create a digital ecosystem that connects mind, body, and
        community — powered by innovation and empathy.
      </p>
      <p className="text-[var(--text-muted)] text-lg mb-8 leading-relaxed">
        We design tools that inspire healthier habits, promote emotional
        balance, and empower individuals and wellness professionals alike.
        Together, we’re shaping a smarter, more conscious way to live well.
      </p>
      <button className="bg-gradient-to-r from-[var(--red)] to-[var(--orange)] text-[var(--white)] font-semibold py-3 px-8 rounded-full flex items-center gap-2 hover:scale-105 transition-all">
        Learn More <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  </div>
);


const MissionContent = () => (
  <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-10 px-6 pb-24 pt-12">
    <div className="md:col-span-4">
      <h3 className="text-3xl font-bold bg-gradient-to-r from-[var(--red)] to-[var(--orange)] bg-clip-text text-transparent mb-4">
        Innovating Wellness, One Step at a Time
      </h3>
    </div>
    <div className="md:col-span-8">
      <p className="text-[var(--text-muted)] text-lg mb-6 leading-relaxed">
        Our mission is to make well-being accessible to everyone. Through
        intuitive digital platforms, we aim to bridge the gap between modern
        technology and mindful living — creating meaningful impact for both
        individuals and communities.
      </p>
      <p className="text-[var(--text-muted)] text-lg mb-8 leading-relaxed">
        From AI-driven health insights to personalized training tools, every
        Wellnex innovation is crafted to empower people to live better, move
        smarter, and feel stronger.
      </p>
    </div>
  </div>
);


const CommitmentContent = () => (
  <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-10 px-6 pb-24 pt-12">
    <div className="md:col-span-4">
      <h3 className="text-3xl font-bold bg-gradient-to-r from-[var(--red)] to-[var(--orange)] bg-clip-text text-transparent mb-4">
        A Promise to Your Well-being
      </h3>
    </div>
    <div className="md:col-span-8">
      <p className="text-[var(--text-muted)] text-lg mb-6 leading-relaxed">
        At Wellnex, our commitment extends beyond technology. We strive to build
        a community where support, knowledge, and inspiration thrive — where
        every individual feels empowered to achieve their wellness goals.
      </p>
      <p className="text-[var(--text-muted)] text-lg mb-8 leading-relaxed">
        Together, we’re not just transforming wellness — we’re creating a future
        where balance, health, and connection define the way we live.
      </p>
      <button className="bg-gradient-to-r from-[var(--red)] to-[var(--orange)] text-[var(--white)] font-semibold py-3 px-8 rounded-full flex items-center gap-2 hover:scale-105 transition-all">
        Join Us <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  </div>
);

export default About;
