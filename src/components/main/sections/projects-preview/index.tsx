"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "./projects-preview.scss";
import { MemeableSection } from "./memeable";
import { PixelArtSection } from "./pixel-art";
import { memeableImages, minecraftImages } from "./image-config";
import { useRef } from "react";
import {
  animateDesktopMemeable,
  animateDesktopPixelart,
  animateMediumMemeable,
  animateMediumPixelart,
  fadeUpDescription,
  setupPinning,
} from "./gsap-util";

function ProjectsPreview() {
  // Refs for first section
  const imagesContainerRef = useRef<HTMLDivElement>(null);
  const homeImgRef = useRef<HTMLDivElement>(null);
  const userImgRef = useRef<HTMLDivElement>(null);
  const memeableDescriptionRef = useRef<HTMLDivElement | null>(null);

  // Refs for second section
  const secondImagesContainerRef = useRef<HTMLDivElement>(null);
  const secondHomeImgRef = useRef<HTMLDivElement>(null);
  const secondUserImgRef = useRef<HTMLDivElement>(null);
  const pixelArtDescriptionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    // Desktop animation
    mm.add("(min-width: 1200px)", () => {
      // Memeable
      animateDesktopMemeable(userImgRef, -10, 30, () => {
        const container = imagesContainerRef.current;
        const img1 = userImgRef.current;

        // offsetWidth =  the layout width of an element as an integer
        return container && img1 ? container.offsetWidth - img1.offsetWidth : 0;
      });
      animateDesktopMemeable(homeImgRef, -15, 45, () => {
        const container = imagesContainerRef.current;
        const img1 = userImgRef.current;
        const img2 = homeImgRef.current;

        return container && img1 && img2
          ? container.offsetWidth - img1.offsetWidth - img2.offsetWidth
          : 0;
      });
      setupPinning(imagesContainerRef, memeableDescriptionRef, 20, -10);

      // Pixel arts
      animateDesktopPixelart(secondHomeImgRef, 20, 45);
      animateDesktopPixelart(secondUserImgRef, 20, 45);

      setupPinning(secondImagesContainerRef, pixelArtDescriptionRef, 15, 0);
    });

    // Medium animation
    mm.add("(max-width: 1199px)", () => {
      // Memeable
      animateMediumMemeable(imagesContainerRef, 45, -35);

      // Pixel arts
      animateMediumPixelart(secondImagesContainerRef, 45, -75);
    });

    // Fade up description
    fadeUpDescription(memeableDescriptionRef);
    fadeUpDescription(pixelArtDescriptionRef);
  }, []);

  return (
    <section className="pin-container">
      <MemeableSection
        images={memeableImages}
        imagesContainerRef={imagesContainerRef}
        homeImgRef={homeImgRef}
        userImgRef={userImgRef}
        descriptionRef={memeableDescriptionRef}
      />
      <PixelArtSection
        images={minecraftImages}
        secondImagesContainerRef={secondImagesContainerRef}
        secondHomeImgRef={secondHomeImgRef}
        secondUserImgRef={secondUserImgRef}
        descriptionRef={pixelArtDescriptionRef}
      />
    </section>
  );
}

export default ProjectsPreview;
