import standard from "@/assets/pricing/Package.svg";
import premium from "@/assets/pricing/Stack.png";
import business from "@/assets/pricing/RocketLaunch.svg";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckIcon } from "lucide-react";

const PricingPlanSection = () => {
  return (
    <section className="pricingBgColor overflow-x-clip">
      <Container>
        <div>
          <h1 className="text-center">Explore our pricing plans</h1>
          <p className="text-center mt-3 mb-[54px] max-w-5xl mx-auto">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
            posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="border rounded-[20px] border-gray-50 bg-white ">
              <div className=" border-t-4 border-t-[#F249C8] p-8 rounded-[20px]">
                <div className="flex justify-between items-center ">
                  <div className="bg-[#FEEDFA] p-5 rounded-lg">
                    <img src={standard} alt="" />
                  </div>
                  <span className="text-5xl font-[inter] text-[#F249C8] font-bold">
                    $21
                  </span>
                </div>
                <h3 className="font-[inter] text-[#061C3D] text-2xl font-semibold mt-8 mb-2">
                  Standard
                </h3>
                <p className="font-[inter] text-[#42526B]">
                  Upgrade your social portfolio with a stunning profile &
                  enhanced shots.
                </p>
                <Button className="bg-white text-[#0B63E5] outline px-8 hover:text-white capitalize mt-8 mb-10">
                  Get this package <ArrowRight />
                </Button>
              </div>

              <div className="border-t p-8 ">
                <li className="flex items-start gap-[18px] list-none mb-5 ">
                  <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
                    <CheckIcon className="w-[14px] h-[14px]" />
                  </span>
                  User Dashboard
                </li>
                <li className="flex items-start gap-[18px] list-none mb-5 ">
                  <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
                    <CheckIcon className="w-[14px] h-[14px]" />
                  </span>
                  Post 3 Ads per week
                </li>
                <li className="flex items-start gap-[18px] list-none mb-5 ">
                  <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
                    <CheckIcon className="w-[14px] h-[14px]" />
                  </span>
                  Multiple images & videos
                </li>
                <li className="flex items-start gap-[18px] list-none mb-5 opacity-40">
                  <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
                    <CheckIcon className="w-[14px] h-[14px]" />
                  </span>
                  <span className="text-[#42526B] line-through ">
                    Basic customer support
                  </span>
                </li>
                <li className="flex items-start gap-[18px] list-none mb-5 opacity-40">
                  <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
                    <CheckIcon className="w-[14px] h-[14px]" />
                  </span>
                  <span className="text-[#42526B] line-through ">
                    Featured ads
                  </span>
                </li>
                <li className="flex items-start gap-[18px] list-none mb-5 opacity-40">
                  <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
                    <CheckIcon className="w-[14px] h-[14px]" />
                  </span>
                  <span className="text-[#42526B] line-through ">
                    Special ads badge
                  </span>
                </li>
                <li className="flex items-start gap-[18px] list-none mb-5 opacity-40">
                  <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
                    <CheckIcon className="w-[14px] h-[14px]" />
                  </span>
                  <span className="text-[#42526B] line-through ">
                    Call to Action in Every Ads
                  </span>
                </li>
                <li className="flex items-start gap-[18px] list-none mb-5 opacity-40">
                  <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
                    <CheckIcon className="w-[14px] h-[14px]" />
                  </span>
                  <span className="text-[#42526B] line-through ">
                    Max 12 team members
                  </span>
                </li>
              </div>
            </div>
            <div className="border rounded border-gray-50 bg-white">
              <div className=" border-t-4 border-t-primary p-8 rounded-[20px]">
                <div className="flex justify-between items-center">
                  <div className="bg-[#F0F5FF] p-5 rounded-lg">
                    <img src={premium} alt="" />
                  </div>
                  <span className="text-5xl font-[inter] text-primary font-bold">
                    $49
                  </span>
                </div>
                <h3 className="font-[inter] text-[#061C3D] text-2xl font-semibold mt-8 mb-2">
                  Standard
                </h3>
                <p className="font-[inter] text-[#42526B]">
                  Upgrade your social portfolio with a stunning profile &
                  enhanced shots.
                </p>
                <Button className="bg-white text-[#0B63E5] outline px-8 hover:text-white capitalize mt-8 mb-10">
                  Get this package <ArrowRight />
                </Button>
              </div>

              <div className="border-t p-8 ">
                <li className="flex items-start gap-[18px] list-none mb-5 ">
                  <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
                    <CheckIcon className="w-[14px] h-[14px]" />
                  </span>
                  User Dashboard
                </li>
                <li className="flex items-start gap-[18px] list-none mb-5 ">
                  <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
                    <CheckIcon className="w-[14px] h-[14px]" />
                  </span>
                  Post 3 Ads per week
                </li>
                <li className="flex items-start gap-[18px] list-none mb-5 ">
                  <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
                    <CheckIcon className="w-[14px] h-[14px]" />
                  </span>
                  Multiple images & videos
                </li>
                <li className="flex items-start gap-[18px] list-none mb-5">
                  <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
                    <CheckIcon className="w-[14px] h-[14px]" />
                  </span>
                  <span className="text-[#42526B] ">
                    Basic customer support
                  </span>
                </li>
                <li className="flex items-start gap-[18px] list-none mb-5">
                  <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
                    <CheckIcon className="w-[14px] h-[14px]" />
                  </span>
                  <span className="text-[#42526B] ">Featured ads</span>
                </li>
                <li className="flex items-start gap-[18px] list-none mb-5">
                  <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
                    <CheckIcon className="w-[14px] h-[14px]" />
                  </span>
                  <span className="text-[#42526B]">Special ads badge</span>
                </li>
                <li className="flex items-start gap-[18px] list-none mb-5 opacity-40">
                  <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
                    <CheckIcon className="w-[14px] h-[14px]" />
                  </span>
                  <span className="text-[#42526B] line-through ">
                    Call to Action in Every Ads
                  </span>
                </li>
                <li className="flex items-start gap-[18px] list-none mb-5 opacity-40">
                  <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
                    <CheckIcon className="w-[14px] h-[14px]" />
                  </span>
                  <span className="text-[#42526B] line-through ">
                    Max 12 team members
                  </span>
                </li>
              </div>
            </div>
            <div className="border rounded border-gray-50 bg-white ">
              <div className=" border-t-4 border-t-[#E54545] p-8 rounded-[20px]">
                <div className="flex justify-between items-center">
                  <div className="bg-[#FCECEC] p-5 rounded-lg">
                    <img src={business} alt="business-icon" />
                  </div>
                  <span className="text-5xl font-[inter] text-[#E54545] font-bold">
                    $124
                  </span>
                </div>
                <h3 className="font-[inter] text-[#061C3D] text-2xl font-semibold mt-8 mb-2">
                  Standard
                </h3>
                <p className="font-[inter] text-[#42526B]">
                  Upgrade your social portfolio with a stunning profile &
                  enhanced shots.
                </p>
                <Button className="bg-white text-[#0B63E5] outline px-8 hover:text-white capitalize mt-8 mb-10">
                  Get this package <ArrowRight />
                </Button>
              </div>

              <div className="border-t p-8 ">
                <li className="flex items-start gap-[18px] list-none mb-5 ">
                  <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
                    <CheckIcon className="w-[14px] h-[14px]" />
                  </span>
                  User Dashboard
                </li>
                <li className="flex items-start gap-[18px] list-none mb-5 ">
                  <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
                    <CheckIcon className="w-[14px] h-[14px]" />
                  </span>
                  Post 3 Ads per week
                </li>
                <li className="flex items-start gap-[18px] list-none mb-5 ">
                  <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
                    <CheckIcon className="w-[14px] h-[14px]" />
                  </span>
                  Multiple images & videos
                </li>
                <li className="flex items-start gap-[18px] list-none mb-5">
                  <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
                    <CheckIcon className="w-[14px] h-[14px]" />
                  </span>
                  <span className="text-[#42526B] ">
                    Basic customer support
                  </span>
                </li>
                <li className="flex items-start gap-[18px] list-none mb-5">
                  <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
                    <CheckIcon className="w-[14px] h-[14px]" />
                  </span>
                  <span className="text-[#42526B] ">Featured ads</span>
                </li>
                <li className="flex items-start gap-[18px] list-none mb-5">
                  <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
                    <CheckIcon className="w-[14px] h-[14px]" />
                  </span>
                  <span className="text-[#42526B]">Special ads badge</span>
                </li>
                <li className="flex items-start gap-[18px] list-none mb-5 ">
                  <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
                    <CheckIcon className="w-[14px] h-[14px]" />
                  </span>
                  <span className="text-[#42526B]  ">
                    Call to Action in Every Ads
                  </span>
                </li>
                <li className="flex items-start gap-[18px] list-none mb-5 ">
                  <span className="text-[#6FCF97] rounded-full  bg-[#E7F5E8] p-[5px]">
                    <CheckIcon className="w-[14px] h-[14px]" />
                  </span>
                  <span className="text-[#42526B]  ">Max 12 team members</span>
                </li>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PricingPlanSection;
