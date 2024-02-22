import violetIcon from "@/assets/Hero/Vector (1).png";
import yellowIcon from "@/assets/Hero/YellowVector (1).png";
import blueIcon from "@/assets/Hero/Vector.png";
import { motion } from "framer-motion";
import { flip, rotateLeft, rotateRight } from "@/Animation/useAnimation";

export const BottomSectionLeftCard = () => {
  return (
    <motion.div
      variants={rotateLeft}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="glass-gradient px-4 py-6"
    >
      <div className="bottom-left-card-styles">
        <img src={violetIcon} alt="icon" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet
        sed id.
      </p>
    </motion.div>
  );
};

export const BottomSectionCenterCard = () => {
  return (
    <motion.div
      variants={flip}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="glass-gradient px-4 py-6"
    >
      <div className="bottom-center-card-styles">
        <img src={yellowIcon} alt="icon" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet
        sed id.
      </p>
    </motion.div>
  );
};
export const BottomSectionRightCard = () => {
  return (
    <motion.div
      variants={rotateRight}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="glass-gradient px-4 py-6"
    >
      <div className="bottom-right-card-styles">
        <img src={blueIcon} alt="icon" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet
        sed id.
      </p>
    </motion.div>
  );
};
