import { motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import {
  fadeInBounce,
  fadeInLeft,
  fadeInRight,
} from "@/Animation/useAnimation";

const GalleryDetails = () => {
  return (
    <motion.div>
      <motion.h1
        variants={fadeInLeft}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        Gallery
      </motion.h1>
      <motion.p
        variants={fadeInRight}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="gallery-details-p"
      >
        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
        ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
        posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare
        viverra. Ultrices faucibus neque velit risus ac id lorem.
      </motion.p>
      <motion.div
        variants={fadeInBounce}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        <li className="gallery-details-list-style">
          <span className="gallery-details-span">
            <CheckIcon className="gallery-details-checkIcon" />
          </span>
          One day pas access all lecture
        </li>
        <li className="gallery-details-list-style">
          <span className="gallery-details-span">
            <CheckIcon className="gallery-details-checkIcon" />
          </span>
          Lunch and Snack
        </li>
        <li className="gallery-details-list-style">
          <span className="gallery-details-span">
            <CheckIcon className="gallery-details-checkIcon" />
          </span>
          Meet Event Speaker
        </li>
        <li className="gallery-details-list-style">
          <span className="gallery-details-span">
            <CheckIcon className="gallery-details-checkIcon" />
          </span>
          Front Seat
        </li>
        <li className="gallery-details-list-style">
          <span className="gallery-details-span">
            <CheckIcon className="gallery-details-checkIcon" />
          </span>
          One day pas access all lecture
        </li>
      </motion.div>
    </motion.div>
  );
};

export default GalleryDetails;
