import Hero from "@/components/main/sections/hero";

import IntroSection from "@/components/main/sections/intro";
import ProjectsPreview from "@/components/main/sections/projects-preview";
import LifePreview from "@/components/main/sections/life-preview";
import OutroSection from "@/components/main/sections/outro";

export default function HomePage() {
  return (
    <main className="w-full max-w-[2400px]">
      <Hero />
      <IntroSection />
      <ProjectsPreview />
      <LifePreview />
      <OutroSection />
    </main>
  );
}
