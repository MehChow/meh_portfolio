"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function LifePage() {
  useGSAP(() => {}, []);

  return (
    <main className="max-w-[2400px] w-full flex flex-col justify-center items-center z-1">
      <div className="a w-full h-[100vh] bg-red-200 flex justify-center items-center">a</div>
      <div className="b w-full h-[100vh] bg-green-200 flex justify-center items-center">b</div>
      <div className="c w-full h-[100vh] bg-orange-200 flex justify-center items-center">c</div>
    </main>
  );
}
