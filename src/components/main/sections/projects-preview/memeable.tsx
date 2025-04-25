import Image from "next/image";
import Link from "next/link";
import { SkillItem, SKILLS } from "./skills";
import { RefObject } from "react";
import { ImageConfig } from "./image-config";

interface MemeableSectionProps {
  images: ImageConfig[];
  imagesContainerRef: RefObject<HTMLDivElement | null>;
  homeImgRef: RefObject<HTMLDivElement | null>;
  userImgRef: RefObject<HTMLDivElement | null>;
  descriptionRef: RefObject<HTMLDivElement | null>;
}

export const MemeableSection = ({
  images,
  imagesContainerRef,
  homeImgRef,
  userImgRef,
  descriptionRef,
}: MemeableSectionProps) => (
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
          <Image
            src={src}
            alt=""
            fill
            className="medium:rounded-md rounded-none"
            sizes="100%"
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
          Common features like posting, likes, comments, follows, edit profiles,
          and like comments are supported.
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
