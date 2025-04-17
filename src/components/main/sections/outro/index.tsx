import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import "./outro.css";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function OutroSection() {
  const pathname = usePathname();

  useGSAP(() => {
    // First animation: Rotate, scale, and fade in when the outro section enters the viewport
    gsap.to(".outro-doro", {
      opacity: 1,
      scale: 1,
      rotate: 3600,
      scrollTrigger: {
        trigger: ".outro-doro",
        start: "top 80%",
        end: "top 60%",
        toggleActions: "restart none none none",
        scrub: 1,
      },
    });

    gsap.to(".congrats-text-wrapper", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".congrats-container",
        start: "top 50%",
        end: "top 40%",
        toggleActions: "restart none none none",
        scrub: 1,
      },
    });

    gsap.to(".explore-more-container", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".congrats-container",
        start: "top 30%",
        end: "top 40%",
        toggleActions: "restart none none none",
        scrub: 1,
      },
    });

    if (pathname === "/") {
      gsap.to(".outro-doro", {
        y: window.innerHeight * 1.1,
        x: window.innerWidth * 0.12,
        ease: "power4.out",
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: "footer",
          start: "top top",
          end: "top top",
          toggleActions: "restart none reverse none",
        },
      });

      gsap.to(".outro-doro-text", {
        opacity: 1,
        scrollTrigger: {
          trigger: "footer",
          start: "top top",
          end: "top top",
          toggleActions: "restart none none none",
          scrub: 1,
        },
      });
    }
  }, [pathname]);

  return (
    <section className="h-[100vh] flex flex-col justify-center items-center">
      <div className="congrats-container">
        <div className="congrats-text-wrapper">
          <span className="text-8xl text-white">CONGRATULATIONS!!</span>
          <span className="text-4xl text-white">You have been blessed by DORO</span>
        </div>
      </div>

      <div className="w-92 h-92 relative outro-doro">
        <Link
          href="/dev-skills"
          className="outro-doro-text hover:scale-105 transition-all duration-300"
        >
          GO!!!!!
        </Link>
        <Image src="/life/game/doro1.png" alt="" fill className="object-contain" />
      </div>

      <div className="explore-more-container">
        <span>
          Now go{" "}
          <Link
            href="/dev-skills"
            className="text-purple-300 hover:opacity-80 transition-all duration-300"
          >
            explore more
          </Link>
        </span>
      </div>
    </section>
  );
}

export default OutroSection;
