"use client";

import { galleryImages } from "@/constant/gallery-image";
import { useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import useDimension from "@/hooks/use-dimension";
import Column from "../column";
import "@/components/main/styles/gallery-parallax.css";

function GalleryParallax() {
  const container = useRef(null);
  const [columnCount, setColumnCount] = useState(4); // Default to 4 columns
  const { height, width } = useDimension();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 1.8]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.5]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 2.3]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (width < 1130) {
        setColumnCount(2); // 2 columns below 1130px
      } else if (width < 1500) {
        setColumnCount(3); // 3 columns between 1130px and 1400px
      } else {
        setColumnCount(4); // 4 columns at 1400px and above
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <section className="h-[175vh] relative">
      <div
        ref={container}
        className="h-full flex flex-row gap-4 p-4 overflow-hidden relative opacity-50"
      >
        {/* Gallery content */}
        {columnCount >= 1 && (
          <Column images={[galleryImages[0], galleryImages[1], galleryImages[2]]} y={y1} />
        )}
        {columnCount >= 2 && (
          <Column images={[galleryImages[3], galleryImages[4], galleryImages[5]]} y={y2} />
        )}
        {columnCount >= 3 && (
          <Column images={[galleryImages[6], galleryImages[7], galleryImages[8]]} y={y3} />
        )}
        {columnCount >= 4 && (
          <Column images={[galleryImages[9], galleryImages[10], galleryImages[11]]} y={y4} />
        )}
        <div className="fade-overlay" />
      </div>

      {/* Description */}
      <div className="description">SOME TEXT</div>
    </section>
  );
}

export default GalleryParallax;
