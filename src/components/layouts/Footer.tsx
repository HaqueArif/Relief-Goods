import { ArrowRight, Euro, Globe } from "lucide-react";
import { NavLink } from "react-router-dom";
import Container from "../Container";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footerBg overflow-x-clip">
      <div className="footerBg-glass-gradient">
        <Container className="">
          <div className="grid md:grid-cols-6 gap-5 md:gap-20 border-b-2 pt-12 pb-[50px]">
            <div className="space-x-2 text-[24px] sm:text-[32px] col-span-1">
              <NavLink to="/">
                <span className=" font-bold text-white">Event</span>
                <span className=" font-[900] text-primary">360</span>
              </NavLink>
            </div>
            <div className="col-span-5 grid md:grid-cols-3 lg:grid-cols-5 gap-5 capitalize text-white">
              <div className="list-none">
                <h4 className="font-semibold">product</h4>
                <li>Pricing</li>
                <li>Overview</li>
                <li>Browse</li>
                <li>Accessibility</li>
              </div>

              <div className="list-none">
                <h4 className="font-semibold">Solutions</h4>
                <li>Brainstorming</li>
                <li>Ideation</li>
                <li>Wireframing</li>
                <li>Research</li>
              </div>

              <div className="list-none">
                <h4 className="font-semibold">Resources</h4>

                <li>Help Center</li>
                <li>Blog</li>
                <li>Tutorials</li>
                <li>FAQs</li>
              </div>

              <div className="list-none">
                <h4 className="font-semibold">Support</h4>
                <li>Contact Us</li>
                <li>Developers</li>
                <li>Documentation</li>
                <li>Integrations</li>
              </div>
              <div className="list-none">
                <h4 className="font-semibold">Company</h4>
                <li>About</li>
                <li>press</li>
                <li>Events</li>
                <li className="flex gap-1">
                  request Demo <ArrowRight />
                </li>
              </div>
            </div>
          </div>
          <div className="text-white flex  flex-col-reverse sm:flex-row gap-5 justify-between py-[37px]">
            <p className="text-center sm:text-start">
              @ 20023. All rights reserved
            </p>
            <div className="flex flex-col sm:flex-row justify-between gap-8">
              <span>Terms</span>
              <span>Privacy</span>
              <span>Contact</span>
              <span className="flex gap-1">
                <Globe /> EN
              </span>
              <span className="flex gap-1">
                <Euro /> Eur
              </span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
