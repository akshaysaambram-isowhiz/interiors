import React from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const images = [
  {
    name: "Interior Design Project",
    image:
      "https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-1.jpg",
  },
  {
    name: "Interior Design Consultation",
    image:
      "https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-2.jpg",
  },
  {
    name: "Interior Design Workspace",
    image:
      "https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-3.jpg",
  },
];

const bullets = [
  {
    name: "On-time",
    image: "../assets/bullet1.png",
    desc: "We strictly adhere to the timings assigned to us. You set the time and we'll stay committed to it!",
  },
  {
    name: "Standard Pricing",
    image: "../assets/bullet1.png",
    desc: "You don't have to break the bank to get your problem fixed. Our services are aptly priced without hidden costs!",
  },
  {
    name: "Efficient Ergonomics",
    image: "../assets/bullet1.png",
    desc: "We have accredited equipment and committed experts to see the work through with ease!",
  },
  {
    name: "Certified Architects",
    image: "../assets/bullet1.png",
    desc: "All our professionals are certified and excel in their respective fields. They are dedicated and know their jobs well.",
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function WhyUs() {
  useGSAP(() => {
    // Create a timeline for section entrance
    const whyUsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#whyus",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    // Animate images with staggered entrance
    const images = gsap.utils.toArray("#whyus img[alt]");
    whyUsTimeline.fromTo(
      images,
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.5)",
      }
    );

    // Animate text sections
    whyUsTimeline.fromTo(
      "#whyus .block",
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.5"
    );

    whyUsTimeline.fromTo(
      "#whyus h2",
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.4"
    );

    // Subtle floating animation for decorative circle
    gsap.to("#whyus span img", {
      y: 20,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <section
      id="whyus"
      className="overflow-hidden pt-20 px-12 pb-12 lg:pt-[120px] lg:pb-[90px]"
    >
      <div className="mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-3 sm:py-4">
                  <Image {...images[0]} />
                </div>
                <div className="py-3 sm:py-4">
                  <Image {...images[1]} />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <Image {...images[2]} />
                  <span className="absolute -right-7 -bottom-7 z-[-1]">
                    <img src="./assets/circles.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <span className="block mb-4 text-lg font-semibold text-orange-500">
                Why My Vision?
              </span>
              <h2 className="mb-5 text-3xl font-bold text-gray-900 sm:text-[40px]/[48px]">
                Transforming Spaces with Precision and Passion
              </h2>
              <div className="space-y-4 mb-8">
                {bullets.map(bullet => (
                  <div className="flex items-start space-x-3">
                    <img
                      src={bullet.image}
                      alt={bullet.name}
                      className="h-6 w-6 text-orange-500 flex-shrink-0"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {bullet.name}
                      </h3>
                      <p className="text-gray-600">{bullet.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Image({ name, image }) {
  return <img src={image} alt={name} className="w-full rounded-2xl" />;
}
