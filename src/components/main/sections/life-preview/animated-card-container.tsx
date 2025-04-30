"use client";

import { useGSAP } from "@gsap/react";
import { cards } from "./card-config";
import Card from "./card";
import { animateLifeCards } from "./gsap.util";
import "./life-preview.css";

export const AnimatedCardContainer = () => {
  useGSAP(() => {
    animateLifeCards();
  }, []);

  return (
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
  );
};
