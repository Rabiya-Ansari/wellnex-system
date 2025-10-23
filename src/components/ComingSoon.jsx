import React from "react";
import { Activity, HeartPulse, BarChart3 } from "lucide-react";

function ComingSoon() {
  const features = [
    {
      icon: <Activity className="w-8 h-8 text-white" />,
      title: "Smart Integration",
      desc: "Sync devices, apps, and sensors to keep your wellness ecosystem connected and intelligent.",
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-white" />,
      title: "Personalized Health",
      desc: "Tailored nutrition, fitness, and mindfulness insights — unique to your rhythm and habits.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Real Insights",
      desc: "Turn wellness data into actionable steps with advanced analytics and smart recommendations.",
    },
  ];

  return (
    <section className="bg-white py-24 relative overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-600 to-orange-500 opacity-10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="font text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
              Next in Wellness
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The next evolution of well-being is here — blending technology,
            health, and data into one empowering ecosystem for every lifestyle.
          </p>
        </div>


        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group [perspective:1200px]"
            >
              <div
                className="relative w-full h-80 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] 
                hover:scale-[1.03] hover:shadow-2xl rounded-3xl"
              >

                <div
                  className="absolute inset-0 bg-white rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center justify-center
                  backface-hidden transform transition-transform duration-700 group-hover:-rotate-x-2"
                >
                  <div className="w-20 h-20 mb-4 rounded-3xl bg-gradient-to-r from-red-600 to-orange-500 flex items-center justify-center shadow-md shadow-orange-200">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 px-6 text-center text-sm mt-1 md:hidden">
                    {feature.desc}
                  </p>
                </div>

                <div
                  className="absolute inset-0 bg-gradient-to-br from-red-600 to-orange-500 text-white rounded-3xl shadow-xl flex flex-col items-center justify-center px-6 text-center [transform:rotateY(180deg)] backface-hidden"
                >
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-90">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold py-3 px-10 rounded-full shadow-md hover:opacity-90 hover:scale-105 transition">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
}

export default ComingSoon;
