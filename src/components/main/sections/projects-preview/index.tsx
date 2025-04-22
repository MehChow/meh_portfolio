import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./projects-preview.css";
import { MemeableSection } from "./memeable";
import { PixelArtSection } from "./pixel-art";
import { memeableImages, minecraftImages } from "./image-config";

gsap.registerPlugin(ScrollTrigger);

interface ImageConfig {
  className: string;
  src: string;
  xPercent: number;
  yPercent: number;
  start: string;
  end: string;
}

// Reusable function to animate an image
const animateImage = (
  className: string,
  xPercent: number,
  yPercent: number,
  start: string,
  end: string
) => {
  gsap.to(`.${className}`, {
    xPercent,
    yPercent,
    rotateZ: 0,
    duration: 2.5,
    ease: "power1.out",
    scrollTrigger: {
      trigger: `.${className}`,
      toggleActions: "restart none none none",
      start,
      end,
      scrub: 1,
    },
  });
};

// Reusable function to setup pinning
const setupPinning = (
  triggerClass: string,
  pinClass: string,
  descriptionClass: string,
  multiplier: number
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
    animateImage("home-img", 350, 45, "top 90%", "bottom 70%");
    animateImage("user-img", 350, 40, "top 90%", "bottom 70%");

    // Setup pinning for first section
    setupPinning("pin-container", "images-container", "memeable-description", 0.8);

    // Animate second section images
    animateImage("second-home-img", -350, 25, "top 90%", "bottom 70%");
    animateImage("second-user-img", -350, 150, "top 90%", "bottom 70%");

    // Setup pinning for second section
    setupPinning("second-content-wrapper", "second-images-container", "second-description", 0.9);
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
