import Image from "next/image";
import Link from "next/link";

function SocialBox() {
  return (
    <div className="mt-2 flex items-center gap-4 opacity-80">
      <Link
        href="https://www.instagram.com/yeungmeh_/"
        target="_blank"
        className="transition-opacity hover:opacity-50"
      >
        <Image
          src="/social/instagram-white.png"
          width={24}
          height={24}
          alt="Instagram"
        />
      </Link>

      <Link
        href="https://github.com/MehChow"
        target="_blank"
        className="transition-opacity hover:opacity-50"
      >
        <Image
          src="/social/github-mark-white.png"
          width={24}
          height={24}
          alt="GitHub"
          className="aspect-square"
        />
      </Link>

      <Link
        href="https://www.youtube.com/@mehhhhhh"
        target="_blank"
        className="transition-opacity hover:opacity-50"
      >
        <Image src="/social/youtube.png" width={24} height={24} alt="Youtube" />
      </Link>
    </div>
  );
}

export default SocialBox;
