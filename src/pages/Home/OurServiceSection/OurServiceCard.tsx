import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCardProps } from "../../../components/Types";

const ServiceCard = ({
  image,
  title,
  description,
  features,
}: ServiceCardProps) => {
  return (
    <div>
      {/* Thumbnail */}
      <div>
        <img src={image} alt="Event-Service-Image" />
      </div>
      {/* body */}
      <div className=" relative h-full">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>
              <span>
                <Check className="icon-style" />
              </span>
              {feature}
            </li>
          ))}
        </ul>
        <Button>Check it out</Button>
      </div>
    </div>
  );
};

export default ServiceCard;
