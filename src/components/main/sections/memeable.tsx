import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import "./memeable.css";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  icon: string;
  bgWhite: boolean;
}

const SKILLS: Skill[] = [
  { name: "React Native", icon: "/dev-skills-icon/react-native.png", bgWhite: false },
  { name: "Firebase", icon: "/dev-skills-icon/firebase.png", bgWhite: false },
  { name: "MongoDB", icon: "/dev-skills-icon/mongo-db.png", bgWhite: true },
  { name: "Node.js", icon: "/dev-skills-icon/nodejs.png", bgWhite: true },
  { name: "AWS Cloud", icon: "/dev-skills-icon/aws.png", bgWhite: true },
  { name: "Expo", icon: "/dev-skills-icon/expo.png", bgWhite: true },
];

const SkillItem = ({ name, icon, bgWhite }: Skill) => (
  <div className="flex gap-2">
    <div className="w-8 h-8 flex justify-center items-center relative rounded-full">
      <Image
        src={icon}
        alt={name}
        fill
        className={bgWhite ? "bg-white rounded-full p-1 object-contain" : undefined}
      />
    </div>
    <p>{name}</p>
  </div>
);

function Memeable() {
  useGSAP(() => {
    // Animation for home-img
    gsap.to(".home-img", {
      xPercent: 350,
      yPercent: 45,
      rotateZ: 0,
      duration: 2.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".home-img",
        toggleActions: "restart none none none",
        start: "top 90%",
        end: "bottom 70%",
        scrub: 1,
      },
    });

    // Animation for user-img
    gsap.to(".user-img", {
      xPercent: 350,
      yPercent: 40,
      rotateZ: 0,
      duration: 2.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".user-img",
        toggleActions: "restart none none none",
        start: "top 90%",
        end: "bottom 70%",
        scrub: 1,
      },
    });

    // Pinning the first images-container
    ScrollTrigger.create({
      trigger: ".pin-container",
      start: "top top",
      end: () => {
        const description = document.querySelector(".memeable-description");
        if (description instanceof HTMLElement) {
          const imagesContainer = document.querySelector(".images-container");
          // Use window.innerHeight as fallback if not HTMLElement
          const pinnedHeight =
            imagesContainer instanceof HTMLElement
              ? imagesContainer.offsetHeight
              : window.innerHeight;
          return `+=${Math.max(description.scrollHeight - pinnedHeight * 0.8, 0)}`;
        }
        return "+=0";
      },
      pin: ".images-container",
      pinSpacing: true,
    });

    // Animation for second-home-img
    gsap.to(".second-home-img", {
      xPercent: -350,
      yPercent: 45,
      rotateZ: 0,
      duration: 2.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".second-home-img",
        toggleActions: "restart none none none",
        start: "top 90%",
        end: "bottom 70%",
        scrub: 1,
      },
    });

    // Animation for second-user-img
    gsap.to(".second-user-img", {
      xPercent: -350,
      yPercent: 40,
      rotateZ: 0,
      duration: 2.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".second-user-img",
        toggleActions: "restart none none none",
        start: "top 90%",
        end: "bottom 70%",
        scrub: 1,
      },
    });

    // Pinning the second images-container
    ScrollTrigger.create({
      trigger: ".second-content-wrapper",
      start: "top top",
      end: () => {
        const secondDescription = document.querySelector(".second-description");
        if (secondDescription instanceof HTMLElement) {
          const secondImagesContainer = document.querySelector(".second-images-container");
          // Use window.innerHeight as fallback if not HTMLElement
          const pinnedHeight =
            secondImagesContainer instanceof HTMLElement
              ? secondImagesContainer.offsetHeight
              : window.innerHeight;
          return `+=${Math.max(secondDescription.scrollHeight - pinnedHeight * 0.8, 0)}`;
        }
        return "+=0";
      },
      pin: ".second-images-container",
      pinSpacing: true,
    });
  }, []);

  return (
    <main className="max-w-[2400px] w-full relative">
      <div className="pin-container">
        <div className="content-wrapper">
          <div className="images-container">
            <div className="home-img">
              <Image src="/projects/memeable_home.png" alt="" fill className="rounded-md" />
            </div>
            <div className="user-img">
              <Image src="/projects/memeable_user.png" alt="" fill className="rounded-md" />
            </div>
          </div>
          <div className="memeable-description text-justify">
            <h1 className="description-title">Memeable</h1>
            <h2 className="description-subtitle">Full-stack side project📱</h2>
            <p>
              A social media platform where users can share images and interacts with other users.
            </p>
            <p>
              Common features like posting, likes, comments, follows, edit profiles, and like
              comments are supported.
            </p>
            <p>
              Mostly importantly, there is a unique music sharing feature where users can set a
              background music in their profile✨
            </p>

            <h3 className="description-section-title">Tech Stack</h3>
            <div className="grid grid-cols-2 grid-rows-3">
              {SKILLS.map((skill, index) => (
                <SkillItem key={index} {...skill} />
              ))}
            </div>

            <h3 className="description-section-title">Download</h3>
            <p>
              You can't! This is just a side project that I used for job hunting for my first job🤣.
              But if you are interested and looking for a full demo, you can check it out in my{" "}
              <Link href="/projects" className="underline text-blue-300">
                Projects
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="second-content-wrapper">
          <div className="left-description-container">
            <div className="second-description text-justify">
              <h1>Memeable Features</h1>
              <h2>Enhanced Interactions</h2>
              <p>
                Explore advanced features like real-time chat, image editing, and personalized
                feeds.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                More content to ensure scrolling. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Additional details about features. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="second-images-container">
            <div className="second-home-img">
              <Image
                src="/projects/memeable_home.png" // Adjust path
                alt=""
                fill
                className="rounded-md"
              />
            </div>
            <div className="second-user-img">
              <Image
                src="/projects/memeable_user.png" // Adjust path
                alt=""
                fill
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Memeable;
