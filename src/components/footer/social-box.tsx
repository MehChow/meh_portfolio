"use client";

import { CldImage } from "next-cloudinary";
import Link from "next/link";

export default function SocialBox() {
  return (
    <div className="mt-2 flex items-center gap-4 opacity-80">
      <Link
        href="https://www.instagram.com/yeungmeh_/"
        target="_blank"
        className="transition-opacity hover:opacity-50"
      >
        <CldImage
          src="instagram-white_sfwpsf" // Cloudinary public ID
          width={24}
          height={24}
          alt="Instagram"
          quality="auto"
          format="auto"
        />
      </Link>

      <Link
        href="https://github.com/MehChow"
        target="_blank"
        className="transition-opacity hover:opacity-50"
      >
        <CldImage
          src="github-mark-white_ddtogb" // Cloudinary public ID
          width={24}
          height={24}
          alt="GitHub"
          className="aspect-square"
          quality="auto"
          format="auto"
        />
      </Link>

      <Link
        href="https://www.youtube.com/@mehhhhhh"
        target="_blank"
        className="transition-opacity hover:opacity-50"
      >
        <CldImage
          src="youtube_pnrueg" // Cloudinary public ID
          width={24}
          height={24}
          alt="Youtube"
          quality="auto"
          format="auto"
        />
      </Link>
    </div>
  );
}
