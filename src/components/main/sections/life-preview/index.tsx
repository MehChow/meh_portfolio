import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import "./life-preview.css";
import { CardProps, cards } from "./card-config";

gsap.registerPlugin(ScrollTrigger);

function Card({ src, alt, label, objectPosition }: CardProps) {
  return (
    <div className="group relative flex h-[600px] w-1/5 cursor-pointer items-center justify-center rounded-4xl transition-all duration-300 hover:w-[50%]">
      <Image
        src={src}
        alt={alt}
        sizes="100%"
        fill
        className={`rounded-4xl object-cover transition-all duration-300 hover:opacity-50 ${objectPosition}`}
      />
      <p className="pointer-events-none absolute text-4xl font-bold tracking-widest text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
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
        invalidateOnRefresh: true,
      },
    });
  });

  return (
    <section className="flex flex-col items-center justify-center gap-8 p-8 pt-20">
      <h2 className="mb-8 text-center text-8xl text-white">L I F E</h2>

      <div className="flex w-full items-center">
        <div className="life-card-container flex w-full items-center justify-center gap-4">
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
