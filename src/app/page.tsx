"use client";

import GalleryParallax from "@/components/main/sections/gallery-parallax";
import ImageTitle from "@/components/main/image-title";
import SocialBox from "@/components/main/social-box";
import "./main.css";

import IntroSection from "@/components/main/sections/intro";
import MemeablePreviewSection from "@/components/main/sections/memeable-preview";

export default function HomePage() {
  return (
    <main className="max-w-[2400px] w-full">
      <ImageTitle />
      <IntroSection />
      <MemeablePreviewSection />
      <GalleryParallax />
      <div className="h-[100vh] bg-transparent"></div>
      <SocialBox />
    </main>
  );
}
