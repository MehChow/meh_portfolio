import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import "@/components/main/styles/column.css";

interface ColumnProps {
  images: string[];
  y: any;
}

function Column({ images, y = 0 }: ColumnProps) {
  return (
    <motion.div className="column" style={{ y }}>
      {images.map((publicId, index) => {
        return (
          <div
            key={index}
            className="relative h-full w-full overflow-hidden rounded-4xl"
          >
            <CldImage
              src={publicId}
              fill
              alt={`Gallery image ${index + 1}`}
              className="object-cover"
              loading="eager"
              priority={index === 0}
              format="auto" // Equivalent to f_auto
              quality="auto" // Equivalent to q_auto
            />
          </div>
        );
      })}
    </motion.div>
  );
}

export default Column;
