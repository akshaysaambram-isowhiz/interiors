import React from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HomeIcon, PaletteIcon, StarIcon } from "lucide-react";

const features = [
  {
    icon: <StarIcon className="w-10 h-10 text-orange-500" />,
    title: "Expert Team",
    description:
      "Our experienced interior designers and skilled workers are experts in various design styles and execution techniques.",
    color: "group-hover:text-orange-500",
  },
  {
    icon: <HomeIcon className="w-10 h-10 text-teal-500" />,
    title: "Comprehensive Services",
    description:
      "From dining rooms to kitchens, bedrooms to TV units, we handle all types of interior design and execution.",
    color: "group-hover:text-teal-500",
  },
  {
    icon: <PaletteIcon className="w-10 h-10 text-purple-500" />,
    title: "Personalized Approach",
    description:
      "We thoroughly evaluate each property and collaborate closely with clients to bring their design ideas to life.",
    color: "group-hover:text-purple-500",
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-6 md:py-24"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-900 mb-4">
            About My Vision Interiors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My Vision Interiors is a professionally managed company at the
            forefront of interior design in Hyderabad. We pride ourselves on our
            expertise, creativity, and comprehensive approach to transforming
            spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white shadow-lg rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`mr-4 p-3 rounded-full bg-gray-100 transition-colors duration-300 ${feature.color}`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
