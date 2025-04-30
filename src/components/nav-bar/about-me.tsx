"use client";

import { CldImage } from "next-cloudinary";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import ListItem from "./list-item";
import Link from "next/link";

function AboutMeMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent text-lg text-white">
        About me
      </NavigationMenuTrigger>

      <NavigationMenuContent>
        <ul className="grid w-[500px] grid-cols-[.75fr_1fr] gap-3 p-6">
          <li className="row-span-3">
            <NavigationMenuLink asChild>
              <Link
                className="from-muted/50 to-muted flex h-full w-full flex-col justify-start rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
                href="/about-me"
              >
                <div className="relative h-[150px] w-[150px] self-center rounded-full">
                  <CldImage
                    src="about-icon_zbsis6" // Cloudinary public ID
                    alt="Meh Chow"
                    fill
                    className="rounded-full object-cover"
                    style={{ objectPosition: "26%" }}
                    quality="auto"
                    format="auto"
                  />
                </div>
                <div className="mt-4 mb-2 text-lg font-medium">Meh Chow</div>
                <p className="text-muted-foreground text-sm leading-tight">
                  Love gaming, coding, anime, and purple stuffs like HERTA💜
                </p>
              </Link>
            </NavigationMenuLink>
          </li>

          <ListItem href="/docs" title="Mobile / Web developer">
            2 year of full-stack experience. Mainly in Mobile (React Native)
          </ListItem>
          <ListItem href="/docs/installation" title="Gamer & Video Editor">
            FPS and Gacha games addictor. Somtimes I edit for montages and funny
            clips using Premiere
          </ListItem>
          <ListItem href="/docs/primitives/typography" title=" Chef le'Meh?">
            I cook, and I don't mean only the food🤌
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export default AboutMeMenu;
