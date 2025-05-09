"use client";

import { CldImage } from "next-cloudinary";
import { CardProps } from "./card-config";

export default function Card({
  src,
  alt,
  label,
  objectPosition,
  containerClass,
}: CardProps) {
  return (
    <div
      className={`group medium:w-1/5 medium:h-[600px] medium:hover:w-[50%] medium:hover:scale-100 medium:hover:h-[600px] medium:aspect-auto relative flex h-full w-full cursor-pointer items-center justify-center rounded-4xl transition-all duration-300 hover:scale-105 ${containerClass}`}
    >
      <CldImage
        src={src}
        alt={alt}
        sizes="100%"
        fill
        className={`rounded-4xl object-cover transition-all duration-300 hover:opacity-50 ${objectPosition}`}
        quality="auto"
        format="auto"
      />
      <p className="medium:text-4xl pointer-events-none absolute text-[clamp(1rem,4vw,2rem)] font-bold tracking-widest text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
        {label}
      </p>
    </div>
  );
}
