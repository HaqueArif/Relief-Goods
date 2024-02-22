import Container from "@/components/Container";
import { motion } from "framer-motion";
import { fadeInLeft } from "@/Animation/useAnimation";
import useScrollGrow from "@/hooks/ScrollGrowHook";
import { logos } from "@/data/ourClient.data";

const OurClient = () => {
  const { style, componentRef } = useScrollGrow();

  return (
    <Container>
      <div className="mt-[68px] mb-14">
        {/* Heading */}
        <motion.h1
          variants={fadeInLeft}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center mb-[84px]"
        >
          Our Valuable Client
        </motion.h1>

        {/* Logos */}
        <motion.div
          ref={componentRef}
          style={style}
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-x-2 place-items-center"
        >
          {logos.map((logo, i) => (
            <img className="mb-10 sm:mb-24 " key={i} src={logo} alt="" />
          ))}
        </motion.div>
      </div>
    </Container>
  );
};

export default OurClient;
