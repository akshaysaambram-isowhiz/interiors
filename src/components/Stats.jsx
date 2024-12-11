import React from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { stats } from "../store/constants";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  useGSAP(() => {
    const statsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#stats",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    statsTimeline.fromTo(
      "#stats h2",
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    statsTimeline.fromTo(
      "#stats p",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.5"
    );

    // Animate stats cards with stagger effect
    statsTimeline.fromTo(
      "#stats .grid > div",
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.2,
        ease: "back.out(1.7)",
      },
      "-=0.3"
    );
  });

  return (
    <section id="stats" className="mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Trusted Interior Design Experts in Hyderabad
        </h2>
        <p className="opacity-80 mb-10 max-w-2xl mx-auto">
          Transforming spaces with innovative design, precision, and creativity.
          Our team brings your interior vision to life with unparalleled
          expertise and passion.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(stat => (
            <div className="rounded-xl p-6 shadow-md hover:shadow-xl hover:shadow-orange-200 transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-4xl font-bold text-orange-500 mb-2">
                {stat.figure}
              </h3>
              <p className="opacity-80">{stat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
