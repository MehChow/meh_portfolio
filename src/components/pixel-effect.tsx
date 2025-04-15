import { useEffect, useState } from "react";
import "../styles/memeable-preview.css";
import { motion } from "framer-motion";
import useDimension from "@/hooks/use-dimension";

const anim = {
  initial: {
    opacity: 0,
  },
  open: (i: number) => ({
    opacity: 1,
    transition: { duration: 0.01 * i },
  }),
  closed: (i: number) => ({
    opacity: 0,
    transition: { duration: 0.01 * i },
  }),
};

const PixelEffect = () => {
  const [showPixel, setShowPixel] = useState(false);
  const { width, height } = useDimension();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPixel(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const shuffle = (a: number[]) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  const getBlocks = (indexOfColumns: number) => {
    if (!width || !height) return null; // Avoid rendering until dimensions are set

    const blockSize = width * 0.05;

    const amountOfBlocks = Math.ceil(height / blockSize);
    const delays = shuffle([...Array(amountOfBlocks)].map((_, i) => i));

    return delays.map((randomDelay, i) => {
      return (
        <motion.div
          key={i}
          className="block"
          variants={anim}
          initial="initial"
          animate={showPixel ? "open" : "closed"}
          custom={indexOfColumns + randomDelay}
        ></motion.div>
      );
    });
  };
  return (
    <section className="pixelBackground">
      {[...Array(20)].map((_, i) => {
        return (
          <div className="column" key={i}>
            {getBlocks(i)}
          </div>
        );
      })}
    </section>
  );
};

export default PixelEffect;
