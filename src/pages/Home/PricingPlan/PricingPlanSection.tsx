import standard from "@/assets/pricing/Package.svg";
import premium from "@/assets/pricing/Stack.png";
import business from "@/assets/pricing/RocketLaunch.svg";
import Container from "@/components/Container";
import "@/styles/PricingPlan.css";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/Animation/useAnimation";
import StandardPlan from "./StandardPlan";
import PremiumPlan from "./PremiumPlan";
import BusinessPlan from "./BusinessPlan";

const PricingPlanSection = () => {
  return (
    <section className="pricingBgColor overflow-x-clip">
      <Container>
        <div>
          <motion.h1
            variants={fadeInLeft}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center"
          >
            Explore our pricing plans
          </motion.h1>
          <motion.p
            variants={fadeInRight}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center mt-3 mb-[54px] max-w-5xl mx-auto"
          >
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
            posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </motion.p>

          <div className="pricing-card-divider">
            <StandardPlan thumbnail={standard} />
            <PremiumPlan thumbnail={premium} />
            <BusinessPlan thumbnail={business} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PricingPlanSection;
