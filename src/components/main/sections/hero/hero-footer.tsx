import { MapPin } from "lucide-react";
import "./hero-footer.css";

const HeroFooter = () => {
  return (
    <div className="footer">
      <div className="flex gap-1 items-center">
        <MapPin className="mapIcon" />
        <span>Hong Kong</span>
      </div>

      <span>Mobile + Web React dev</span>
    </div>
  );
};

export default HeroFooter;
