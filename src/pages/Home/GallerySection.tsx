import Container from "@/components/Container";
import { CheckIcon } from "lucide-react";
import img1 from "@/assets/Gallery/Picture (9).png";
import img2 from "@/assets/Gallery/Picture (6).png";
import img3 from "@/assets/Gallery/Picture.png";
import img4 from "@/assets/Gallery/Picture (7).png";
import img5 from "@/assets/Gallery/Picture (5).png";
import img6 from "@/assets/Gallery/Picture (1).png";
import img7 from "@/assets/Gallery/Picture (8).png";
import img8 from "@/assets/Gallery/Picture (4).png";
import img9 from "@/assets/Gallery/Picture (2).png";
import img10 from "@/assets/Gallery/Picture (3).png";
import star from "@/assets/Gallery/Star.svg";

const GallerySection = () => {
  return (
    <Container className="mt-[188px] mb-[38px]">
      <div className="grid md:grid-cols-2 gap-[120px] place-items-center">
        <div>
          <h1>Gallery</h1>
          <p className="my-8 text">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
            posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>
          <li className="flex items-start gap-[18px] list-none mb-4 ">
            <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
              <CheckIcon className="w-[14px] h-[14px]" />
            </span>
            One day pas access all lecture
          </li>
          <li className="flex items-start gap-[18px] list-none mb-4 ">
            <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
              <CheckIcon className="w-[14px] h-[14px]" />
            </span>
            Lunch and Snack
          </li>
          <li className="flex items-start gap-[18px] list-none mb-4 ">
            <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
              <CheckIcon className="w-[14px] h-[14px]" />
            </span>
            Meet Event Speaker
          </li>
          <li className="flex items-start gap-[18px] list-none mb-4 ">
            <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
              <CheckIcon className="w-[14px] h-[14px]" />
            </span>
            Front Seat
          </li>
          <li className="flex items-start gap-[18px] list-none mb-4 ">
            <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
              <CheckIcon className="w-[14px] h-[14px]" />
            </span>
            One day pas access all lecture
          </li>
        </div>

        <div className="relative">
          <img
            className="absolute w-28 sm:w-48 sm:-top-  md:w-36 lg:w-44 -top-16 md:-top-14 -left-2 -z-10"
            src={star}
            alt=""
          />
          <div className="grid grid-cols-4 place-items-center">
            <div>
              <img src={img1} alt="Gallery" />
              <img src={img2} alt="Gallery" />
            </div>
            <div>
              <img src={img3} alt="Gallery" />
              <img src={img4} alt="Gallery" />
              <img src={img5} alt="Gallery" />
            </div>
            <div>
              <img src={img6} alt="Gallery" />
              <img src={img7} alt="Gallery" />
              <img src={img8} alt="Gallery" />
            </div>
            <div>
              <img src={img9} alt="Gallery" />
              <img src={img10} alt="Gallery" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GallerySection;
