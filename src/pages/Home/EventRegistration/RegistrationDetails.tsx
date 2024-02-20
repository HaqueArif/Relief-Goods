import { rotateLeft } from "@/Animation/useAnimation";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const RegistrationDetails = () => {
  return (
    <motion.div
      variants={rotateLeft}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="e-Reg-Left-Content"
    >
      <div className="glass-gradient">
        <h2 className="e-Reg-Header">
          A complete platform for your
          <span className="registration-gradient-text">events</span>
        </h2>
        <p className="my-3">
          Maximize the impact of all your meetings and events with easy-to-use,
          integrated event technology
        </p>
        <p>
          Request a demo to see how you can:
          <ul className="leading-8">
            <li>* Plan and market events</li>
            <li>* Easily manage events onsite</li>
            <li>* Engage with your audience</li>
            <li>* Measure and analyze results</li>
          </ul>
        </p>
        <div className="e-Reg-Bottom-Heading-positioning">
          <h4 className="e-Reg-Bottom-Heading-typography">
            Try Event 360 registration for free
          </h4>
          <ChevronRight />
        </div>
      </div>
    </motion.div>
  );
};

export default RegistrationDetails;
