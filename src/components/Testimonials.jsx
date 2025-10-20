import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loading, setLoading] = useState(true);

  const visibleCount = 3;

  useEffect(() => {
    fetch("/data/testimonials.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load testimonials");
        return res.json();
      })
      .then((data) => {
        setTestimonials(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading testimonials:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, testimonials.length]);

  const handleNext = () => {
    if (!isAnimating && testimonials.length > 0) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const handlePrev = () => {
    if (!isAnimating && testimonials.length > 0) {
      setIsAnimating(true);
      setCurrentIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const getVisibleTestimonials = () => {
    if (testimonials.length === 0) return [];
    const visible = [];
    for (let i = 0; i < Math.min(visibleCount, testimonials.length); i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const goToSlide = (index) => {
    if (!isAnimating && testimonials.length > 0) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[var(--color1)] via-[var(--color2)] to-[var(--color3)] flex items-center justify-center">
        <div className="text-white text-2xl">Loading testimonials...</div>
      </div>
    );
  }

  if (testimonials.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[var(--color1)] via-[var(--color2)] to-[var(--color3)] flex items-center justify-center">
        <div className="text-white text-2xl">No testimonials available</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color1)] via-[var(--color2)] to-[var(--cGreen)] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-black">
            Loved by{" "}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00B894] to-[#FFB800]">
              Thousands
            </span>
          </h2>
          <p className="text-lg text-white/80">
            See what our customers have to say
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
       
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[var(--color1)] hover:bg-[var(--color2)] text-[var(--yellow)] p-4 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 -ml-4 md:-ml-8 shadow-xl"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={26} strokeWidth={2.5} />
          </button>

          
          <div className="overflow-hidden px-2">
            <div className="flex gap-6">
              {getVisibleTestimonials().map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full md:w-[calc(33.333%-16px)]"
                  style={{
                    animation: isAnimating ? "fadeIn 0.6s ease-out" : "none",
                  }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-2xl h-full flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]">
                    
                    <div className="mb-6 flex justify-center">
                      <div className="text-4xl opacity-70">
                        {testimonial.logo}
                      </div>
                    </div>

                    
                    <p className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">
                      "{testimonial.text}"
                    </p>

                    
                    <div className="flex flex-col items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-[var(--color2)]"
                      />
                      <h4 className="font-bold text-gray-800 text-sm tracking-wide uppercase">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[var(--color1)] hover:bg-[var(--color2)] text-[var(--yellow)] p-4 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 -mr-4 md:-mr-8 shadow-xl"
            aria-label="Next testimonials"
          >
            <ChevronRight size={26} strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[var(--yellow)] w-8"
                  : "bg-[var(--cGreen)] hover:bg-[var(--yellow)]"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
