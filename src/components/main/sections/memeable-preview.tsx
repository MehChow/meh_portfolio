import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MemeablePreviewSection = () => {
  useGSAP(() => {});

  return <section className="h-[75vh] relative"></section>;
};

export default MemeablePreviewSection;
