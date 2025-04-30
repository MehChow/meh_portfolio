import Image from "next/image";

const ImageItem = ({ className, src }: { className: string; src: string }) => (
  <div
    className={`grid-cols-1 grid-rows-1 ${className} medium:aspect-auto aspect-square`}
  >
    <Image
      src={src}
      fill
      alt=""
      className="rounded-2xl object-cover"
      sizes="100%"
    />
  </div>
);

export default ImageItem;
