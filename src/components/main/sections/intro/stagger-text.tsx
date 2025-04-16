"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StaggerTextProps {
  children: string;
}

const StaggerText = ({ children }: StaggerTextProps) => {
  useGSAP(() => {
    gsap.to(".stagger-text", {
      yPercent: -150,
      stagger: 0.02,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".stagger-text",
        toggleActions: "restart none none none",
        start: "top 100%",
        end: "bottom 70%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div>
      {children.split("").map((char, index) => (
        <span key={index} className={`inline-block ${char !== " " ? "stagger-text" : ""}`}>
          {char === " " ? "\u00A0\u00A0\u00A0\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

export default StaggerText;
