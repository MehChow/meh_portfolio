import GalleryParallax from "@/components/main/gallery-parallax";
import ImageTitle from "@/components/main/image-title";
import SocialBox from "@/components/main/social-box";

export default function HomePage() {
  return (
    <main className="max-w-[2400px] w-full">
      <ImageTitle />
      <div className="h-[100vh] bg-transparent"></div>
      <GalleryParallax />
      <div className="h-[100vh] bg-transparent"></div>
      <SocialBox />
    </main>
  );
}
