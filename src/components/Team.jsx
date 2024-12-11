import React from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { team } from "../store/constants";

gsap.registerPlugin(ScrollTrigger);

export default function Team() {
  useGSAP(() => {
    const teamTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#team",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    // Animate section heading
    teamTimeline.fromTo(
      "#team h1",
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

    // Animate description paragraph
    teamTimeline.fromTo(
      "#team p:first-of-type",
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

    // Animate team cards with stagger effect
    teamTimeline.fromTo(
      "#team .grid > div",
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

    // Add interactive hover animations to team cards
    gsap.utils.toArray("#team .grid > div").forEach(card => {
      const image = card.querySelector("img");
      const name = card.querySelector("h2");
      const role = card.querySelector("p:nth-child(3)");
      const desc = card.querySelector("p:last-child");

      card.addEventListener("mouseenter", () => {
        const tl = gsap.timeline();
        tl.to(card, {
          scale: 1.05,
          boxShadow: "0 10px 15px rgba(255, 126, 51, 0.2)",
          duration: 0.3,
          ease: "power1.out",
        })
          .to(
            image,
            {
              scale: 1.1,
              rotation: 5,
              duration: 0.3,
            },
            0
          )
          .to(
            [name, role, desc],
            {
              y: -10,
              opacity: 0.8,
              duration: 0.3,
            },
            0
          );
      });

      card.addEventListener("mouseleave", () => {
        const tl = gsap.timeline();
        tl.to(card, {
          scale: 1,
          boxShadow: "none",
          duration: 0.3,
          ease: "power1.in",
        })
          .to(
            image,
            {
              scale: 1,
              rotation: 0,
              duration: 0.3,
            },
            0
          )
          .to(
            [name, role, desc],
            {
              y: 0,
              opacity: 1,
              duration: 0.3,
            },
            0
          );
      });
    });
  });

  return (
    <section id="team">
      <div className="px-8 py-12 mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 capitalize lg:text-4xl">
          Meet our
          <span className="text-orange-500"> Creative Designers</span>
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-600">
          Based in Hyderabad, our team specializes in creating stunning interior
          designs that transform your spaces into captivating environments.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map(member => (
            <div className="p-6 bg-white border rounded-lg shadow-md hover:shadow-lg">
              <img
                className="object-cover w-24 h-24 mx-auto rounded-full ring-4 ring-orange-400"
                src={member.image}
                alt="Designer"
              />
              <h2 className="mt-4 text-xl font-semibold text-center text-gray-800">
                {member.name}
              </h2>
              <p className="mt-2 text-center text-gray-500">{member.role}</p>
              <p className="mt-4 text-sm text-gray-600 text-center">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
