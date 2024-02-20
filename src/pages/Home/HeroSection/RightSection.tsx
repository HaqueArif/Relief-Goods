import heroBanner from "@/assets/Hero/HeroBanner.png";
import topStar from "@/assets/Hero/Star 6.svg";
import bottomStar from "@/assets/Hero/Soft Star.svg";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import {
  intro,
  introChildrenRight,
  introChildrenRight1,
  introChildrenRight2,
} from "@/Animation/Hero.animation";

const RightSection = () => {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        variants={intro}
        initial="hidden"
        animate="visible"
        className="right-section"
      >
        <div className="custom-width">
          <div className="outside relative">
            <motion.img
              variants={introChildrenRight}
              src={heroBanner}
              alt="Event-Banner"
            />
            <div>
              <motion.img
                variants={introChildrenRight1}
                className="top-star"
                src={topStar}
                alt="star-icon"
              />
              <motion.img
                variants={introChildrenRight2}
                className="bottom-star"
                src={bottomStar}
                alt="star-icon"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </LazyMotion>
  );
};

export default RightSection;
