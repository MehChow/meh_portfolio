import { AnimatedFooterContent } from "./animated-footer-content";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="relative h-[100vh] w-full overflow-hidden">
      <div className="maomao-background" />
      <AnimatedFooterContent />
    </footer>
  );
}
