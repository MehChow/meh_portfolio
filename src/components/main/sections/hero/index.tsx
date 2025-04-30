import "./hero.css";
import CubeTextAnimation from "./cube-text";
import HeroFooter from "./hero-footer";

function Hero() {
  return (
    <div className="flex h-[calc(100vh-6rem)] w-full flex-col items-center justify-center select-none">
      <h1 className="title">MEHCHOW</h1>

      <div className="subtitle-container flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-2">
        <span className="text-3xl text-nowrap text-white sm:text-4xl">
          I'm a
        </span>
        <CubeTextAnimation />
      </div>

      <HeroFooter />
    </div>
  );
}

export default Hero;
