export const cards = [
  {
    src: "alya2_vosg11",
    alt: "",
    label: "ANIME",
    objectPosition: "object-[58%]",
    containerClass: "col-span-1 row-span-1 aspect-square",
  },
  {
    src: "feiyu1_retzbd",
    alt: "",
    label: "EDITING",
    objectPosition: "object-[40%]",
    containerClass: "col-span-1 row-span-1 aspect-square",
  },
  {
    src: "kana_hbrfmi",
    alt: "",
    label: "GAMING",
    objectPosition: "object-[25%]",
    containerClass: "col-span-1 row-span-1 aspect-square",
  },
  {
    src: "anna_biom0f",
    alt: "",
    label: "COOKING",
    objectPosition: "object-[45%]",
    containerClass: "col-span-1 row-span-1 aspect-square",
  },
  {
    src: "cat_pyb40r",
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
