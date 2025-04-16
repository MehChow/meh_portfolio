import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import StaggerText from "./stagger-text";
import { imageConfigs } from "./image-config";

gsap.registerPlugin(ScrollTrigger);

interface ImageConfig {
  className: string;
  src: string;
  xPercent: number;
  start: string;
  end: string;
}

// Reusable component for each grid image
const ImageItem = ({ className, src }: { className: string; src: string }) => (
  <div className={`grid-cols-1 grid-rows-1 ${className}`}>
    <Image src={src} fill alt="" className="rounded-2xl object-cover" />
  </div>
);

// Reusable function to animate an image
const animateImage = ({ className, xPercent, start, end }: ImageConfig) => {
  gsap.to(`.${className}`, {
    xPercent,
    duration: 1.75,
    scrollTrigger: {
      trigger: `.${className}`,
      toggleActions: "restart none none none",
      start,
      end,
      scrub: 1,
    },
  });
};

const IntroSection = () => {
  useGSAP(() => {
    imageConfigs.forEach(animateImage);
  }, []);

  return (
    <section className="intro grid grid-cols-2 grid-rows-2 px-60 py-20 gap-y-20 gap-x-10 relative">
      {imageConfigs.map(({ className, src }, index) => (
        <ImageItem key={index} className={className} src={src} />
      ))}
      <div className="absolute bg-black w-[30vw] h-60 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center flex-col gap-1 overflow-hidden">
        <StaggerText>Work hard</StaggerText>
        <StaggerText>Play hard</StaggerText>
      </div>
    </section>
  );
};

export default IntroSection;
