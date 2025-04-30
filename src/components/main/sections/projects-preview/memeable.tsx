"use client";

import Link from "next/link";
import { SkillItem, SKILLS } from "./skills";
import {
  animateDesktopMemeable,
  animateMediumMemeable,
  fadeUpDescription,
  setupPinning,
} from "./gsap-util";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { CldImage } from "next-cloudinary";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MemeableSectionProps {
  images: { className: string; src: string }[];
}

export const MemeableSection = ({ images }: MemeableSectionProps) => {
  const imagesContainerRef = useRef<HTMLDivElement>(null);
  const homeImgRef = useRef<HTMLDivElement>(null);
  const userImgRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // Desktop animations (min-width: 1200px)
    mm.add("(min-width: 1200px)", () => {
      animateDesktopMemeable(userImgRef, -10, 30, () => {
        const container = imagesContainerRef.current;
        const img1 = userImgRef.current;
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
      setupPinning(imagesContainerRef, descriptionRef, 20, -10);
    });

    // Medium animations (max-width: 1199px)
    mm.add("(max-width: 1199px)", () => {
      animateMediumMemeable(imagesContainerRef, 45, -35);
    });

    // Fade-in description
    fadeUpDescription(descriptionRef);
  }, []);

  return (
    <div className="content-wrapper">
      <div
        className="images-container medium:h-[100vh] h-[100%]"
        ref={imagesContainerRef}
      >
        {images.map(({ className, src }, index) => (
          <div
            key={index}
            className={className}
            ref={className === "memeable-home-img" ? homeImgRef : userImgRef}
          >
            <CldImage
              src={src}
              alt=""
              fill
              className="medium:rounded-md rounded-none"
              sizes="100%"
              quality="auto"
              format="auto"
            />
          </div>
        ))}
      </div>
      <div className="description-container medium:pr-16 pr-0">
        <div className="memeable-description text-justify" ref={descriptionRef}>
          <h1 className="description-title">Memeable</h1>
          <h2 className="description-subtitle">Full-stack side project📱</h2>
          <p>
            A social media platform where users can share images and interacts
            with other users.
          </p>
          <p>
            Common features like posting, likes, comments, follows, edit
            profiles, and like comments are supported.
          </p>
          <p>
            Mostly importantly, there is a unique music sharing feature where
            users can set a background music in their profile✨
          </p>
          <h3 className="description-section-title">Tech Stack</h3>
          <div className="medium:grid-cols-2 medium:grid-rows-3 medium:place-self-auto grid grid-rows-6 place-self-center">
            {SKILLS.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
          </div>
          <h3 className="description-section-title">Download</h3>
          <p>
            You can’t! This is just a side project that I used for job hunting
            for my first job🤣. But if you are interested and looking for a full
            demo, you can check it out in my{" "}
            <Link
              href="/projects"
              className="text-blue-300 underline transition-opacity hover:opacity-90"
            >
              Projects
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
