import Image from "next/image";
import Link from "next/link";
import { RefObject } from "react";
import { ImageConfig } from "./image-config";

interface MinecraftSectionProps {
  images: ImageConfig[];
  secondImagesContainerRef: RefObject<HTMLDivElement | null>;
  secondHomeImgRef: RefObject<HTMLDivElement | null>;
  secondUserImgRef: RefObject<HTMLDivElement | null>;
  descriptionRef: RefObject<HTMLDivElement | null>;
}

export const PixelArtSection = ({
  images,
  secondImagesContainerRef,
  secondHomeImgRef,
  secondUserImgRef,
  descriptionRef,
}: MinecraftSectionProps) => (
  <div className="content-wrapper relative">
    <div className="description-container medium:pl-16 pl-0">
      <div className="second-description text-justify" ref={descriptionRef}>
        <h1 className="description-title text-nowrap">Minecraft Pixelart</h1>
        <h2 className="description-subtitle">Life achievement for sure🔥</h2>
        <p>
          Using Mapartcraft to generate a pixelized art of the original image,
          then build it block by block manually.
        </p>
        <h3 className="description-section-title">Suisei’s art</h3>
        <p>
          Back in 2022, me and my duo friend build the first piece of pixel art
          for our favourite Vtuber{" "}
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
          This is the second, and also the last piece of pixel art I decided to
          build. Different from the last piece, I build this solo💀
        </p>
        <p>
          It’s a long progress, I spent around 2/3 of a year to build it, and of
          course I’ve made a{" "}
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
      ref={secondImagesContainerRef}
    >
      {images.map(({ className, src }, index) => (
        <div
          key={index}
          className={className}
          ref={
            className === "pixelart-suisei-img"
              ? secondHomeImgRef
              : secondUserImgRef
          }
        >
          <Image src={src} alt="" fill className="rounded-md" sizes="100%" />
        </div>
      ))}
    </div>
  </div>
);
