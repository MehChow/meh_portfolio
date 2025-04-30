import "./projects-preview.scss";
import { MemeableSection } from "./memeable";
import { PixelArtSection } from "./pixel-art";
import { memeableImages, minecraftImages } from "./image-config";

function ProjectsPreview() {
  return (
    <section className="pin-container">
      <MemeableSection images={memeableImages} />
      <PixelArtSection images={minecraftImages} />
    </section>
  );
}

export default ProjectsPreview;
