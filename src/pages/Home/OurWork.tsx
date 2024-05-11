import Container from "@/components/Container";
import "@/styles/OurWork.css";
import ServiceCard from "@/components/WorkCard";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/Animation/useAnimation";
import { NavLink } from "react-router-dom";
import { useGetSuppliesQuery } from "@/redux/fetures/supply/supplyApi";

const OurWork = () => {
  const { data } = useGetSuppliesQuery({});

  const firstSixItems = data?.slice(0, 6);
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
            Our work
          </motion.h1>
          <motion.p
            variants={fadeInLeft}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="header-details"
          >
            Our presence in over 120 countries and territories includes a broad
            range of activities to save and change lives, with the ultimate goal
            of a world with zero hunger
          </motion.p>
          {/* Service Card */}
          <div className="service-divider">
            {firstSixItems?.map((service, index) => (
              <div key={index} className="relative service-card-style">
                <ServiceCard key={index} {...service} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <NavLink to="/relief-goods">
            <button className="border w-fit px-10 py-3 mx-auto btn-primary-hover">
              View All
            </button>
          </NavLink>
        </div>
      </Container>
    </section>
  );
};

export default OurWork;
