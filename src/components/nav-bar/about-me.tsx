import Image from "next/image";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import ListItem from "./list-item";

function AboutMeMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent text-lg text-white">
        About me
      </NavigationMenuTrigger>

      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <li className="row-span-3">
            <NavigationMenuLink asChild>
              <a
                className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                href="/"
              >
                <div className="w-[150px] h-[150px] rounded-full self-center relative">
                  <Image
                    src="/about-icon.webp"
                    alt=""
                    fill
                    sizes="150px"
                    quality={100}
                    unoptimized
                    className="rounded-full object-cover"
                    style={{ objectPosition: "26%" }}
                  />
                </div>
                <div className="mb-2 mt-4 text-lg font-medium">Meh Chow</div>
                <p className="text-sm leading-tight text-muted-foreground">
                  Love gaming, coding, anime, and purple stuffs like HERTA💜
                </p>
              </a>
            </NavigationMenuLink>
          </li>

          <ListItem href="/docs" title="Mobile / Web developer">
            2 year of full-stack experience. Mainly in Mobile (React Native)
          </ListItem>
          <ListItem href="/docs/installation" title="Gamer & Video Editor">
            FPS and Gacha games addictor. Somtimes I edit for montages and funny clips using
            Premiere
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
