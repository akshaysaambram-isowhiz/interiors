import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const galleryImages = [
  "./assets/hero2.jpg",
  "./assets/hero2.jpg",
  "./assets/hero2.jpg",
  "./assets/hero2.jpg",
  "./assets/hero2.jpg",
  "./assets/hero2.jpg",
  "./assets/hero2.jpg",
];

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const galleryRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const galleryElement = galleryRef.current;

    // Staggered entrance animation
    gsap.fromTo(
      imageRefs.current,
      {
        opacity: 0,
        scale: 0.8,
        y: 50,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: galleryElement,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Hover interactions
    imageRefs.current.forEach(img => {
      img.addEventListener("mouseenter", () => {
        gsap.to(img, {
          scale: 1.05,
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          duration: 0.3,
        });
      });

      img.addEventListener("mouseleave", () => {
        gsap.to(img, {
          scale: 1,
          boxShadow: "none",
          duration: 0.3,
        });
      });
    });

    // Cleanup function
    return () => {
      imageRefs.current.forEach(img => {
        // Remove event listeners if needed
      });
    };
  }, []);

  return (
    <section id="gallery" className="py-16 bg-gray-50 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800">
          Our Interior Gallery
        </h2>

        <div
          ref={galleryRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        >
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md group"
            >
              <img
                ref={el => (imageRefs.current[index] = el)}
                src={src}
                alt={`Interior design ${index + 1}`}
                className="w-full h-48 md:h-64 lg:h-80 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 ease-in-out flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 bg-white bg-opacity-80 px-4 py-2 rounded-md text-gray-800 font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
