import {
  intro,
  introChildren,
  introChildren2,
  introChildren3,
  introChildren4,
} from "@/Animation/Hero.animation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const LeftSection = () => {
  return (
    <div className="left-section">
      <motion.div variants={intro} initial="hidden" animate="visible">
        <h1 className="uppercase">
          <motion.span variants={introChildren}>Brand New</motion.span>
          <br />
          <motion.span variants={introChildren}> event Packages</motion.span>
        </h1>
        <motion.h2
          variants={introChildren2}
          initial="initial"
          animate="animate"
          className="gradient-text"
        >
          For Winter
        </motion.h2>
        <motion.p
          variants={introChildren3}
          initial="initial"
          animate="animate"
          className="hero-paragraph "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus
          nec gravida ipsum pulvinar vel non.
        </motion.p>
        <motion.div
          variants={introChildren4}
          initial="initial"
          animate="animate"
        >
          <Button className="py-4 px-16 text-base font-bold">Explore</Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LeftSection;
