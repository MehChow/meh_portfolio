import "@/components/main/styles/image-title.css";
import { MapPin } from "lucide-react";

function ImageTitle() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-6rem)] w-full select-none">
      <h1 className="title">MEHCHOW</h1>

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
