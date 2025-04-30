"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import {
  animateDesktopPixelart,
  animateMediumPixelart,
  fadeUpDescription,
  setupPinning,
} from "./gsap-util";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PixelArtSectionProps {
  images: { className: string; src: string }[];
}

export const PixelArtSection = ({ images }: PixelArtSectionProps) => {
  const imagesContainerRef = useRef<HTMLDivElement>(null);
  const suiseiImgRef = useRef<HTMLDivElement>(null);
  const kroniiImgRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // Desktop animations (min-width: 1200px)
    mm.add("(min-width: 1200px)", () => {
      animateDesktopPixelart(suiseiImgRef, 20, 45);
      animateDesktopPixelart(kroniiImgRef, 20, 45);
      setupPinning(imagesContainerRef, descriptionRef, 15, 0);
    });

    // Medium animations (max-width: 1199px)
    mm.add("(max-width: 1199px)", () => {
      animateMediumPixelart(imagesContainerRef, 45, -75);
    });

    // Fade-in description
    fadeUpDescription(descriptionRef);
  }, []);

  return (
    <div className="content-wrapper relative">
      <div className="description-container medium:pl-16 pl-0">
        <div className="second-description text-justify" ref={descriptionRef}>
          <h1 className="description-title small:text-nowrap text-wrap">
            Minecraft Pixelart
          </h1>
          <h2 className="description-subtitle">Life achievement for sure🔥</h2>
          <p>
            Using Mapartcraft to generate a pixelized art of the original image,
            then build it block by block manually.
          </p>
          <h3 className="description-section-title">Suisei’s art</h3>
          <p>
            Back in 2022, me and my duo friend build the first piece of pixel
            art for our favourite Vtuber{" "}
            <Link
              href="https://www.youtube.com/@HoshimachiSuisei"
              target="_blank"
              className="text-blue-300 underline transition-opacity hover:opacity-90"
            >
              Suisei
            </Link>{" "}
            🌠.
          </p>
          <p>
            This master piece took us 40 days to build. We even made a{" "}
            <Link
              href="https://www.youtube.com/watch?v=CF88s3AiXbQ"
              target="_blank"
              className="text-blue-300 underline transition-opacity hover:opacity-90"
            >
              little trailer
            </Link>{" "}
            for it🎥
          </p>
          <h3 className="description-section-title">Kronii’s art</h3>
          <p>
            This is the second, and also the last piece of pixel art I decided
            to build. Different from the last piece, I build this solo💀
          </p>
          <p>
            It’s a long progress, I spent around 2/3 of a year to build it, and
            of course I’ve made a{" "}
            <Link
              href="https://www.youtube.com/watch?v=WyMykwO5YuA"
              target="_blank"
              className="text-blue-300 underline transition-opacity hover:opacity-90"
            >
              progress video
            </Link>{" "}
            for it🕗
          </p>
        </div>
      </div>
      <div
        className="images-container medium:h-[100vh] medium:flex-none medium:items-baseline flex h-[100%] flex-col items-center justify-end"
        ref={imagesContainerRef}
      >
        {images.map(({ className, src }, index) => (
          <div
            key={index}
            className={className}
            ref={
              className === "pixelart-suisei-img" ? suiseiImgRef : kroniiImgRef
            }
          >
            <CldImage
              src={src}
              alt=""
              fill
              className="rounded-md"
              sizes="100%"
              quality="auto"
              format="auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
