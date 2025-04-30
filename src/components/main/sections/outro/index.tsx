import { AnimatedCongrats } from "./animated-congrats";
import { AnimatedDoro } from "./animated-doro";
import { AnimatedExploreMore } from "./animated-explore-more";
import "./outro.css";

export default function OutroSection() {
  return (
    <section className="small:h-[100vh] flex h-[75vh] flex-col items-center justify-center">
      <AnimatedCongrats />
      <AnimatedDoro />
      <AnimatedExploreMore />
    </section>
  );
}
