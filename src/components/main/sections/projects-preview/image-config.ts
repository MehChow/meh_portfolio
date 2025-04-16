export interface ImageConfig {
  className: string;
  src: string;
  xPercent: number;
  yPercent: number;
  start: string;
  end: string;
}

export const memeableImages: ImageConfig[] = [
  {
    className: "home-img",
    src: "/projects/memeable_home.png",
    xPercent: 350,
    yPercent: 45,
    start: "top 90%",
    end: "bottom 70%",
  },
  {
    className: "user-img",
    src: "/projects/memeable_user.png",
    xPercent: 350,
    yPercent: 40,
    start: "top 90%",
    end: "bottom 70%",
  },
];

export const minecraftImages: ImageConfig[] = [
  {
    className: "second-home-img",
    src: "/projects/suisei_pixelart.png",
    xPercent: -350,
    yPercent: 25,
    start: "top 90%",
    end: "bottom 70%",
  },
  {
    className: "second-user-img",
    src: "/projects/double_kronii.png",
    xPercent: -350,
    yPercent: 150,
    start: "top 90%",
    end: "bottom 70%",
  },
];
