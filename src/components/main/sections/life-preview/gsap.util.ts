import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export const animateLifeCards = () => {
  let mm = gsap.matchMedia();

  // Desktop
  mm.add("(min-width: 1200px)", () => {
    gsap.to(".life-card-container", {
      xPercent: -100,
      opacity: 1,
      duration: 1,
      filter: "blur(0px)",
      stagger: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".life-card-container",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "restart none none none",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  });

  // Medium
  mm.add("(max-width: 1199px)", () => {
    gsap.to(".life-card-container", {
      yPercent: -10,
      opacity: 1,
      duration: 1,
      filter: "blur(0px)",
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".life-card-container",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "restart none none none",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  });
};

export const fadeUpTitle = (titleRef: RefObject<HTMLDivElement | null>) => {
  if (titleRef.current) {
    gsap.set(titleRef.current, {
      opacity: 0,
      y: 100,
    });

    gsap.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: titleRef.current,
        toggleActions: "restart none none none",
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  }
};
