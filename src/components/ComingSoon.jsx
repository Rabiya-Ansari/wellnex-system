import React from "react";
import { Activity, HeartPulse, BarChart3 } from "lucide-react";

function ComingSoon() {
    return (
        <section className="bg-white py-24 relative overflow-hidden">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-600 to-orange-500 opacity-10 blur-3xl rounded-full"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                            Next in Wellness
                        </span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        The next evolution of well-being is here — blending technology,
                        health, and data into one empowering ecosystem for every lifestyle.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
                    <div className="absolute left-1/2 top-10 bottom-10 w-1 bg-gradient-to-b from-red-600 to-orange-500 rounded-full md:hidden"></div>

                    <div className="flex flex-col items-center text-center md:text-left md:items-start relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 flex items-center justify-center mb-4 shadow-lg">
                            <Activity className="text-white w-7 h-7" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Smart Integration
                        </h3>
                        <p className="text-gray-500 max-w-sm">
                            Sync devices, apps, and sensors to keep your wellness ecosystem
                            connected and intelligent.
                        </p>
                    </div>

                    <div className="hidden md:block h-1 w-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-full"></div>

                    <div className="flex flex-col items-center text-center md:text-left md:items-start relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 flex items-center justify-center mb-4 shadow-lg">
                            <HeartPulse className="text-white w-7 h-7" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Personalized Health
                        </h3>
                        <p className="text-gray-500 max-w-sm">
                            Tailored nutrition, fitness, and mindfulness insights — unique to
                            your rhythm and habits.
                        </p>
                    </div>

                    <div className="hidden md:block h-1 w-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-full"></div>

                    <div className="flex flex-col items-center text-center md:text-left md:items-start relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 flex items-center justify-center mb-4 shadow-lg">
                            <BarChart3 className="text-white w-7 h-7" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Real Insights
                        </h3>
                        <p className="text-gray-500 max-w-sm">
                            Turn wellness data into actionable steps with advanced analytics
                            and smart recommendations.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-16">
                    <button className="bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold py-3 px-10 rounded-full shadow-md hover:opacity-90 transition">
                        Discover More
                    </button>
                </div>
            </div>
        </section>
    );
}
export default ComingSoon