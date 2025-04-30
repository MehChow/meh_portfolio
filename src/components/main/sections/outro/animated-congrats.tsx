"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AnimatedCongrats = () => {
  const congratsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1200px)", () => {
      gsap.to(congratsRef.current, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".congrats-container",
          start: "top 50%",
          end: "top 40%",
          toggleActions: "restart none none none",
          scrub: 1,
        },
      });
    });
    mm.add("(max-width: 1199px)", () => {
      gsap.to(congratsRef.current, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".congrats-container",
          start: "top 100%",
          end: "top 40%",
          toggleActions: "restart none none none",
          scrub: 1,
        },
      });
    });
  }, []);

  return (
    <div className="congrats-container">
      <div className="congrats-text-wrapper" ref={congratsRef}>
        <span className="text-[clamp(2.5rem,5vw,8rem)] text-white">
          CONGRATULATIONS!!
        </span>
        <span className="text-[clamp(1rem,2vw,2rem)] text-white">
          You have been blessed by DORO
        </span>
      </div>
    </div>
  );
};
