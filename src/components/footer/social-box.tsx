import Image from "next/image";
import Link from "next/link";

function SocialBox() {
  return (
    <div className="flex items-center gap-4 mt-2 opacity-80">
      <Link
        href="https://www.instagram.com/yeungmeh_/"
        target="_blank"
        className="hover:opacity-50 transition-opacity"
      >
        <Image src="/social/instagram-white.png" width={24} height={24} alt="Instagram" />
      </Link>

      <Link
        href="https://github.com/MehChow"
        target="_blank"
        className="hover:opacity-50 transition-opacity"
      >
        <Image src="/social/github-mark-white.png" width={24} height={24} alt="GitHub" />
      </Link>

      <Link
        href="https://www.youtube.com/@mehhhhhh"
        target="_blank"
        className="hover:opacity-50 transition-opacity"
      >
        <Image src="/social/youtube.png" width={24} height={24} alt="Youtube" />
      </Link>
    </div>
  );
}

export default SocialBox;
