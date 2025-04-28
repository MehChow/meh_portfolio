import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateOutroSection = (pathname: string) => {
  // First animation: Rotate, scale, and fade in when the outro section enters the viewport
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

  gsap.to(".congrats-text-wrapper", {
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

  // if (pathname === "/") {
  //   gsap.to(".outro-doro", {
  //     y: window.innerHeight * 1.1,
  //     x: window.innerWidth * 0.12,
  //     ease: "power4.out",
  //     duration: 1,
  //     delay: 1,
  //     scrollTrigger: {
  //       trigger: "footer",
  //       start: "top top",
  //       end: "top top",
  //       toggleActions: "restart none reverse none",
  //     },
  //   });

  //   gsap.to(".outro-doro-text", {
  //     opacity: 1,
  //     scrollTrigger: {
  //       trigger: "footer",
  //       start: "top top",
  //       end: "top top",
  //       toggleActions: "restart none none none",
  //       scrub: 1,
  //     },
  //   });
  // }
};
