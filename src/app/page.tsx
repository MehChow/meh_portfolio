"use client";

import GalleryParallax from "@/components/main/gallery-parallax";
import ImageTitle from "@/components/main/image-title";
import SocialBox from "@/components/main/social-box";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./main.css";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  useGSAP(() => {
    gsap.to(".top-left-img", {
      xPercent: 150,
      duration: 1.75,
      scrollTrigger: {
        trigger: ".top-left-img",
        toggleActions: "restart none none none",
        start: "top 90%",
        end: "bottom 70%",
        scrub: 1,
        markers: true,
      },
    });

    gsap.to(".top-right-img", {
      xPercent: -150,
      duration: 1.75,
      scrollTrigger: {
        trigger: ".top-right-img",
        toggleActions: "restart none none none",
        start: "top 90%",
        end: "bottom 70%",
        scrub: 1,
        markers: true,
      },
    });

    gsap.to(".bottom-left-img", {
      xPercent: 150,
      duration: 1.75,
      scrollTrigger: {
        trigger: ".bottom-left-img",
        toggleActions: "restart none none none",
        start: "start 100%",
        end: "bottom 100%",
        scrub: 1,
        markers: true,
      },
    });

    gsap.to(".bottom-right-img", {
      xPercent: -150,
      duration: 1.75,
      scrollTrigger: {
        trigger: ".bottom-right-img",
        toggleActions: "restart none none none",
        start: "start 100%",
        end: "bottom 100%",
        scrub: 1,
        markers: true,
      },
    });
  }, []);

  return (
    <main className="max-w-[2400px] w-full">
      <ImageTitle />
      <div className="intro grid grid-cols-2 grid-rows-2 px-60 py-20 gap-y-20 gap-x-10 relative">
        <div className="grid-cols-1 grid-rows-1 top-left-img">
          <Image
            src="/life/game/hbr_sumomo.webp"
            fill
            alt=""
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="grid-cols-1 grid-rows-1 top-right-img">
          <Image src="/life/game/hbr_four.webp" fill alt="" className="rounded-2xl object-cover" />
        </div>
        <div className="grid-cols-1 grid-rows-1 bottom-left-img">
          <Image src="/life/game/hbr_ab.webp" fill alt="" className="rounded-2xl object-cover" />
        </div>
        <div className="grid-cols-1 grid-rows-1 bottom-right-img">
          <Image src="/life/game/hbr_feiyu.webp" fill alt="" className="rounded-2xl object-cover" />
        </div>

        <div className="absolute bg-black w-[30vw] h-60 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"></div>
      </div>
      <GalleryParallax />
      <div className="h-[100vh] bg-transparent"></div>
      <SocialBox />
    </main>
  );
}
