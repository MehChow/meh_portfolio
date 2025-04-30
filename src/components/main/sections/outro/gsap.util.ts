import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Utility to animate the outro section elements with scroll-based triggers.
 */
export const animateOutroSection = () => {
  const mm = gsap.matchMedia();

  // Animate congrats text wrapper responsively
  mm.add("(min-width: 1200px)", () => {
    animateCongratsTextWrapper("top 50%", "top 40%");
  });
  mm.add("(max-width: 1199px)", () => {
    animateCongratsTextWrapper("top 100%", "top 40%");
  });

  // Animate Doro's entrance
  gsap.to(".outro-doro", {
    opacity: 1,
    scale: 1,
    rotate: 3600,
    scrollTrigger: {
      trigger: ".outro-doro",
      start: "top 80%",
      end: "top 60%",
      toggleActions: "play none none none",
    },
  });

  // Animate "explore more" container
  gsap.to(".explore-more-container", {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".congrats-container",
      start: "top 30%",
      end: "top 40%",
      toggleActions: "restart none none none",
      scrub: 1,
    },
  });
};

/**
 * Helper to animate the congrats text wrapper with custom start/end.
 */
function animateCongratsTextWrapper(start: string, end: string) {
  gsap.to(".congrats-text-wrapper", {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".congrats-container",
      start,
      end,
      toggleActions: "restart none none none",
      scrub: 1,
    },
  });
}

/**
 * Animate Doro to a random center-area position in the next viewport,
 * and reset to original position when scrolling up.
 */
export const animateDoro = (hasAnimatedDoroRef: RefObject<boolean>) => {
  ScrollTrigger.create({
    trigger: "footer",
    start: "top top",
    end: "top top",
    onEnter: () => {
      if (hasAnimatedDoroRef && !hasAnimatedDoroRef.current) {
        hasAnimatedDoroRef.current = true;

        // Move Doro to a random position in the center area
        const { x: deltaX, y: deltaY } =
          getRandomCenterAreaDelta(".outro-doro");
        gsap.to(".outro-doro", {
          x: deltaX,
          y: deltaY,
          duration: 1,
          delay: 1,
          ease: "power4.out",
        });
      }
    },
    onLeaveBack: () => {
      gsap.to(".outro-doro", {
        x: 0,
        y: 0,
        duration: 1.5,
        ease: "power1.out",
      });
    },
  });

  // Animate the text under Doro
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
};

/**
 * Helper to calculate the delta needed to move an element
 * to a random position within the center area of the viewport.
 */
function getRandomCenterAreaDelta(selector: string) {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const rangeX = window.innerWidth * 0.2;
  const rangeY = window.innerHeight * 0.2;

  // Random offset within ±20% of center
  const randomX = centerX + (Math.random() - 0.5) * 2 * rangeX;
  const randomY = centerY + (Math.random() - 0.5) * 2 * rangeY;

  // Get current element center
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
