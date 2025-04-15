"use client";

import GalleryParallax from "@/components/main/sections/gallery-parallax";
import MainTitle from "@/components/main/main-title";
import SocialBox from "@/components/main/social-box";
import "./home.css";

import IntroSection from "@/components/main/sections/intro";
import Memeable from "@/components/main/sections/memeable";

export default function HomePage() {
  return (
    <main className="max-w-[2400px] w-full">
      <MainTitle />
      <IntroSection />
      <Memeable />
      <GalleryParallax />
      <SocialBox />
    </main>
  );
}
