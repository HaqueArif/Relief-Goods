import violetIcon from "@/assets/Hero/Vector (1).png";
import yellowIcon from "@/assets/Hero/YellowVector (1).png";
import blueIcon from "@/assets/Hero/Vector.png";

type ItemData = {
  icon: string;
  bgColor: string;
  text: string;
};

export const items: ItemData[] = [
  {
    icon: violetIcon,
    bgColor: "#685FD459",
    text: "Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id.",
  },
  {
    icon: yellowIcon,
    bgColor: "#F2C94C59",
    text: "Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id.",
  },
  {
    icon: blueIcon,
    bgColor: "#8ab2dc59",
    text: "Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id.",
  },
];
