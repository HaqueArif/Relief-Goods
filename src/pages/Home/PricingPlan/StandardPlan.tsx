import { Button } from "@/components/ui/button";
import { ArrowRight, CheckIcon } from "lucide-react";
import { TImageProps } from "@/components/Types";
import { rotateLeft } from "@/Animation/useAnimation";
import { motion } from "framer-motion";

const StandardPlan = (props: TImageProps): JSX.Element => {
  return (
    <motion.div
      variants={rotateLeft}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="pricing-card-parent"
    >
      <div className="pricing-lef-card-body">
        <div className="pricing-header-divider ">
          <div className="pricing-left-card-icon ">
            <img src={props.thumbnail} alt="event plan" />
          </div>
          <span className="pricing-left-card-price">$21</span>
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
        <li className="pricing-card-list-style opacity-40">
          <span className="pricing-card-checkIcon-bg">
            <CheckIcon className="pricing-card-checkIcon" />
          </span>
          <span className="pricing-card-unavailable-feature">
            Basic customer support
          </span>
        </li>
        <li className="pricing-card-list-style opacity-40">
          <span className="pricing-card-checkIcon-bg">
            <CheckIcon className="pricing-card-checkIcon" />
          </span>
          <span className="pricing-card-unavailable-feature">Featured ads</span>
        </li>
        <li className="pricing-card-list-style opacity-40">
          <span className="pricing-card-checkIcon-bg">
            <CheckIcon className="pricing-card-checkIcon" />
          </span>
          <span className="pricing-card-unavailable-feature">
            Special ads badge
          </span>
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

export default StandardPlan;
