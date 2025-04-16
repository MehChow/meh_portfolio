export const cards = [
  { src: "/life/game/apex.jpg", alt: "", label: "ANIME", objectPosition: "object-center" },
  { src: "/life/game/valorant.jpeg", alt: "", label: "EDITING", objectPosition: "object-[75%]" },
  { src: "/life/game/nikke.png", alt: "", label: "GAMING", objectPosition: "object-[85%]" },
  { src: "/life/game/tof1.jpg", alt: "", label: "COOKING", objectPosition: "object-[25%]" },
  { src: "/life/game/zzz2.png", alt: "", label: "PETS", objectPosition: "object-[80%]" },
];

export interface CardProps {
  src: string;
  alt: string;
  label: string;
  objectPosition: string;
}
