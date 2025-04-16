import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./outro.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

function OutroSection() {
  const pathname = usePathname();

  useGSAP(() => {
    // First animation: Rotate, scale, and fade in when the outro section enters the viewport
    gsap.to(".outro", {
      opacity: 1,
      scale: 10,
      rotate: 3600,
      scrollTrigger: {
        trigger: ".outro",
        start: "top 80%",
        end: "top 60%",
        toggleActions: "restart none none none",
        scrub: 1,
      },
    });

    if (pathname === "/") {
      gsap.to(".outro", {
        y: window.innerHeight * 0.9,
        x: window.innerWidth * 0.1,
        ease: "power4.out",
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: "footer",
          start: "top top", // Start when footer's bottom hits viewport's top
          end: "top top",
          toggleActions: "restart none none reverse",
        },
      });
    }
  }, [pathname]);

  return (
    <section className="h-[100vh] flex justify-center items-center">
      <div className="w-10 h-10 relative outro">
        <Image src="/life/game/doro1.png" alt="" fill className="object-contain" />
      </div>
    </section>
  );
}

export default OutroSection;
