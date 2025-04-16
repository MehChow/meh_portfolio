import Image from "next/image";

export interface Skill {
  name: string;
  icon: string;
  bgWhite: boolean;
}

export const SKILLS: Skill[] = [
  { name: "React Native", icon: "/dev-skills-icon/react-native.png", bgWhite: false },
  { name: "Firebase", icon: "/dev-skills-icon/firebase.png", bgWhite: false },
  { name: "MongoDB", icon: "/dev-skills-icon/mongo-db.png", bgWhite: true },
  { name: "Node.js", icon: "/dev-skills-icon/nodejs.png", bgWhite: true },
  { name: "AWS Cloud", icon: "/dev-skills-icon/aws.png", bgWhite: true },
  { name: "Expo", icon: "/dev-skills-icon/expo.png", bgWhite: true },
];

export const SkillItem = ({ name, icon, bgWhite }: Skill) => (
  <div className="flex gap-2">
    <div className="w-8 h-8 flex justify-center items-center relative rounded-full">
      <Image
        src={icon}
        alt={name}
        fill
        className={bgWhite ? "bg-white rounded-full p-1 object-contain" : undefined}
      />
    </div>
    <p>{name}</p>
  </div>
);
