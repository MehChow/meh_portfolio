import { AnimatedTitle } from "./animated-title";
import { AnimatedCardContainer } from "./animated-card-container";

export default function LifePreview() {
  return (
    <section className="medium:h-auto flex flex-col items-center justify-start gap-8 p-8 pt-20">
      <AnimatedTitle>L I F E</AnimatedTitle>
      <AnimatedCardContainer />
    </section>
  );
}
