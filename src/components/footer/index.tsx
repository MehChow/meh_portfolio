"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

import CircularIcon from "./circular-icon";
import "./footer.css";
import SocialBox from "./social-box";
import { Mail } from "lucide-react";
import { ResponsiveSeparator } from "./responsive-separator";

function Footer() {
  useGSAP(() => {
    gsap.set(".footer-content-wrapper", {
      yPercent: 20,
    });

    gsap.to(".footer-content-wrapper", {
      yPercent: 10,
      opacity: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".footer-content-wrapper",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });
  });

  return (
    <footer className="relative h-[100vh] w-full overflow-hidden">
      <div className="maomao-background" />

      {/* Right side content wrapper */}
      <div className="footer-content-wrapper">
        <div className="footer:flex-row footer:gap-[2.5rem] flex flex-col-reverse items-center justify-between gap-[2rem]">
          {/* Personal Title */}
          <div className="footer:items-baseline flex flex-col items-center gap-4 text-white">
            <h1 className="text-6xl font-bold text-nowrap">Meh Chow</h1>
            <div className="footer:items-baseline flex flex-col items-center">
              <span className="react-dev-text">React developer</span>
              <span className="video-editor-text">Video Editor</span>
            </div>
            <SocialBox />
          </div>

          <ResponsiveSeparator className="bg-muted-foreground opacity-50" />

          <CircularIcon
            imageSrc="/life/anime/ryo.jpeg"
            text="Nande Haruhikage?"
          />
        </div>

        <div className="pr:0 footer:mt-4 footer:pr-8 footer:text-right mt-20 flex flex-col text-center text-white">
          <span className="text-3xl font-bold">Contact</span>
          <div className="footer:self-end flex gap-1 self-center">
            <Mail size={20} />
            <p>mehchow0604@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
