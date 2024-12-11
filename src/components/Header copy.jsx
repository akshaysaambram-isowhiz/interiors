import React from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, Phone, X } from "lucide-react";

import { metadata } from "../store/constants";

const pages = [
  { name: "Home", href: "/myvisioninteriors" },
  { name: "About", href: "/myvisioninteriors#about" },
  { name: "Services", href: "/myvisioninteriors/services" },
  { name: "Contact", href: "#" },
];

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  function toggleMenu() {
    const mobileMenu = document.querySelector("#mobile-menu");
    mobileMenu.classList.toggle("translate-x-full");
  }

  useGSAP(() => {
    gsap.from("#desktop-menu", {
      opacity: 0,
      y: -100,
      duration: 1,
      ease: "power2.out",
    });
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div id="desktop-menu" className="px-4 py-3 bg-black/50">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className="sr-only">My Vision Interiors</span>
              <img
                className="h-8 w-auto"
                src="../assets/logo2.jpg"
                alt="My Vision Interiors Logo"
              />
            </a>
          </div>

          {/* Desktop Navigation  */}
          <div className="hidden lg:flex space-x-8">
            {pages.map(page => (
              <a
                key={page.name}
                href={page.href}
                className="text-orange-200 hover:text-orange-700 font-extrabold transition-colors duration-300 tracking-wide text-base relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-orange-700 hover:after:w-full after:transition-all"
              >
                {page.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle  */}
          <div className="lg:hidden">
            <button className="text-orange-900" onClick={toggleMenu}>
              <span className="sr-only" aria-label="Open main menu">
                Open main menu
              </span>
              <Menu className="size-6" />
            </button>
          </div>

          {/* Desktop Contact  */}
          <div className="hidden lg:flex items-center">
            <a
              href={`tel:${metadata.phone}`}
              className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors group"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              {metadata.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu  */}
      <div
        id="mobile-menu"
        className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-orange-50 px-6 py-6 sm:max-w-sm transform translate-x-full transition-transform duration-300 ease-in-out"
      >
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">My Vision Interiors</span>
            <img
              className="h-8 w-auto"
              src="./assets/logo.png"
              alt="My Vision Interiors Logo"
            />
          </a>
          <button className="text-orange-900" onClick={toggleMenu}>
            <span className="sr-only">Close menu</span>
            <X className="size-6" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-orange-200">
            <div className="space-y-2 py-6">
              {pages.map(page => (
                <a
                  key={page.name}
                  href={page.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-orange-900 hover:bg-orange-100"
                >
                  {page.name}
                </a>
              ))}
            </div>
            <div className="py-6">
              <a
                href={`tel:${metadata.phone}`}
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-orange-900 hover:bg-orange-100"
              >
                {metadata.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
