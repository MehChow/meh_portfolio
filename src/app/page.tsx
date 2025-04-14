"use client";

import GalleryParallax from "@/components/main/sections/gallery-parallax";
import MainTitle from "@/components/main/main-title";
import SocialBox from "@/components/main/social-box";
import "./home.css";

import IntroSection from "@/components/main/sections/intro";

export default function HomePage() {
  return (
    <main className="max-w-[2400px] w-full">
      <MainTitle />
      <IntroSection />
      <GalleryParallax />

      <div className="h-[100vh] bg-transparent"></div>
      <SocialBox />
    </main>
  );
}
