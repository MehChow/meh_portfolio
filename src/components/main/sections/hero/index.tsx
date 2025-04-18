import "./hero.css";
import CubeTextAnimation from "./cube-text";
import HeroFooter from "./hero-footer";

function Hero() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-6rem)] w-full select-none flex-col">
      <h1 className="title">MEHCHOW</h1>

      <div className="flex items-center justify-center gap-2 subtitle-container">
        <span className="text-white text-4xl text-nowrap">I'm a</span>
        <CubeTextAnimation />
      </div>

      <HeroFooter />
    </div>
  );
}

export default Hero;
