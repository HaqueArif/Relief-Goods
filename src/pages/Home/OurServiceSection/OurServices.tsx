import Container from "@/components/Container";
import "@/styles/OurServices.css";
import ServiceCard from "@/pages/Home/OurServiceSection/OurServiceCard";
import { motion } from "framer-motion";
import { services } from "@/data/ourServices.data";
import {
  animationVariants,
  fadeInLeft,
  fadeInRight,
} from "@/Animation/useAnimation";

const OurServices = () => {
  return (
    <section className="service-section">
      <Container>
        {/* heading */}
        <div className="header-section">
          <motion.h1
            variants={fadeInRight}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            Our Services
          </motion.h1>
          <motion.p
            variants={fadeInLeft}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="header-details"
          >
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </motion.p>
          {/* Service Card */}
          <div className="service-divider">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={animationVariants[index]}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="service-card-style"
              >
                <ServiceCard key={index} {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurServices;
