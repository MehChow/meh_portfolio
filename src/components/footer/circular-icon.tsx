"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CldImage } from "next-cloudinary";

gsap.registerPlugin(ScrollTrigger);

interface CircularIconProps {
  imageSrc: string;
  text: string;
}

const CircularIcon = ({ imageSrc, text }: CircularIconProps) => {
  useGSAP(() => {
    gsap.to(".footer-icon-circular-text", {
      attr: { startOffset: "25%" },
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".footer-icon-container",
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="footer-icon-container">
      {/* Circular Image */}
      <div className="relative z-10 h-50 w-50 overflow-hidden rounded-full">
        <CldImage
          src={imageSrc}
          alt="Circular icon"
          fill
          className="object-cover object-[5%] select-none"
          quality="auto"
          format="auto"
        />
      </div>

      {/* Circular Text using SVG */}
      <svg
        className="absolute h-full w-full"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="circlePath"
          d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          fill="none"
        />
        <text>
          <textPath
            className="footer-icon-circular-text cursor-default select-none"
            href="#circlePath"
            startOffset="-180%"
            textAnchor="start"
            dominantBaseline="middle"
          >
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CircularIcon;
