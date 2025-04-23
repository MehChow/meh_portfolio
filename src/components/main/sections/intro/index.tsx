import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./intro.css";

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
  <div
    className={`grid-cols-1 grid-rows-1 ${className} medium:aspect-auto aspect-square`}
  >
    <Image
      src={src}
      fill
      alt=""
      className="rounded-2xl object-cover"
      sizes="100%"
    />
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
      invalidateOnRefresh: true,
    },
  });
};

const IntroSection = () => {
  useGSAP(() => {
    imageConfigs.forEach(animateImage);
  }, []);

  return (
    <section className="intro large:px-60 medium:h-[100vh] small:px-20 small:mt-50 mobile:mt-20 mt-10 h-auto gap-10 px-10">
      {imageConfigs.map(({ className, src }, index) => (
        <ImageItem key={index} className={className} src={src} />
      ))}
      <div className="stagger-text-container medium:h-60 small:h-50 mobile:h-40 medium:w-[30vw] mobile:w-[40vw] h-30 w-[30vw] -translate-x-1/2 -translate-y-1/2 gap-1 transition-all">
        <StaggerText>Work hard</StaggerText>
        <StaggerText>Play hard</StaggerText>
      </div>
    </section>
  );
};

export default IntroSection;
