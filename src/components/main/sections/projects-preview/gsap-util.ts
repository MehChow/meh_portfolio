import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export const animateDesktopMemeable = (
  imgRef: RefObject<HTMLDivElement | null>,
  yPercent: number,
  rotateZ: number,
  targetXFunc: () => number,
) => {
  if (imgRef.current) {
    gsap.set(imgRef.current, {
      // Initially outside viewport
      xPercent: -200,
      yPercent,
      rotateZ,
    });

    gsap.to(imgRef.current, {
      x: targetXFunc,
      xPercent: 0,
      y: 200,
      yPercent: 0,
      rotateZ: 0,
      duration: 2.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: imgRef.current,
        toggleActions: "restart none none none",
        start: "top 90%",
        end: "bottom 70%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  }
};

export const animateMediumMemeable = (
  imgRef: RefObject<HTMLDivElement | null>,
  init_rotateZ: number,
  end_rotateZ: number,
) => {
  if (imgRef.current) {
    gsap.set(imgRef.current, {
      // Initially outside viewport
      rotateZ: init_rotateZ,
      transformOrigin: "center -100%",
    });

    gsap.to(imgRef.current, {
      rotateZ: end_rotateZ,
      duration: 2.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: imgRef.current,
        toggleActions: "restart none none none",
        start: "45% 35%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  }
};

export const animateDesktopPixelart = (
  imgRef: RefObject<HTMLDivElement | null>,
  yPercent: number,
  rotateZ: number,
) => {
  if (imgRef.current) {
    gsap.set(imgRef.current, {
      // Initially outside viewport
      xPercent: 200,
      yPercent,
      rotateZ,
    });

    gsap.to(imgRef.current, {
      xPercent: 0,
      yPercent: 0,
      rotateZ: 0,
      ease: "power1.out",
      scrollTrigger: {
        trigger: imgRef.current,
        toggleActions: "restart none none none",
        start: "top 90%",
        end: "bottom 70%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  }
};

export const animateMediumPixelart = (
  imgRef: RefObject<HTMLDivElement | null>,
  init_rotateZ: number,
  end_rotateZ: number,
) => {
  if (imgRef.current) {
    gsap.set(imgRef.current, {
      // Initially outside viewport
      rotateZ: init_rotateZ,
      transformOrigin: "center 250%",
    });

    gsap.to(imgRef.current, {
      rotateZ: end_rotateZ,
      duration: 2.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: imgRef.current,
        toggleActions: "restart none none none",
        start: "top 70%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  }
};

export const setupPinning = (
  pinRef: RefObject<HTMLDivElement | null>,
  descriptionRef: RefObject<HTMLDivElement | null>,
  bottomOffset: number,
  minorAdjust: number,
) => {
  if (pinRef.current && descriptionRef.current) {
    ScrollTrigger.create({
      trigger: pinRef.current,
      start: "top top",
      end: () => {
        const description = descriptionRef.current;
        const pin = pinRef.current;
        // Confirm both containers exist
        if (description && pin) {
          const pinnedHeight = pin.offsetHeight;
          // Calculate the pixel value of 1vh
          const oneVhInPixels = pinnedHeight / 100;

          const pinScrollOffset = bottomOffset * oneVhInPixels;

          // 150 for matching the margin-top in memeable-description, 10 for minor alignment
          return `+=${Math.max(description.scrollHeight - pinnedHeight + pinScrollOffset + (150 + minorAdjust), 0)}`;
        }
        return "+=0";
      },
      pin: pinRef.current,
      invalidateOnRefresh: true,
    });
  }
};
