"use client";

import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AnimatedDoro = () => {
  const pathname = usePathname();
  const hasAnimatedDoro = useRef(false);
  const doroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Scroll-based entrance animation (always runs)
    gsap.to(doroRef.current, {
      opacity: 1,
      scale: 1,
      rotate: 3600,
      scrollTrigger: {
        trigger: doroRef.current,
        start: "top 80%",
        end: "top 60%",
        toggleActions: "play none none none",
      },
    });

    // Conditional Doro animation (runs once on homepage)
    if (pathname === "/") {
      ScrollTrigger.create({
        trigger: "footer",
        start: "top top",
        end: "top top",
        onEnter: () => {
          if (!hasAnimatedDoro.current) {
            hasAnimatedDoro.current = true;
            const { x: deltaX, y: deltaY } =
              getRandomCenterAreaDelta(".outro-doro");
            gsap.to(doroRef.current, {
              x: deltaX,
              y: deltaY,
              duration: 1,
              delay: 1,
              ease: "power4.out",
            });
          }
        },
        onLeaveBack: () => {
          gsap.to(doroRef.current, {
            x: 0,
            y: 0,
            duration: 1.5,
            ease: "power1.out",
          });
        },
      });

      gsap.to(".outro-doro-text", {
        opacity: 1,
        pointerEvents: "auto",
        scrollTrigger: {
          trigger: "footer",
          start: "top top",
          end: "top top",
          toggleActions: "play none none stop",
        },
      });
    }
  }, [pathname]);

  return (
    <div className="outro-doro relative h-92 w-92" ref={doroRef}>
      <Link
        href="/dev-skills"
        className="outro-doro-text transition-all duration-300 hover:scale-105"
      >
        GO!!!!!
      </Link>
      <CldImage
        src="doro1_f7xu8y" // Adjust to your Cloudinary public ID
        alt="Doro"
        fill
        className="object-contain"
        sizes="100%"
        quality="auto"
        format="auto"
      />
    </div>
  );
};

// Helper function for random position calculation
function getRandomCenterAreaDelta(selector: string) {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const rangeX = window.innerWidth * 0.2;
  const rangeY = window.innerHeight * 0.2;

  const randomX = centerX + (Math.random() - 0.5) * 2 * rangeX;
  const randomY = centerY + (Math.random() - 0.5) * 2 * rangeY;

  const elem = document.querySelector(selector) as HTMLElement;
  let startX = 0,
    startY = 0;
  if (elem) {
    const rect = elem.getBoundingClientRect();
    startX = rect.left + rect.width / 2;
    startY = rect.top + rect.height / 2;
  }

  return {
    x: randomX - startX,
    y: randomY - startY,
  };
}
