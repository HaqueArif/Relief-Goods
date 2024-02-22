import Container from "@/components/Container";
import { motion } from "framer-motion";
import "@/styles/EventLifecycle.css";
import {
  ArrowBottomLeft,
  ArrowBottomRight,
  ArrowTopLeft,
  ArrowTopRight,
} from "./Arrows";
import { ButtonBottom, ButtonLeft, ButtonRight, ButtonTop } from "./Buttons";
import CenterContents from "./CenterContents";
import { fadeInBounce, fadeInLeft } from "@/Animation/useAnimation";

const EventLifecycle = () => {
  return (
    <div className="e-Cycle-parent bg-E-Cycle">
      <Container>
        {/* heading */}
        <motion.h1
          variants={fadeInLeft}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="e-Cycle-Heading"
        >
          Event Planning And Marketing In One Place
        </motion.h1>
        {/* body section */}
        <motion.div>
          <motion.div
            variants={fadeInBounce}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className=" btn-glass-gradient e-Cycle-Inner-Parent"
          >
            {/* ///////// Center Contents ///////// */}
            <CenterContents />

            {/* ///////// arrows ///////// */}
            <ArrowTopRight />
            <ArrowBottomRight />
            <ArrowBottomLeft />
            <ArrowTopLeft />

            {/* ///////// buttons ///////// */}

            <ButtonTop />
            <ButtonRight />
            <ButtonBottom />
            <ButtonLeft />
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default EventLifecycle;
