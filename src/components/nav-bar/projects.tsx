import Image from "next/image";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import ListItem from "./list-item";

function ProjectsMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent text-lg text-white">
        Projects
      </NavigationMenuTrigger>

      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
          {/* Memeable */}
          <li className="row-span-1 hover:scale-105 transition-all">
            <NavigationMenuLink asChild>
              <a
                className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                href="/"
              >
                <div className="w-full h-[300px] relative overflow-hidden rounded-md">
                  <Image
                    src="/preview/memeable.png"
                    width={540}
                    height={1200}
                    alt="memeable"
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="mb-2 mt-4 text-lg font-medium">📱Memeable</div>
                <p className="text-sm leading-tight text-muted-foreground">
                  A showcase full-stack mobile app, built with React Native and more
                </p>
              </a>
            </NavigationMenuLink>
          </li>

          {/* Minecraft pixel art */}
          <li className="row-span-1 hover:scale-105 transition-all">
            <NavigationMenuLink asChild>
              <a
                className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                href="/"
              >
                <div className="relative w-full h-[300px] overflow-hidden rounded-md">
                  <Image
                    src="/preview/pixelart_day.png"
                    width={508}
                    height={904}
                    alt="minecraft"
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="mb-2 mt-4 text-lg font-medium">🎨Minecraft art</div>
                <p className="text-sm leading-tight text-muted-foreground">
                  229 consecutive days of insane solo project, built block by block manually!
                </p>
              </a>
            </NavigationMenuLink>
          </li>

          <div className="col-span-2">
            <ListItem href="/docs" title="✏️ Deep learning research paper collaboration">
              A paper about an application of object detection (YOLO), combined with image dehazing
              (cGAN), co-authored with a professor and a colleague, published on Applied Sciences📖
            </ListItem>
          </div>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export default ProjectsMenu;
