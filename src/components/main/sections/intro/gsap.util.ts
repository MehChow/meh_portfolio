import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageConfig } from "./image-config";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const animateImage = ({
  className,
  xPercent,
  start,
  end,
}: ImageConfig) => {
  gsap.to(`.${className}`, {
    xPercent,
    duration: 1.75,
    scrollTrigger: {
      trigger: `.${className}`,
      toggleActions: "restart none none none",
      start,
      end,
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });
};
