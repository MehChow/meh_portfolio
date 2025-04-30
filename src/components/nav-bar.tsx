"use client";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import ProjectsMenu from "./nav-bar/projects";
import DevSkillsMenu from "./nav-bar/dev-skills";
import AboutMeMenu from "./nav-bar/about-me";
import LifeMenu from "./nav-bar/life";

function NavBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* First block */}
        <AboutMeMenu />

        {/* Second block */}
        <DevSkillsMenu />

        {/* Third block */}
        <ProjectsMenu />

        {/* Fourthblock */}
        <LifeMenu />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavBar;
