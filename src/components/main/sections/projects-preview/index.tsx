import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./projects-preview.css";
import { MemeableSection } from "./memeable";
import { PixelArtSection } from "./pixel-art";
import { memeableImages, minecraftImages } from "./image-config";

gsap.registerPlugin(ScrollTrigger);

const animateImage = (
  className: string,
  targetXFunc: () => number,
  targetYFunc: () => number,
  start: string,
  end: string,
) => {
  gsap.to(`.${className}`, {
    x: targetXFunc, // Horizontal slide
    y: targetYFunc, // Downward motion for wave effect
    rotateZ: 0, // Rotate back to 0
    duration: 2.5,
    ease: "power1.out",
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

// Reusable function to setup pinning
const setupPinning = (
  triggerClass: string,
  pinClass: string,
  descriptionClass: string,
  multiplier: number,
) => {
  ScrollTrigger.create({
    trigger: `.${triggerClass}`,
    start: "top top",
    end: () => {
      const description = document.querySelector(`.${descriptionClass}`);
      if (description instanceof HTMLElement) {
        const imagesContainer = document.querySelector(`.${pinClass}`);
        const pinnedHeight =
          imagesContainer instanceof HTMLElement
            ? imagesContainer.offsetHeight
            : window.innerHeight;
        return `+=${Math.max(description.scrollHeight - pinnedHeight * multiplier, 0)}`;
      }
      return "+=0";
    },
    pin: `.${pinClass}`,
    pinSpacing: true,
  });
};

function ProjectsPreview() {
  useGSAP(() => {
    animateImage(
      "user-img",
      () => {
        const container = document.querySelector(
          ".images-container",
        ) as HTMLElement;
        const img1 = document.querySelector(".user-img") as HTMLElement;
        return container && img1 ? container.offsetWidth - img1.offsetWidth : 0;
      },
      () => 200, // Move downward for wave effect
      "top 90%",
      "bottom 70%",
    );

    // img2 (home-img) to the left of img1 with a gap
    animateImage(
      "home-img",
      () => {
        const container = document.querySelector(
          ".images-container",
        ) as HTMLElement;
        const img1 = document.querySelector(".user-img") as HTMLElement;
        const img2 = document.querySelector(".home-img") as HTMLElement;
        const gap = 80;
        return container && img1 && img2
          ? container.offsetWidth - img1.offsetWidth - gap - img2.offsetWidth
          : 0;
      },
      () => 200, // Same downward motion
      "top 90%",
      "bottom 70%",
    );

    // Setup pinning for first section
    setupPinning(
      "pin-container",
      "images-container",
      "memeable-description",
      0.8,
    );

    // img1 (second-user-img) sticks to the left border
    animateImage(
      "second-user-img",
      () => 0, // Stick to left border
      () => 100, // Move downward for wave effect
      "top 90%",
      "bottom 70%",
    );

    // img2 (second-home-img) below img1 with a gap
    animateImage(
      "second-home-img",
      () => 0, // Stick to left border
      () => {
        const img1 = document.querySelector(".second-user-img") as HTMLElement;
        const img2 = document.querySelector(".second-home-img") as HTMLElement;
        const gap = 40;
        return img1 && img2 ? img1.offsetHeight + gap + 100 : 100; // Vertical stacking + downward motion
      },
      "top 90%",
      "bottom 70%",
    );

    setupPinning(
      "second-content-wrapper",
      "second-images-container",
      "second-description",
      0.9,
    );
  }, []);

  return (
    <section className="pin-container">
      <MemeableSection
        images={memeableImages}
        descriptionClass="memeable-description text-justify"
        imagesContainerClass="images-container"
        wrapperClass="content-wrapper"
      />
      <PixelArtSection
        images={minecraftImages}
        descriptionClass="second-description text-justify"
        imagesContainerClass="second-images-container"
        wrapperClass="second-content-wrapper"
      />
    </section>
  );
}

export default ProjectsPreview;
