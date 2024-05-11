import Container from "@/components/Container";
import { motion } from "framer-motion";
import { fadeInLeft } from "@/Animation/useAnimation";
import useScrollGrow from "@/hooks/ScrollGrowHook";
import { logos } from "@/data/ourCorporatePartners.data";

const OurCorporatePartners = () => {
  const { style, componentRef } = useScrollGrow();

  return (
    <Container>
      <div className="my-[250px] ">
        {/* Heading */}
        <motion.h1
          variants={fadeInLeft}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center  mb-[84px]"
        >
          Our Corporate Partners
        </motion.h1>

        <p className="max-w-[860px] text-center mx-auto ">
          We've made it possible for more than{" "}
          <span className="font-bold">
            580 companies to support local causes around the world
          </span>
          . We help companies expand their philanthropic footprint with global
          nonprofit vetting, grantmaking, charitable gift cards, and digital
          campaigns to power cause marketing, disaster response, and employee
          giving.
        </p>

        {/* Logos */}
        <motion.div
          ref={componentRef}
          style={style}
          className="grid grid-cols-3  md:grid-cols-6  place-items-center mt-20"
        >
          {logos.map((logo, i) => (
            <img className="mb-10 sm:mb-10 w-24" key={i} src={logo} />
          ))}
        </motion.div>

        <div className="flex justify-center">
          <button className="border w-fit px-10 py-3 mx-auto btn-primary-hover">
            View All Companies
          </button>
        </div>
      </div>
    </Container>
  );
};

export default OurCorporatePartners;
