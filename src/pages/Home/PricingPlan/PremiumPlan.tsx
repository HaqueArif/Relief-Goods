import { TImageProps } from "@/components/Types";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckIcon } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInBounce } from "@/Animation/useAnimation";

const PremiumPlan = (props: TImageProps) => {
  return (
    <motion.div
      variants={fadeInBounce}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="pricing-card-parent"
    >
      <div className=" border-t-4 border-t-primary p-8 rounded-[20px]">
        <div className="pricing-header-divider">
          <div className="bg-[#F0F5FF] p-5 rounded-lg">
            <img src={props.thumbnail} alt="" />
          </div>
          <span className="text-5xl font-[inter] text-primary font-bold">
            $49
          </span>
        </div>
        <h3 className="pricing-card-heading">Standard</h3>
        <p className="pricing-card-heading-details">
          Upgrade your social portfolio with a stunning profile & enhanced
          shots.
        </p>
        <Button className="pricing-card-button">
          Get this package <ArrowRight />
        </Button>
      </div>

      <div className="pricing-card-bottom-body ">
        <li className="pricing-card-list-style ">
          <span className="pricing-card-checkIcon-bg">
            <CheckIcon className="pricing-card-checkIcon" />
          </span>
          User Dashboard
        </li>
        <li className="pricing-card-list-style ">
          <span className="pricing-card-checkIcon-bg">
            <CheckIcon className="pricing-card-checkIcon" />
          </span>
          Post 3 Ads per week
        </li>
        <li className="pricing-card-list-style ">
          <span className="pricing-card-checkIcon-bg">
            <CheckIcon className="pricing-card-checkIcon" />
          </span>
          Multiple images & videos
        </li>
        <li className="pricing-card-list-style">
          <span className="pricing-card-checkIcon-bg">
            <CheckIcon className="pricing-card-checkIcon" />
          </span>
          <span className="text-[#42526B] ">Basic customer support</span>
        </li>
        <li className="pricing-card-list-style">
          <span className="pricing-card-checkIcon-bg">
            <CheckIcon className="pricing-card-checkIcon" />
          </span>
          <span className="text-[#42526B] ">Featured ads</span>
        </li>
        <li className="pricing-card-list-style">
          <span className="pricing-card-checkIcon-bg">
            <CheckIcon className="pricing-card-checkIcon" />
          </span>
          <span className="text-[#42526B]">Special ads badge</span>
        </li>
        <li className="pricing-card-list-style opacity-40">
          <span className="pricing-card-checkIcon-bg">
            <CheckIcon className="pricing-card-checkIcon" />
          </span>
          <span className="pricing-card-unavailable-feature">
            Call to Action in Every Ads
          </span>
        </li>
        <li className="pricing-card-list-style opacity-40">
          <span className="pricing-card-checkIcon-bg">
            <CheckIcon className="pricing-card-checkIcon" />
          </span>
          <span className="pricing-card-unavailable-feature">
            Max 12 team members
          </span>
        </li>
      </div>
    </motion.div>
  );
};

export default PremiumPlan;
