export interface ImageConfig {
  className: string;
  src: string; // Cloudinary public ID
  xPercent: number;
  start: string;
  end: string;
}

export const imageConfigs: ImageConfig[] = [
  {
    className: "top-left-img",
    src: "hbr_sumomo_ijxa2u",
    xPercent: 150,
    start: "top 90%",
    end: "bottom 70%",
  },
  {
    className: "top-right-img",
    src: "hbr_feiyu_gvwyh9",
    xPercent: -150,
    start: "top 90%",
    end: "bottom 70%",
  },
  {
    className: "bottom-left-img ",
    src: "hbr_ab_fjsyot",
    xPercent: 150,
    start: "start 100%",
    end: "bottom 100%",
  },
  {
    className: "bottom-right-img",
    src: "hbr_four_npybym",
    xPercent: -150,
    start: "start 100%",
    end: "bottom 100%",
  },
];
