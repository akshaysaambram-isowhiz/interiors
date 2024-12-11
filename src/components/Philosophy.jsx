import React from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  return (
    <section className="mx-auto px-4 py-12 rounded-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-8">
        Our Design Philosophy
      </h2>
      <div className="max-w-4xl mx-auto text-center">
        <p className="mb-4">
          Interior design is used to describe a group of related projects that
          are involved in making any interior space into an effective setting
          for whatever range of human activities is to fit in. In interior
          spaces, we need proper and proportionate accommodation.
        </p>
        <p className="mb-4">
          My Vision specializes in Modern, classNameic Design with a global
          influence but with an individual touch of preference. We are known for
          Luxury & High-End interior designers in Hyderabad, whether designing
          residential or commercial spaces.
        </p>
        <p>
          We will guide you in placing your ideas and in selecting color schemes
          for the interior space, putting all these basic elements together to
          decorate and achieve aesthetic properties.
        </p>
      </div>
    </section>
  );
}
