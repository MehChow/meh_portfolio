import "./intro.css";

import StaggerText from "./stagger-text";
import { imageConfigs } from "./image-config";
import AnimatedImageItem from "./animated-image-item";

const IntroSection = () => {
  return (
    <section className="intro large:px-60 medium:h-[100vh] small:px-20 small:mt-50 mobile:mt-20 mt-10 h-auto gap-10 px-10">
      {imageConfigs.map(({ className, src, xPercent, start, end }, index) => (
        <AnimatedImageItem
          key={index}
          className={className}
          src={src}
          xPercent={xPercent}
          start={start}
          end={end}
        />
      ))}
      <div className="stagger-text-container medium:h-60 small:h-50 mobile:h-40 medium:w-[30vw] mobile:w-[40vw] h-30 w-[30vw] -translate-x-1/2 -translate-y-1/2 gap-1 transition-all">
        <StaggerText>Work hard</StaggerText>
        <StaggerText>Play hard</StaggerText>
      </div>
    </section>
  );
};

export default IntroSection;
