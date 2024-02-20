import {
  fadeInBounce,
  fadeInLeft,
  fadeInRight,
} from "@/Animation/useAnimation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const RecentEventsDetails = () => {
  return (
    <div className="recent-E-Right-Contents">
      <motion.h1
        variants={fadeInRight}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        Recent Events
      </motion.h1>
      <motion.p
        variants={fadeInLeft}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="recent-E-Paragraph"
      >
        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
        ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
      </motion.p>

      <motion.div
        variants={fadeInBounce}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="w-fit"
      >
        <Button className="btn-primary">Learn more</Button>
      </motion.div>
    </div>
  );
};

export default RecentEventsDetails;
