"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

import CircularIcon from "./circular-icon";
import "./footer.css";

function Footer() {
  useGSAP(() => {
    gsap.to(".footer-wrapper", {
      yPercent: -20,
      opacity: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".footer-wrapper",
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
      },
    });
  });
  return (
    <footer className="relative w-full h-[100vh] overflow-hidden">
      {/* Dedicated div for the masked background */}
      <div className="maomao-background" />
      {/* Contact info div, unaffected by the mask */}
      <div className="footer-wrapper">
        <CircularIcon
          imageSrc="/life/anime/ryo.jpeg" // Replace with your image path
          text="DEVELOPER GAMER EDITOR"
        />
      </div>
    </footer>
  );
}

export default Footer;
