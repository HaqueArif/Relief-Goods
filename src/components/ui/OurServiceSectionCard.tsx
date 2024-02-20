import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

type ServiceCardProps = {
  image: string;
  title: string;
  description: string;
  features: string[];
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  features,
}) => {
  return (
    <div className=" ">
      <div>
        <img src={image} alt="Event-Service-Image" />
      </div>
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
