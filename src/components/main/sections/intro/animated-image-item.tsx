"use client";

import { useGSAP } from "@gsap/react";
import { CldImage } from "next-cloudinary";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedImageItemProps {
  className: string;
  src: string;
  xPercent: number;
  start: string;
  end: string;
}

const AnimatedImageItem = ({
  className,
  src,
  xPercent,
  start,
  end,
}: AnimatedImageItemProps) => {
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        xPercent,
        duration: 1.75,
        scrollTrigger: {
          trigger: imageRef.current,
          toggleActions: "restart none none none",
          start,
          end,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }
  }, [xPercent, start, end]);

  return (
    <div
      ref={imageRef}
      className={`grid-cols-1 grid-rows-1 ${className} medium:aspect-auto aspect-square`}
    >
      <CldImage
        src={src} // Cloudinary public ID
        fill
        alt=""
        className="rounded-2xl object-cover"
        sizes="100%"
        quality="auto"
        format="auto"
      />
    </div>
  );
};

export default AnimatedImageItem;
