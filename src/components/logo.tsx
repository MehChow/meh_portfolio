import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      className={`max-[1200px]:text-3xl text-4xl font-bold flex items-center max-[1200px]:gap-2 gap-4 absolute left-0 z-99 text-white transition-all pl-4`}
    >
      <div className="max-[1200px]:w-16 max-[1200px]:h-16 w-20 h-20 transition-all">
        <Image src="/logo.png" alt="Logo" width={380} height={380} />
      </div>
      MEHChow
    </Link>
  );
}

export default Logo;
