import { TImageProps } from "@/components/Types";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckIcon } from "lucide-react";
import { motion } from "framer-motion";
import { rotateRight } from "@/Animation/useAnimation";
const BusinessPlan = (props: TImageProps): JSX.Element => {
  return (
    <motion.div
      variants={rotateRight}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="pricing-card-parent "
    >
      <div className=" border-t-4 border-t-[#E54545] p-8 rounded-[20px]">
        <div className="pricing-header-divider">
          <div className="bg-[#FCECEC] p-5 rounded-lg">
            <img src={props.thumbnail} alt="business-icon" />
          </div>
          <span className="text-5xl font-[inter] text-[#E54545] font-bold">
            $124
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
        <li className="pricing-card-list-style ">
          <span className="pricing-card-checkIcon-bg">
            <CheckIcon className="pricing-card-checkIcon" />
          </span>
          <span className="text-[#42526B]  ">Call to Action in Every Ads</span>
        </li>
        <li className="pricing-card-list-style ">
          <span className="pricing-card-checkIcon-bg">
            <CheckIcon className="pricing-card-checkIcon" />
          </span>
          <span className="text-[#42526B]  ">Max 12 team members</span>
        </li>
      </div>
    </motion.div>
  );
};

export default BusinessPlan;
