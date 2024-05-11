import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/Animation/useAnimation";

const GalleryHeading = () => {
  return (
    <motion.div className="text-center">
      <motion.h1
        variants={fadeInLeft}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        Relief Goods Gallery
      </motion.h1>
      <motion.p
        variants={fadeInRight}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="gallery-details-p"
      >
        Explore the essential items that support our humanitarian efforts
        worldwide. From food and water supplies to shelter materials and medical
        kits, each image represents hope in times of crisis. Thank you for your
        support in making a difference.
      </motion.p>
    </motion.div>
  );
};

export default GalleryHeading;
