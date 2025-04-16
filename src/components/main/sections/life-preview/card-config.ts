export const cards = [
  {
    src: "/life/anime/alya2.jpg",
    alt: "",
    label: "ANIME",
    objectPosition: "object-[58%]",
  },
  { src: "/life/edit/feiyu1.webp", alt: "", label: "EDITING", objectPosition: "object-[40%]" },
  {
    src: "/life/anime/kana.jpg",
    alt: "",
    label: "GAMING",
    objectPosition: "object-[25%]",
  },
  { src: "/life/anime/anna.png", alt: "", label: "COOKING", objectPosition: "object-[45%]" },
  { src: "/life/anime/cat.png", alt: "", label: "PETS", objectPosition: "object-[55%]" },
];

export interface CardProps {
  src: string;
  alt: string;
  label: string;
  objectPosition: string;
}
