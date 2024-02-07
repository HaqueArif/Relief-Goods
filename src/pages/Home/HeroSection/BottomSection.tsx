import BottomSectionCard from "../../../components/ui/BottomSectionCard";
import { items } from "./BottomSectionData";

const BottomSection = () => {
  return (
    <div className="col-span-12 lg:col-span-7 grid   gird-cols-1 md:grid-cols-3 gap-6 mb-16  ">
      {items.map((item, i) => (
        <BottomSectionCard key={i} {...item} />
      ))}
    </div>
  );
};

export default BottomSection;
