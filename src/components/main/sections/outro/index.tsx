import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import "./outro.css";
import Image from "next/image";
import Link from "next/link";
import { animateOutroSection } from "./gsap.util";

function OutroSection() {
  const pathname = usePathname();

  useGSAP(() => {
    animateOutroSection(pathname);
  }, [pathname]);

  return (
    <section className="flex h-[100vh] flex-col items-center justify-center">
      <div className="congrats-container">
        <div className="congrats-text-wrapper">
          <span className="text-[clamp(2.5rem,5vw,8rem)] text-white">
            CONGRATULATIONS!!
          </span>
          <span className="text-[clamp(1rem,2vw,2rem)] text-white">
            You have been blessed by DORO
          </span>
        </div>
      </div>
      <div className="outro-doro relative h-92 w-92">
        <Link
          href="/dev-skills"
          className="outro-doro-text transition-all duration-300 hover:scale-105"
        >
          GO!!!!!
        </Link>
        <Image
          src="/life/game/doro1.png"
          alt=""
          fill
          className="object-contain"
          sizes="100%"
        />
      </div>
      ss
      <div className="explore-more-container text-[clamp(2rem,3vw,3rem)]">
        <span>
          Now go{" "}
          <Link
            href="/dev-skills"
            className="text-purple-300 transition-all duration-300 hover:opacity-80"
          >
            explore more
          </Link>
        </span>
      </div>
    </section>
  );
}

export default OutroSection;
