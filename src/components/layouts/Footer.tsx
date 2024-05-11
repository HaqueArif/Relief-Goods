import { Facebook, Instagram, Twitter } from "lucide-react";
import Container from "../Container";

const Footer = () => {
  return (
    <footer className="mt-[160px] bg-[#293541] text-white pt-10 ">
      {/* top section */}
      <div className="border-b-2 pb-10 mb-10 border-[#4a5254f5]">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 ">
            <div className="flex justify-between items-center">
              <img
                className="w-40 "
                src="https://i.postimg.cc/8cK5TPzF/logo-1.png"
                alt=""
              />
            </div>
            <p className="col-span-2 text-[#bdbdbdbd] text-[14px]">
              Relief-Goods makes it easy and safe for you to give to local
              projects anywhere in the world, while providing nonprofits with
              the tools, training, and support they need to thrive.
            </p>
            <div className="flex lg:justify-around gap-5 items-center">
              <button className="btn-primary-hover px-5 py-3">
                Help Center
              </button>
            </div>
            <div className="flex lg:justify-around gap-2 sm:gap-5 items-center">
              <div className="rounded-full bg-[#0094DA] p-3">
                <Facebook />
              </div>
              <div className="rounded-full bg-[#0094DA] p-3">
                <Twitter />
              </div>
              <div className="rounded-full bg-[#0094DA] p-3">
                <Instagram />
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* middle section */}
      <div className=" pb-10 ">
        <Container>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            <div>
              <h4 className="text-[#ffde00] text-2xl font-bold mb-3 text-center sm:text-start">
                Donors
              </h4>
              <div className="text-[14px] font-bold text-center sm:text-start flex flex-col gap-2">
                <span>Give or Redeem Gift Cards</span>
                <span>Donate in Honor</span>
                <span>Project of the Month Club</span>
                <span>Start a Fundraiser</span>
              </div>
            </div>
            <div>
              <h4 className="text-[#ffde00] text-2xl font-bold mb-3 text-center sm:text-start">
                Nonprofits
              </h4>
              <div className="text-[14px] font-bold text-center sm:text-start flex flex-col gap-2">
                <span>Start an Application</span>
                <span>Why Join?</span>
                <span>Handbook</span>
                <span>Pricing & Fees</span>
              </div>
            </div>
            <div>
              <h4 className="text-[#ffde00] text-2xl font-bold mb-3 text-center sm:text-start">
                Companies
              </h4>
              <div className="text-[14px] font-bold text-center sm:text-start flex flex-col gap-2">
                <span>Our Services</span>
                <span>Our Partners</span>
                <span>Corporate Gift Cards</span>
                <span>GlobalGiving Atlas</span>
              </div>
            </div>
            <div>
              <h4 className="text-[#ffde00] text-2xl font-bold mb-3 text-center sm:text-start">
                About Us
              </h4>
              <div className="text-[14px] font-bold text-center sm:text-start flex flex-col gap-2">
                <span>Our Team</span>
                <span>Jobs</span>
                <span>FAQs</span>
                <span>Contact Us</span>
              </div>
            </div>
            <div>
              <h4 className="text-[#ffde00] text-2xl font-bold mb-3 text-center sm:text-start">
                Learn Library
              </h4>
              <div className="text-[14px] font-bold text-center sm:text-start flex flex-col gap-2">
                <span>Nonprofit Resources</span>
                <span>Corporate Giving Resources</span>
                <span>Donor Resources</span>
                <span>Success Stories</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* bottom section */}
      <div className="bg-[#3E4B59] text-xs py-3">
        <Container>
          <div className="grid lg:grid-cols-2 place-items-start gap-3 items-center">
            <div className="text-[#bdbdbdbd] flex flex-col justify-start items-start">
              <span>
                © Copyright 2000-2024 Relief-Goods, a 501(c)(3) organization
                (EIN: 30‑0108263)
              </span>
              <span>Registered Charity in England and Wales # 1122823</span>
              <span>
                1 Thomas Circle NW, Suite 800, Washington, DC 20005, USA
                Questions? Contact Us
              </span>
            </div>
            <div className="flex lg:justify-end w-full">
              <span>· PRIVACY · COOKIES · TERMS · PRICING · API · DATA</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
