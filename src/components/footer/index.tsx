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
        <div className="flex flex-col-reverse items-center justify-between gap-[2rem] min-[1500px]:flex-row min-[1500px]:gap-[3rem]">
          {/* Personal Title */}
          <div className="flex flex-col items-center gap-4 text-white min-[1500px]:items-baseline">
            <h1 className="text-6xl font-bold text-nowrap">Meh Chow</h1>
            <div className="flex flex-col items-center min-[1500px]:items-baseline">
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

        <div className="pr:0 mt-20 flex flex-col text-center text-white min-[1500px]:mt-4 min-[1500px]:pr-8 min-[1500px]:text-right">
          <span className="text-3xl font-bold">Contact</span>
          <div className="flex gap-1 self-center min-[1500px]:self-end">
            <Mail size={20} />
            <p>mehchow0604@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
