"use client";

import { useGSAP } from "@gsap/react";

import "./life-preview.css";
import { cards } from "./card-config";
import Card from "./card";
import { animateLifeCards, fadeUpTitle } from "./gsap.util";
import { useRef } from "react";

function LifePreview() {
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    animateLifeCards();
    fadeUpTitle(titleRef);
  });

  return (
    <section className="medium:h-auto flex flex-col items-center justify-start gap-8 p-8 pt-20">
      <h2
        className="medium:mb-8 mobile:text-8xl mb-0 text-center text-7xl text-white transition-all"
        ref={titleRef}
      >
        L I F E
      </h2>

      <div className="life-card-container medium:flex-row medium:h-auto medium:flex medium:w-full grid w-[90%] grid-cols-2 grid-rows-3 gap-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            src={card.src}
            alt={card.alt}
            label={card.label}
            objectPosition={card.objectPosition}
            containerClass={card.containerClass}
          />
        ))}
      </div>
    </section>
  );
}

export default LifePreview;
