"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AnimatedExploreMore = () => {
  const exploreMoreRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(exploreMoreRef.current, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".congrats-container",
        start: "top 30%",
        end: "top 40%",
        toggleActions: "restart none none none",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div
      className="explore-more-container text-[clamp(2rem,3vw,3rem)]"
      ref={exploreMoreRef}
    >
      <span>
        Now go{" "}
        <Link
          href="/dev-skills"
          className="text-purple-300 transition-all duration-300 hover:opacity-80"
        >
          explore more
        </Link>
      </span>
    </div>
  );
};
