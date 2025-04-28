export const cards = [
  {
    src: "/life/anime/alya2.jpg",
    alt: "",
    label: "ANIME",
    objectPosition: "object-[58%]",
    containerClass: "col-span-1 row-span-1 aspect-square",
  },
  {
    src: "/life/edit/feiyu1.webp",
    alt: "",
    label: "EDITING",
    objectPosition: "object-[40%]",
    containerClass: "col-span-1 row-span-1 aspect-square",
  },
  {
    src: "/life/anime/kana.jpg",
    alt: "",
    label: "GAMING",
    objectPosition: "object-[25%]",
    containerClass: "col-span-1 row-span-1 aspect-square",
  },
  {
    src: "/life/anime/anna.png",
    alt: "",
    label: "COOKING",
    objectPosition: "object-[45%]",
    containerClass: "col-span-1 row-span-1 aspect-square",
  },
  {
    src: "/life/anime/cat.png",
    alt: "",
    label: "PETS",
    objectPosition: "object-[55%]",
    containerClass: "col-span-2 row-span-1 aspect-auto",
  },
];

export interface CardProps {
  src: string;
  alt: string;
  label: string;
  objectPosition: string;
  containerClass: string;
}
