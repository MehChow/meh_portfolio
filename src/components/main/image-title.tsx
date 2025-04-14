import "@/components/main/styles/image-title.css";
import { MapPin } from "lucide-react";
import CubeTextAnimation from "./cube-text";

function ImageTitle() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-6rem)] w-full select-none flex-col">
      <h1 className="title">MEHCHOW</h1>

      <div className="flex items-center justify-center gap-2 subtitle-container">
        <span className="text-white text-4xl text-nowrap">I'm a</span>
        <CubeTextAnimation />
      </div>

      <div className="footer">
        <div className="flex gap-1 items-center">
          <MapPin className="mapIcon" />
          <span>Hong Kong</span>
        </div>

        <span>Mobile + Web React dev</span>
      </div>
    </div>
  );
}

export default ImageTitle;
