import Image from "next/image";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import ReactPlayer from "react-player/youtube";

function LifeMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent text-lg text-white">
        Life
      </NavigationMenuTrigger>

      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[650px] lg:h-[650px] lg:grid-cols-[1fr_1fr_1fr] lg:grid-rows-[1fr_1fr_1fr]">
          {/* Gaming */}
          <li className="row-span-2 col-span-1 hover:scale-105 transition-all">
            <NavigationMenuLink asChild>
              <a
                className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted no-underline outline-none focus:shadow-md"
                href="/"
              >
                <div className="text-lg font-medium">🎮Gaming</div>
                <p className="text-sm leading-tight text-muted-foreground">
                  Star rail, ZZZ, NIKKE, Valorant, ToF, Genshin...
                </p>
                <div className="grid-rows-3 mt-auto">
                  <div className="row-span-1 relative w-full h-[100px]">
                    <Image
                      src="/life/game/zzz1.png"
                      alt="Apex Legends"
                      width={3840}
                      height={2160}
                      className="rounded-t-md"
                    />
                  </div>
                  <div className="row-span-1 relative w-full h-[100px]">
                    <Image
                      src="/life/game/nikke.png"
                      alt="Apex Legends"
                      width={2600}
                      height={1463}
                    />
                  </div>
                  <div className="row-span-1 relative w-full h-[100px]">
                    <Image
                      src="/life/game/tof1.jpg"
                      alt="Apex Legends"
                      width={3840}
                      height={2160}
                      className="rounded-b-md"
                    />
                  </div>
                </div>
              </a>
            </NavigationMenuLink>
          </li>

          {/* Anime */}
          <li className="row-span-1 col-span-2 hover:scale-105 transition-all">
            <NavigationMenuLink asChild>
              <a
                className="flex h-full w-full select-none flex-col justify-start text-right rounded-md no-underline outline-none focus:shadow-md relative overflow-hidden hover:opacity-95 transition-all"
                href="/"
              >
                <Image
                  src="/life/lycoris.jpg"
                  alt="Lycoris"
                  width={1800}
                  height={1012}
                  className="absolute inset-0"
                />
                <div className="text-lg font-medium text-white z-10">📺Anime</div>
              </a>
            </NavigationMenuLink>
          </li>

          {/* Pets */}
          <li className="row-span-1 hover:scale-105 transition-all">
            <NavigationMenuLink asChild>
              <a
                className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-0 no-underline outline-none focus:shadow-md text-center"
                href="/"
              >
                <div className="text-lg font-medium">🐢Pets🐢</div>
                <p className="text-sm leading-tight text-muted-foreground">
                  I got 2 turtles. They are 21 yo already!!
                </p>
                <div className="flex-1">
                  <Image
                    src="/life/turtle.jpg"
                    alt="Turtle"
                    width={2016}
                    height={954}
                    className="rounded-md w-full h-full"
                  />
                </div>
              </a>
            </NavigationMenuLink>
          </li>

          {/* Editing */}
          <li className="row-span-2 col-span-1 hover:scale-105 transition-all">
            <NavigationMenuLink asChild>
              <a
                className="flex h-full w-full select-none flex-col justify-start text-right rounded-md bg-gradient-to-b from-muted/50 to-muted no-underline outline-none focus:shadow-md"
                href="/"
              >
                <div className="text-lg font-medium">🎬Video Editing</div>
                <p className="text-sm leading-tight text-muted-foreground">
                  I make gaming videos, mainly Valorant and Heaven Burns Red.
                </p>

                <div className="bg-amber-100 relative aspect-[9/16] m-2">
                  <ReactPlayer
                    url="https://www.youtube.com/shorts/zBa92DGWn8M"
                    width="100%"
                    height="100%"
                    muted
                    playing
                    loop
                  />
                </div>
              </a>
            </NavigationMenuLink>
          </li>

          {/* Cooking */}
          <li className="row-span-1 col-span-2 hover:scale-105 transition-all">
            <NavigationMenuLink asChild>
              <a
                className="flex h-full w-full select-none flex-col px-4 justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted no-underline outline-none focus:shadow-md"
                href="/"
              >
                <div className="text-lg font-medium">🍰Making Food</div>
                <p className="text-sm leading-tight text-muted-foreground">
                  Mainly desserts, but sometimes drinks and other food as well like lasagna
                </p>

                <div className="grid-cols-2 flex gap-2">
                  <div className="col-span-1 relative w-1/2">
                    <Image
                      src="/life/food/heart-too-soft.jpg"
                      alt="Heart Too Soft"
                      width={1776}
                      height={1080}
                      className="object-cover rounded-md w-full h-full"
                    />
                  </div>
                  <div className="col-span-1 relative w-1/2">
                    <Image
                      src="/life/food/lasagna.jpg"
                      alt="Lasagna"
                      width={2016}
                      height={954}
                      className="object-cover rounded-md w-full h-full"
                      style={{ objectPosition: "25%" }}
                    />
                  </div>
                </div>
              </a>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export default LifeMenu;
