import Image from "next/image";
import "@/components/main/styles/background.css";

function Background() {
  return (
    <div className="background-wrapper">
      <Image
        src="/main-bg.jpg"
        alt="bg-image"
        fill={true}
        priority
        className="absolute object-cover main-background"
      />
    </div>
  );
}

export default Background;
