import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface CirculrIconProps {
  imageSrc: string;
  text: string;
}

const CircularIcon = ({ imageSrc, text }: CirculrIconProps) => {
  useGSAP(() => {
    // Animation for circular text movement along the path
    gsap.to(".footer-icon-circular-text", {
      attr: { startOffset: "30%" }, // Adjust this value to control the "rotation" distance
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
      <div className="relative w-50 h-50 rounded-full overflow-hidden z-10">
        <Image
          src={imageSrc}
          alt="Circular icon"
          fill
          className="object-cover object-[5%]"
          quality={100}
        />
      </div>

      {/* Circular Text using SVG */}
      <svg
        className="absolute w-full h-full"
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
            className="footer-icon-circular-text"
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
