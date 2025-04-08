import { devSkills } from "@/constant/dev-skills";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import ListItem from "./list-item";
import Image from "next/image";

export function DevSkillsMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent text-lg text-white">
        Dev skills
      </NavigationMenuTrigger>

      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
          {devSkills.map((skill) => (
            <div className="justify-between items-center relative">
              <ListItem key={skill.title} title={skill.title} href={skill.href}>
                {skill.description}
              </ListItem>
              <div className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex justify-center items-center">
                <Image src={skill.icon} alt="" width={32} height={32} className="object-contain" />
              </div>
            </div>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export default DevSkillsMenu;
