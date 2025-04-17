"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

import CircularIcon from "./circular-icon";
import "./footer.css";
import SocialBox from "./social-box";
import { Mail } from "lucide-react";

function Footer() {
  useGSAP(() => {
    gsap.to(".footer-content-wrapper", {
      yPercent: -20,
      opacity: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".footer-content-wrapper",
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
      },
    });
  });
  return (
    <footer className="relative w-full h-[100vh] overflow-hidden">
      <div className="maomao-background" />
      <div className="footer-content-wrapper">
        <div className="flex items-center">
          <div className="text-white flex flex-col gap-4">
            <h1 className="text-6xl font-bold mr-20">Meh Chow</h1>
            <div className="flex flex-col">
              <span className="react-dev-text">React developer</span>
              <span className="video-editor-text">Video Editor</span>
            </div>
            <SocialBox />
          </div>
          <CircularIcon
            imageSrc="/life/anime/ryo.jpeg"
            text="Oh na-na-na-na TRALALELO TRALALA🦈🦈"
          />
        </div>

        <div className="text-white text-right mr-6">
          <span className="text-3xl font-bold">Contact</span>
          <div className="flex gap-1">
            <Mail size={20} />
            <p>mehchow0604@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
