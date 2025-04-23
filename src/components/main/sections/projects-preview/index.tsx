import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./projects-preview.css";
import { MemeableSection } from "./memeable";
import { PixelArtSection } from "./pixel-art";
import { memeableImages, minecraftImages } from "./image-config";
import { RefObject, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const animateImage = (
  imgRef: RefObject<HTMLDivElement | null>,
  targetXFunc: () => number,
  targetYFunc: () => number,
  start: string,
  end: string,
) => {
  if (imgRef.current) {
    gsap.to(imgRef.current, {
      x: targetXFunc,
      y: targetYFunc,
      rotateZ: 0,
      duration: 2.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: imgRef.current,
        toggleActions: "restart none none none",
        start,
        end,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  }
};

const setupPinning = (
  pinRef: RefObject<HTMLDivElement | null>,
  descriptionClass: string,
  multiplier: number,
) => {
  if (pinRef.current) {
    const description = document.querySelector(`.${descriptionClass}`);
    ScrollTrigger.create({
      trigger: pinRef.current,
      start: "top top",
      end: () => {
        if (description instanceof HTMLElement && pinRef.current) {
          const pinnedHeight = pinRef.current.offsetHeight;
          return `+=${Math.max(description.scrollHeight - pinnedHeight * multiplier, 0)}`;
        }
        return "+=0";
      },
      pin: pinRef.current,
      pinSpacing: true,
    });
  }
};

function ProjectsPreview() {
  // Refs for first section
  const imagesContainerRef = useRef<HTMLDivElement>(null);
  const homeImgRef = useRef<HTMLDivElement>(null);
  const userImgRef = useRef<HTMLDivElement>(null);

  // Refs for second section
  const secondImagesContainerRef = useRef<HTMLDivElement>(null);
  const secondHomeImgRef = useRef<HTMLDivElement>(null);
  const secondUserImgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // First Section Animations
    animateImage(
      userImgRef,
      () => {
        const container = imagesContainerRef.current;
        const img1 = userImgRef.current;
        return container && img1 ? container.offsetWidth - img1.offsetWidth : 0;
      },
      () => 200,
      "top 90%",
      "bottom 70%",
    );

    animateImage(
      homeImgRef,
      () => {
        const container = imagesContainerRef.current;
        const img1 = userImgRef.current;
        const img2 = homeImgRef.current;
        const gap = 80;
        return container && img1 && img2
          ? container.offsetWidth - img1.offsetWidth - gap - img2.offsetWidth
          : 0;
      },
      () => 200,
      "top 90%",
      "bottom 70%",
    );

    setupPinning(imagesContainerRef, "memeable-description", 0.8);

    // Second Section Animations
    animateImage(
      secondUserImgRef,
      () => 0,
      () => 100,
      "top 90%",
      "bottom 70%",
    );

    animateImage(
      secondHomeImgRef,
      () => 0,
      () => {
        const img1 = secondUserImgRef.current;
        const img2 = secondHomeImgRef.current;
        const gap = 40;
        return img1 && img2 ? img1.offsetHeight + gap + 100 : 100;
      },
      "top 90%",
      "bottom 70%",
    );

    setupPinning(secondImagesContainerRef, "second-description", 0.9);
  }, []);

  return (
    <section className="pin-container">
      <MemeableSection
        images={memeableImages}
        descriptionClass="memeable-description text-justify"
        imagesContainerClass="images-container"
        wrapperClass="content-wrapper"
        imagesContainerRef={imagesContainerRef}
        homeImgRef={homeImgRef}
        userImgRef={userImgRef}
      />
      <PixelArtSection
        images={minecraftImages}
        descriptionClass="second-description text-justify"
        imagesContainerClass="second-images-container"
        wrapperClass="second-content-wrapper"
        secondImagesContainerRef={secondImagesContainerRef}
        secondHomeImgRef={secondHomeImgRef}
        secondUserImgRef={secondUserImgRef}
      />
    </section>
  );
}

export default ProjectsPreview;
