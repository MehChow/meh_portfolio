"use client";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const texts = ["Developer", "Video Editor", "Gamer"];

export default function CubeTextAnimation() {
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const currentIndexRef = useRef(0);

  useGSAP(() => {
    // Initialize: hide all texts except the first
    textRefs.current.forEach((text, index) => {
      if (text && index !== 0) {
        gsap.set(text, { opacity: 0, y: 50, rotationX: 90 });
      }
    });

    const rotateText = () => {
      const prevIndex = currentIndexRef.current;
      currentIndexRef.current = (currentIndexRef.current + 1) % texts.length;
      const currentIndex = currentIndexRef.current;

      if (textRefs.current[prevIndex]) {
        gsap.to(textRefs.current[prevIndex], {
          opacity: 0,
          y: -50,
          rotationX: -90,
          duration: 0.6,
          ease: "power2.inOut",
        });
      }

      if (textRefs.current[currentIndex]) {
        gsap.fromTo(
          textRefs.current[currentIndex],
          { opacity: 0, y: 50, rotationX: 90 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.6,
            ease: "power2.inOut",
          }
        );
      }
    };

    const interval = setInterval(rotateText, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cube-container">
      {texts.map((text, index) => (
        <div
          key={text}
          ref={(el) => {
            textRefs.current[index] = el;
          }}
          className="cube-text"
        >
          {text}
        </div>
      ))}
    </div>
  );
}
