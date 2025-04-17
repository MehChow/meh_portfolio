"use client";

import Hero from "@/components/main/sections/hero";
import "./home.css";

import IntroSection from "@/components/main/sections/intro";
import ProjectsPreview from "@/components/main/sections/projects-preview";
import LifePreview from "@/components/main/sections/life-preview";
import OutroSection from "@/components/main/sections/outro";

export default function HomePage() {
  return (
    <main className="max-w-[2400px] w-full">
      <Hero />
      <IntroSection />
      <ProjectsPreview />
      <LifePreview />
      <OutroSection />
    </main>
  );
}
