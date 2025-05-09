import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      className={`absolute left-0 z-99 flex items-center gap-4 pl-4 text-4xl font-bold text-white transition-all max-[1200px]:gap-2 max-[1200px]:text-3xl`}
    >
      <div className="h-20 w-20 transition-all max-[1200px]:h-16 max-[1200px]:w-16">
        <Image src="/logo.png" alt="Logo" width={380} height={380} />
      </div>
    </Link>
  );
}

export default Logo;
