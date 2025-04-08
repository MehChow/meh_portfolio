import Image from "next/image";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import ListItem from "./list-item";

function LifeMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent text-lg text-white">
        Life
      </NavigationMenuTrigger>

      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[650px] lg:h-[650px] lg:grid-cols-[1fr_1fr_1fr] lg:grid-rows-[1fr_1fr_1fr]">
          {/* Gaming */}
          <li className="row-span-2 col-span-1">
            <NavigationMenuLink asChild>
              <a
                className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                href="/"
              >
                <div className="mb-2 mt-4 text-lg font-medium">🎮Gaming</div>
                <p className="text-sm leading-tight text-muted-foreground">
                  A showcase full-stack mobile app, built with React Native and more
                </p>
              </a>
            </NavigationMenuLink>
          </li>

          {/* Anime */}
          <li className="row-span-1 col-span-2">
            <NavigationMenuLink asChild>
              <a
                className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                href="/"
              >
                <div className="mb-2 mt-4 text-lg font-medium">📺Anime</div>
                <p className="text-sm leading-tight text-muted-foreground">
                  229 consecutive days of insane solo project, built block by block manually!
                </p>
              </a>
            </NavigationMenuLink>
          </li>

          {/* Pets */}
          <li className="row-span-1">
            <NavigationMenuLink asChild>
              <a
                className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-0 no-underline outline-none focus:shadow-md  text-center"
                href="/"
              >
                <div className="text-lg font-medium">🐢Pets🐢</div>
                <p className="text-sm leading-tight text-muted-foreground">
                  I got 2 turtles. They are 21 yo already!!
                </p>
              </a>
            </NavigationMenuLink>
          </li>

          {/* Editing */}
          <li className="row-span-2 col-span-1">
            <NavigationMenuLink asChild>
              <a
                className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                href="/"
              >
                <div className="mb-2 mt-4 text-lg font-medium">🎬Video Editing</div>
                <p className="text-sm leading-tight text-muted-foreground">
                  A showcase full-stack mobile app, built with React Native and more
                </p>
              </a>
            </NavigationMenuLink>
          </li>

          {/* Cooking */}
          <li className="row-span-1 col-span-2">
            <NavigationMenuLink asChild>
              <a
                className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                href="/"
              >
                <div className="mb-2 mt-4 text-lg font-medium">🍰Making dessert</div>
                <p className="text-sm leading-tight text-muted-foreground">
                  A showcase full-stack mobile app, built with React Native and more
                </p>
              </a>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export default LifeMenu;
