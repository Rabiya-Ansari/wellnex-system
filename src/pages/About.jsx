import React, { useEffect, useState } from "react";
import { Zap, Users, Layers, Globe, Heart, TrendingUp } from "lucide-react";

const iconMap = {
  Zap,
  Users,
  Layers,
  Globe,
  Heart,
  TrendingUp,
};

function About() {
  const [aboutData, setAboutData] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    fetch("/data/about.json")
      .then((res) => res.json())
      .then((data) => setAboutData(data))
      .catch((err) => console.error("Failed to load About data:", err));
  }, []);

  if (!aboutData) {
    return (
      <div className="flex justify-center items-center min-h-screen text-slate-500">
        Loading About Section...
      </div>
    );
  }

  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/40 py-20 px-6 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-violet-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full border border-emerald-500/20 mb-4">
            <Heart className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700">
              {aboutData.header.badge}
            </span>
          </div>

          <h2 className="font text-4xl md:text-6xl font-black tracking-tight">
            <span className="bg-black bg-clip-text text-transparent">
              {aboutData.header.title.line1}
            </span>
            <br />
            <span className="bg-clip-text bg-gradient-to-r from-[#00B894] to-[#FFB800] t text-transparent">
              {aboutData.header.title.line2}
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {aboutData.header.subtitle}
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {aboutData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/5 group-hover:to-cyan-500/5 rounded-2xl transition-all duration-300"></div>
              <div className="relative text-center">
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Mission */}
          <div className="space-y-6">
            <div className="p-8 bg-white/70 backdrop-blur-md rounded-3xl shadow-lg border border-white/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {aboutData.mission.title}
                </h3>
              </div>

              {aboutData.mission.paragraphs.map((p, i) => (
                <p key={i} className="text-slate-700 leading-relaxed mb-4">
                  {p}
                </p>
              ))}

              <div className="mt-6 p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl border border-emerald-500/20">
                <p className="text-sm text-slate-700 italic">
                  "{aboutData.mission.quote}"
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {aboutData.features.map((feature, idx) => {
              const Icon = iconMap[feature.iconName];
              const isActive = activeCard === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveCard(idx)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={`group relative p-6 bg-white/70 backdrop-blur-md rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "shadow-2xl scale-105 border-emerald-300/50"
                      : "shadow-md hover:shadow-xl border-slate-200/50"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                  ></div>
                  <div className="relative space-y-3">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-slate-800">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {feature.desc}
                    </p>
                    <div
                      className={`h-1 bg-gradient-to-r ${feature.color} rounded-full transform origin-left transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    
      </div>
    </section>
  );
}

export default About;