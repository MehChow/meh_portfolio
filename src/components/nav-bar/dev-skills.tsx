"use client";

import { devSkills } from "@/constant/dev-skills";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import ListItem from "./list-item";
import { CldImage } from "next-cloudinary";

function DevSkillsMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent text-lg text-white">
        Dev skills
      </NavigationMenuTrigger>

      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          {devSkills.map((skill) => (
            <div
              className="relative items-center justify-between"
              key={skill.title}
            >
              <ListItem key={skill.title} title={skill.title} href={skill.href}>
                {skill.description}
              </ListItem>
              <div className="absolute top-1/2 right-1 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full">
                <CldImage
                  src={skill.icon}
                  alt={skill.title}
                  width={32}
                  height={32}
                  className="object-contain"
                  quality="auto"
                  format="auto"
                  crop="fill"
                  gravity="center"
                />
              </div>
            </div>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export default DevSkillsMenu;
