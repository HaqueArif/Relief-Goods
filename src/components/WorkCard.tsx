import { NavLink } from "react-router-dom";
import { ServiceCardProps } from "./Types";

const ServiceCard = ({
  _id,
  image,
  title,
  category,
  amount,
  description,
}: ServiceCardProps) => {
  const maxLength = 100;

  const truncatedDescription = (description: string): string => {
    if (description.length > maxLength) {
      return `${description.slice(0, maxLength)}...`;
    }
    return description;
  };

  return (
    <div>
      {/* Thumbnail */}
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "50% 50%",
        }}
        className="bg-no-repeat bg-cover flex justify-end h-[200px]"
      ></div>
      {/* body */}
      <div className="mb-14">
        <h3>{title}</h3>
        <p>
          <span>Category:</span>
          {category}
        </p>
        <p>
          <span>Amount: </span>
          {amount}
        </p>
        <div>
          <div>
            <p>{truncatedDescription(description)}</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[20px]">
        <NavLink to={`/relief-goods/${_id}`}>
          <button className="btn-hover ">View Detail</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ServiceCard;
