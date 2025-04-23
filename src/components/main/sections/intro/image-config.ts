export interface ImageConfig {
  className: string;
  src: string;
  xPercent: number;
  start: string;
  end: string;
}

export const imageConfigs: ImageConfig[] = [
  {
    className: "top-left-img",
    src: "/life/game/hbr_sumomo.webp",
    xPercent: 150,
    start: "top 90%",
    end: "bottom 70%",
  },
  {
    className: "top-right-img",
    src: "/life/game/hbr_feiyu.webp",
    xPercent: -150,
    start: "top 90%",
    end: "bottom 70%",
  },
  {
    className: "bottom-left-img ",
    src: "/life/game/hbr_ab.webp",
    xPercent: 150,
    start: "start 100%",
    end: "bottom 100%",
  },
  {
    className: "bottom-right-img",
    src: "/life/game/hbr_four.webp",
    xPercent: -150,
    start: "start 100%",
    end: "bottom 100%",
  },
];
