"use client";

import { CldImage } from "next-cloudinary";

export interface Skill {
  name: string;
  icon: string;
  bgWhite: boolean;
}

export const SKILLS: Skill[] = [
  {
    name: "React Native",
    icon: "react-native_tou0cy", // Cloudinary public ID
    bgWhite: false,
  },
  {
    name: "Firebase",
    icon: "firebase_ltcsbx",
    bgWhite: false,
  },
  {
    name: "MongoDB",
    icon: "mongo-db_dalas5",
    bgWhite: true,
  },
  {
    name: "Node.js",
    icon: "nodejs_govxhe",
    bgWhite: true,
  },
  {
    name: "AWS Cloud",
    icon: "aws_wcypli",
    bgWhite: true,
  },
  {
    name: "Expo",
    icon: "expo_sm2gfb",
    bgWhite: true,
  },
];

export const SkillItem = ({ name, icon, bgWhite }: Skill) => (
  <div className="mb-8 flex gap-2">
    <div className="relative h-8 w-8 overflow-hidden rounded-full bg-transparent">
      <CldImage
        src={icon}
        alt={name}
        width={32} // 8rem = 32px (assuming 1rem = 4px)
        height={32}
        className={bgWhite ? "rounded-full bg-white p-1" : ""}
        gravity="center"
        quality="auto"
        format="auto"
        crop="scale"
      />
    </div>
    <p>{name}</p>
  </div>
);
