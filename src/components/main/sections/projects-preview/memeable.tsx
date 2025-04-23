import Image from "next/image";
import Link from "next/link";
import { SkillItem, SKILLS } from "./skills";
import { RefObject } from "react";

interface ImageConfig {
  className: string;
  src: string;
  xPercent: number;
  yPercent: number;
  start: string;
  end: string;
}

interface MemeableSectionProps {
  images: ImageConfig[];
  descriptionClass: string;
  imagesContainerClass: string;
  wrapperClass: string;
  imagesContainerRef: RefObject<HTMLDivElement | null>;
  homeImgRef: RefObject<HTMLDivElement | null>;
  userImgRef: RefObject<HTMLDivElement | null>;
}

export const MemeableSection = ({
  images,
  descriptionClass,
  imagesContainerClass,
  wrapperClass,
  imagesContainerRef,
  homeImgRef,
  userImgRef,
}: MemeableSectionProps) => (
  <div className={wrapperClass}>
    <div className={imagesContainerClass} ref={imagesContainerRef}>
      {images.map(({ className, src }, index) => (
        <div
          key={index}
          className={className}
          ref={className === "home-img" ? homeImgRef : userImgRef}
        >
          <Image src={src} alt="" fill className="rounded-md" />
        </div>
      ))}
    </div>
    <div className="right-description-container">
      <div className={descriptionClass}>
        <h1 className="description-title">Memeable</h1>
        <h2 className="description-subtitle">Full-stack side project📱</h2>
        <p>
          A social media platform where users can share images and interacts
          with other users.
        </p>
        <p>
          Common features like posting, likes, comments, follows, edit profiles,
          and like comments are supported.
        </p>
        <p>
          Mostly importantly, there is a unique music sharing feature where
          users can set a background music in their profile✨
        </p>
        <h3 className="description-section-title">Tech Stack</h3>
        <div className="grid grid-cols-2 grid-rows-3">
          {SKILLS.map((skill, index) => (
            <SkillItem key={index} {...skill} />
          ))}
        </div>
        <h3 className="description-section-title">Download</h3>
        <p>
          You can’t! This is just a side project that I used for job hunting for
          my first job🤣. But if you are interested and looking for a full demo,
          you can check it out in my{" "}
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
