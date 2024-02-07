import heroBanner from "@/assets/Hero/HeroBanner.png";
import topStar from "@/assets/Hero/Star 6.svg";
import bottomStar from "@/assets/Hero/Soft Star.svg";

const RightSection = () => {
  return (
    <div className="right-section">
      <div className="custom-width">
        <div className="outside relative">
          <img src={heroBanner} alt="Event-Banner" />
          <div>
            <img className="top-star" src={topStar} alt="star-icon" />
            <img className="bottom-star" src={bottomStar} alt="star-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
