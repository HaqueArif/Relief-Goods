import {
  BottomSectionCenterCard,
  BottomSectionLeftCard,
  BottomSectionRightCard,
} from "@/pages/Home/HeroSection/BottomSectionCard";

const BottomSection = () => {
  return (
    <div className="col-span-12 lg:col-span-7 grid gird-cols-1 md:grid-cols-3 gap-6 mb-16  ">
      <BottomSectionLeftCard />
      <BottomSectionCenterCard />
      <BottomSectionRightCard />
    </div>
  );
};

export default BottomSection;
