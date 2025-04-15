import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import "./memeable.css";

gsap.registerPlugin(ScrollTrigger);

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
          return `+=${description.scrollHeight - 600}`;
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
          return `+=${secondDescription.scrollHeight - 600}`;
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
            <h1>Memeable</h1>
            <h2>Full-stack side project📱</h2>
            <p>
              A social media platform where users can share images, interact with others through
              comments, follows, and likes.
            </p>
            <p>
              More content to ensure scrolling. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <p>
              Additional content to extend the description. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
