"use client";

import { CldImage } from "next-cloudinary";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import ReactPlayer from "react-player/youtube";
import Link from "next/link";

function LifeMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent text-lg text-white">
        Life
      </NavigationMenuTrigger>

      <NavigationMenuContent>
        <ul className="grid h-[650px] w-[650px] grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr] gap-3 p-6">
          {/* Gaming */}
          <li className="col-span-1 row-span-2 transition-all hover:scale-105">
            <NavigationMenuLink asChild>
              <Link
                className="from-muted/50 to-muted flex h-full w-full flex-col justify-start rounded-md bg-gradient-to-b no-underline outline-none select-none focus:shadow-md"
                href="/life"
              >
                <div className="text-lg font-medium">🎮Gaming</div>
                <p className="text-muted-foreground text-sm leading-tight">
                  Star rail, ZZZ, NIKKE, Valorant, ToF, Genshin...
                </p>
                <div className="mt-auto grid-rows-3">
                  <div className="relative row-span-1 h-[100px] w-full">
                    <CldImage
                      src="zzz1_uh6eq8"
                      alt="ZZZ gaming screenshot"
                      width={3840}
                      height={2160}
                      className="h-full w-full rounded-t-md"
                      quality="auto"
                      format="auto"
                    />
                  </div>
                  <div className="relative row-span-1 h-[100px] w-full">
                    <CldImage
                      src="nikke_bp96yn"
                      alt="NIKKE gaming screenshot"
                      width={2600}
                      height={1463}
                      className="h-full w-full"
                      quality="auto"
                      format="auto"
                    />
                  </div>
                  <div className="relative row-span-1 h-[100px] w-full">
                    <CldImage
                      src="tof1_rfzvhh"
                      alt="Tower of Fantasy gaming screenshot"
                      width={3840}
                      height={2160}
                      className="h-full w-full rounded-b-md"
                      quality="auto"
                      format="auto"
                    />
                  </div>
                </div>
              </Link>
            </NavigationMenuLink>
          </li>

          {/* Anime */}
          <li className="col-span-2 row-span-1 transition-all hover:scale-105">
            <NavigationMenuLink asChild>
              <Link
                className="relative flex h-full w-full flex-col justify-start overflow-hidden rounded-md text-right no-underline transition-all outline-none select-none hover:opacity-95 focus:shadow-md"
                href="/"
              >
                <CldImage
                  src="lycoris_aobjok"
                  alt="Lycoris Recoil anime"
                  width={1800}
                  height={1012}
                  className="absolute inset-0"
                  quality="auto"
                  format="auto"
                />
                <div className="z-10 text-lg font-medium text-white">
                  📺Anime
                </div>
              </Link>
            </NavigationMenuLink>
          </li>

          {/* Pets */}
          <li className="row-span-1 transition-all hover:scale-105">
            <NavigationMenuLink asChild>
              <Link
                className="from-muted/50 to-muted flex h-full w-full flex-col justify-start rounded-md bg-gradient-to-b p-0 text-center no-underline outline-none select-none focus:shadow-md"
                href="/"
              >
                <div className="text-lg font-medium">🐢Pets🐢</div>
                <p className="text-muted-foreground text-sm leading-tight">
                  I got 2 turtles. They are 21 yo already!!
                </p>
                <div className="flex-1">
                  <CldImage
                    src="turtle_h7ykke"
                    alt="Turtles"
                    width={2016}
                    height={954}
                    className="h-full w-full rounded-md"
                    quality="auto"
                    format="auto"
                  />
                </div>
              </Link>
            </NavigationMenuLink>
          </li>

          {/* Editing */}
          <li className="col-span-1 row-span-2 transition-all hover:scale-105">
            <NavigationMenuLink asChild>
              <Link
                className="from-muted/50 to-muted flex h-full w-full flex-col justify-start rounded-md bg-gradient-to-b text-right no-underline outline-none select-none focus:shadow-md"
                href="/"
              >
                <div className="text-lg font-medium">🎬Video Editing</div>
                <p className="text-muted-foreground text-sm leading-tight">
                  I make gaming videos, mainly Valorant and Heaven Burns Red.
                </p>

                <div className="relative m-2 aspect-[9/16] bg-amber-100">
                  <ReactPlayer
                    url="https://www.youtube.com/shorts/zBa92DGWn8M"
                    width="100%"
                    height="100%"
                    muted
                    playing
                    loop
                  />
                </div>
              </Link>
            </NavigationMenuLink>
          </li>

          {/* Cooking */}
          <li className="col-span-2 row-span-1 transition-all hover:scale-105">
            <NavigationMenuLink asChild>
              <Link
                className="from-muted/50 to-muted flex h-full w-full flex-col justify-start rounded-md bg-gradient-to-b px-4 no-underline outline-none select-none focus:shadow-md"
                href="/"
              >
                <div className="text-lg font-medium">🍰Making Food</div>
                <p className="text-muted-foreground text-sm leading-tight">
                  Mainly desserts, but sometimes drinks and other food as well
                  like lasagna
                </p>

                <div className="flex grid-cols-2 gap-2">
                  <div className="relative col-span-1 w-1/2">
                    <CldImage
                      src="heart-too-soft_c0u63i"
                      alt="Heart Too Soft dessert"
                      width={1776}
                      height={1080}
                      className="h-full w-full rounded-md"
                      quality="auto"
                      format="auto"
                    />
                  </div>
                  <div className="relative col-span-1 w-1/2">
                    <CldImage
                      src="lasagna_s8n3zb"
                      alt="Lasagna dish"
                      width={2016}
                      height={954}
                      className="h-full w-full rounded-md"
                      style={{ objectPosition: "25%" }}
                      quality="auto"
                      format="auto"
                    />
                  </div>
                </div>
              </Link>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export default LifeMenu;
