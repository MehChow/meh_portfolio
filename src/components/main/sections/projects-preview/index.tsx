import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./projects-preview.scss";
import { MemeableSection } from "./memeable";
import { PixelArtSection } from "./pixel-art";
import { memeableImages, minecraftImages } from "./image-config";
import { RefObject, useRef } from "react";
import useDimension from "@/hooks/use-dimension";

gsap.registerPlugin(ScrollTrigger);

const animateImage = (
  imgRef: RefObject<HTMLDivElement | null>,
  targetXFunc: () => number,
  targetYFunc: () => number,
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
        start: "top 90%",
        end: "bottom 70%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  }
};

const setupPinning = (
  pinRef: RefObject<HTMLDivElement | null>,
  descriptionRef: RefObject<HTMLDivElement | null>,
  multiplier: number,
) => {
  if (pinRef.current && descriptionRef.current) {
    ScrollTrigger.create({
      trigger: pinRef.current,
      start: "top top",
      end: () => {
        const description = descriptionRef.current;
        const pin = pinRef.current;
        if (description && pin) {
          const pinnedHeight = pin.offsetHeight;
          return `+=${Math.max(description.scrollHeight - pinnedHeight * multiplier, 0)}`;
        }
        return "+=0";
      },
      pin: pinRef.current,
      pinSpacing: true,
      invalidateOnRefresh: true,
    });
  }
};

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

  const { width } = useDimension();

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1200px)", () => {
      // First Section Animations
      animateImage(
        userImgRef,
        () => {
          const container = imagesContainerRef.current;
          const img1 = userImgRef.current;
          return container && img1
            ? container.offsetWidth - img1.offsetWidth
            : 0;
        },
        () => 200,
      );
      animateImage(
        homeImgRef,
        () => {
          const container = imagesContainerRef.current;
          const img1 = userImgRef.current;
          const img2 = homeImgRef.current;
          const gap = width > 1500 ? 80 : 40;
          return container && img1 && img2
            ? container.offsetWidth - img1.offsetWidth - gap - img2.offsetWidth
            : 0;
        },
        () => 200,
      );
      setupPinning(imagesContainerRef, memeableDescriptionRef, 0.8);
    });

    // Second Section Animations
    animateImage(
      secondUserImgRef,
      () => 0,
      () => 100,
    );
    animateImage(
      secondHomeImgRef,
      () => 0,
      () => {
        const img1 = secondUserImgRef.current;
        const img2 = secondHomeImgRef.current;
        const gap = width > 1500 ? 40 : 20;
        return img1 && img2 ? img1.offsetHeight + gap + 100 : 100;
      },
    );
    setupPinning(secondImagesContainerRef, pixelArtDescriptionRef, 0.88);
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
