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

function ProjectsMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent text-lg text-white">
        Projects
      </NavigationMenuTrigger>

      <NavigationMenuContent>
        <ul className="grid w-[500px] grid-cols-[1fr_1fr] gap-3 p-6">
          {/* Memeable */}
          <li className="row-span-1 transition-all hover:scale-105">
            <NavigationMenuLink asChild>
              <Link
                className="from-muted/50 to-muted flex h-full w-full flex-col justify-start rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
                href="/projects"
              >
                <div className="relative h-[300px] w-full overflow-hidden rounded-md">
                  <CldImage
                    src="pixelart_day_adwb5h" // Cloudinary public ID
                    width={540}
                    height={1200}
                    alt="Memeable project preview"
                    className="rounded-md"
                    quality="auto"
                    format="auto"
                  />
                </div>
                <div className="mt-4 mb-2 text-lg font-medium">📱Memeable</div>
                <p className="text-muted-foreground text-sm leading-tight">
                  A showcase full-stack mobile app, built with React Native and
                  more
                </p>
              </Link>
            </NavigationMenuLink>
          </li>

          {/* Minecraft pixel art */}
          <li className="row-span-1 transition-all hover:scale-105">
            <NavigationMenuLink asChild>
              <Link
                className="from-muted/50 to-muted flex h-full w-full flex-col justify-start rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
                href="/"
              >
                <div className="relative h-[300px] w-full overflow-hidden rounded-md">
                  <CldImage
                    src="memeable_user_cx7xd2" // Cloudinary public ID
                    width={508}
                    height={904}
                    alt="Minecraft pixel art preview"
                    className="rounded-md"
                    quality="auto"
                    format="auto"
                  />
                </div>
                <div className="mt-4 mb-2 text-lg font-medium">
                  🎨Minecraft art
                </div>
                <p className="text-muted-foreground text-sm leading-tight">
                  229 consecutive days of insane solo project, built block by
                  block manually!
                </p>
              </Link>
            </NavigationMenuLink>
          </li>

          <div className="col-span-2">
            <ListItem
              href="/docs"
              title="✏️ Deep learning research paper collaboration"
            >
              A paper about an application of object detection (YOLO), combined
              with image dehazing (cGAN), co-authored with a professor and a
              colleague, published on Applied Sciences📖
            </ListItem>
          </div>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export default ProjectsMenu;
