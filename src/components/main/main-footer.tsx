import { MapPin } from "lucide-react";
import "./styles/main-footer.css";

const MainFooter = () => {
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

export default MainFooter;
