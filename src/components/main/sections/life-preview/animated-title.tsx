"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { fadeUpTitle } from "./gsap.util";

interface AnimatedTitleProps {
  children: React.ReactNode;
}

export const AnimatedTitle = ({ children }: AnimatedTitleProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    fadeUpTitle(titleRef);
  }, []);

  return (
    <h2
      className="medium:mb-8 mobile:text-8xl mb-0 text-center text-7xl text-white transition-all"
      ref={titleRef}
    >
      {children}
    </h2>
  );
};
