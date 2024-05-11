import {
  intro,
  introChildren,
  introChildren3,
  introChildren4,
} from "@/Animation/Hero.animation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroDetails = () => {
  return (
    <div className="left-section">
      <motion.div variants={intro} initial="hidden" animate="visible">
        <h1 className="uppercase text-white">
          <motion.span variants={introChildren}>Help Can't Wait</motion.span>
          <br />
          <motion.span variants={introChildren}> After a Disaster</motion.span>
        </h1>
        <motion.p
          variants={introChildren3}
          initial="initial"
          animate="animate"
          className="hero-paragraph"
        >
          In moments of heartbreak, your gift gives hope by providing shelter,
          food, relief supplies, financial support, and other assistance.
        </motion.p>
        <motion.div
          variants={introChildren4}
          initial="initial"
          animate="animate"
        >
          <Button className="hero-button">Donate now</Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroDetails;
