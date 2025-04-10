import Image from "next/image";
import Link from "next/link";

function SocialBox() {
  return (
    <div className="fixed top-1/2 right-4 p-2 flex justify-center items-center z-20 flex-col gap-4 opacity-80">
      <Link
        href="https://github.com/MehChow"
        target="_blank"
        className="hover:opacity-50 transition-opacity"
      >
        <Image src="/social/github-mark-white.png" width={28} height={28} alt="GitHub" />
      </Link>

      <Link
        href="https://www.youtube.com/@mehhhhhh"
        target="_blank"
        className="hover:opacity-50 transition-opacity"
      >
        <Image src="/social/youtube.png" width={28} height={28} alt="Youtube" />
      </Link>
    </div>
  );
}

export default SocialBox;
