import Image from "next/image";
import Link from "next/link";

interface ImageConfig {
  className: string;
  src: string;
  xPercent: number;
  yPercent: number;
  start: string;
  end: string;
}

interface MinecraftSectionProps {
  images: ImageConfig[];
  descriptionClass: string;
  imagesContainerClass: string;
  wrapperClass: string;
}

export const PixelArtSection = ({
  images,
  descriptionClass,
  imagesContainerClass,
  wrapperClass,
}: MinecraftSectionProps) => (
  <div className={wrapperClass}>
    <div className="left-description-container">
      <div className={descriptionClass}>
        <h1 className="description-title text-left text-nowrap">Minecraft Pixel Art</h1>
        <h2 className="description-subtitle">Life achievement for sure🔥</h2>
        <p>
          Using Mapartcraft to generate a pixelized art of the original image, then build it block
          by block manually.
        </p>
        <h3 className="description-section-title">Suisei’s art</h3>
        <p>
          Back in 2022, me and my duo friend build the first piece of pixel art for our favourite
          Vtuber{" "}
          <Link
            href="https://www.youtube.com/@HoshimachiSuisei"
            target="_blank"
            className="underline text-blue-300 hover:opacity-90 transition-opacity"
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
            className="underline text-blue-300 hover:opacity-90 transition-opacity"
          >
            little trailer
          </Link>{" "}
          for it🎥
        </p>
        <h3 className="description-section-title">Kronii’s art</h3>
        <p>
          This is the second, and also the last piece of pixel art I decided to build. Different
          from the last piece, I build this solo💀
        </p>
        <p>
          It’s a long progress, I spent around 2/3 of a year to build it, and of course I’ve made a{" "}
          <Link
            href="https://www.youtube.com/watch?v=WyMykwO5YuA"
            target="_blank"
            className="underline text-blue-300 hover:opacity-90 transition-opacity"
          >
            progress video
          </Link>{" "}
          for it🕗
        </p>
      </div>
    </div>
    <div className={imagesContainerClass}>
      {images.map(({ className, src }, index) => (
        <div key={index} className={className}>
          <Image src={src} alt="" fill className="rounded-md" />
        </div>
      ))}
    </div>
  </div>
);
