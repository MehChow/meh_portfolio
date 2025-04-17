import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import "./life-preview.css";
import { CardProps, cards } from "./card-config";

gsap.registerPlugin(ScrollTrigger);

function Card({ src, alt, label, objectPosition }: CardProps) {
  return (
    <div className="h-[600px] hover:w-[50%] w-1/5 relative rounded-4xl transition-all duration-300 cursor-pointer flex justify-center items-center group">
      <Image
        src={src}
        alt={alt}
        fill
        className={`rounded-4xl object-cover hover:opacity-50 transition-all duration-300 ${objectPosition}`}
      />
      <p className="absolute opacity-0 text-4xl font-bold text-white tracking-widest group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        {label}
      </p>
    </div>
  );
}

function LifePreview() {
  useGSAP(() => {
    gsap.to(".life-card-container", {
      xPercent: -100,
      opacity: 1,
      duration: 1,
      filter: "blur(0px)",
      stagger: 0.2, // 0.2s delay between each card
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".life-card-container", // Trigger when card container enters viewport
        start: "top 80%", // Start animation when top of container is 80% from top of viewport
        end: "top 20%", // End animation when top of container is 20% from top of viewport
        toggleActions: "restart none none none", // Play animation on enter
        scrub: 1,
      },
    });
  });

  return (
    <section className="flex p-8 justify-center items-center flex-col gap-8 pt-20">
      <h2 className="text-8xl text-center mb-8 text-white">L I F E</h2>

      <div className="w-full flex items-center">
        <div className="flex gap-4 justify-center items-center w-full life-card-container">
          {cards.map((card, index) => (
            <Card
              key={index}
              src={card.src}
              alt={card.alt}
              label={card.label}
              objectPosition={card.objectPosition}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LifePreview;
