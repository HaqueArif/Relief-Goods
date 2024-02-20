import { intro } from "@/Animation/Hero.animation";
import { flipLeft, flipRight } from "@/Animation/useAnimation";
import { TGalleryFrameProps } from "@/components/Types";
import { motion } from "framer-motion";

const Frame = (props: TGalleryFrameProps): JSX.Element => {
  return (
    <div className="relative">
      <img
        className="absolute w-28 sm:w-48 sm:-top-  md:w-36 lg:w-44 -top-16 md:-top-14 -left-2 -z-10"
        src={props.star}
        alt=""
      />
      <motion.div
        variants={intro}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        className="grid grid-cols-4 place-items-center"
      >
        <motion.div
          variants={flipRight}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <img src={props.img1} alt="Gallery" />
          <img src={props.img2} alt="Gallery" />
        </motion.div>
        <motion.div
          variants={flipLeft}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <img src={props.img3} alt="Gallery" />
          <img src={props.img4} alt="Gallery" />
          <img src={props.img5} alt="Gallery" />
        </motion.div>
        <motion.div
          variants={flipRight}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <img src={props.img6} alt="Gallery" />
          <img src={props.img7} alt="Gallery" />
          <img src={props.img8} alt="Gallery" />
        </motion.div>
        <motion.div
          variants={flipLeft}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <img src={props.img9} alt="Gallery" />
          <img src={props.img10} alt="Gallery" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Frame;
