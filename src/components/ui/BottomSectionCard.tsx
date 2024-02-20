import violetIcon from "@/assets/Hero/Vector (1).png";
import yellowIcon from "@/assets/Hero/YellowVector (1).png";
import blueIcon from "@/assets/Hero/Vector.png";

export const BottomSectionLeftCard = () => {
  return (
    <div className="glass-gradient px-4 py-6">
      <div className="bottom-left-card-styles">
        <img src={violetIcon} alt="icon" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet
        sed id.
      </p>
    </div>
  );
};

export const BottomSectionCenterCard = () => {
  return (
    <div className="glass-gradient px-4 py-6">
      <div className="bottom-center-card-styles">
        <img src={yellowIcon} alt="icon" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet
        sed id.
      </p>
    </div>
  );
};
export const BottomSectionRightCard = () => {
  return (
    <div className="glass-gradient px-4 py-6">
      <div className="bottom-right-card-styles">
        <img src={blueIcon} alt="icon" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet
        sed id.
      </p>
    </div>
  );
};
