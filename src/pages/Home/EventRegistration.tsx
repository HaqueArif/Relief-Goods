import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React from "react";

const EventRegistration = () => {
  return (
    <div className=" py-40  ">
      <Container className="  ">
        <div className="grid md:grid-cols-2 gap-5  ">
          <div className="rounded-2xl px-8  border-2 py-10 glass-gradient">
            <h2 className="text-4xl font-semibold">
              A complete platform for your{" "}
              <span className="gradient-text">events</span>
            </h2>
            <p className="my-3">
              Maximize the impact of all your meetings and events with
              easy-to-use, integrated event technology
            </p>
            <p className="">
              Request a demo to see how you can:
              <ul className="leading-8">
                <li>* Plan and market events</li>
                <li>* Easily manage events onsite</li>
                <li>* Engage with your audience</li>
                <li>* Measure and analyze results</li>
              </ul>
            </p>
            <div className="flex items-center">
              <h4 className="font-bold text-lg">
                Try Event 360 registration for free
              </h4>
              <ChevronRight />
            </div>
          </div>
          <div className=" text-white bg-[#F249C8]  rounded-2xl">
            <div className="glass-gradient px-8 py-10">
              <h3 className="text-2xl font-semibold mb-5">
                See our event management tools in action
              </h3>
              <div className="flex flex-col gap-2">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName">
                      First Name <span className="text-red-900">*</span>
                    </label>
                    <input
                      className="w-full h-10 rounded-sm"
                      type="text"
                      id="firstName"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName">
                      Last Name <span className="text-red-900">*</span>
                    </label>
                    <input
                      className="w-full h-10 rounded-sm"
                      type="text"
                      id="lastName"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email">
                    Work email <span className="text-red-900">*</span>
                  </label>
                  <input
                    className="w-full h-10 rounded-sm"
                    type="email"
                    id="email"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="organization">
                      Organization <span className="text-red-900">*</span>
                    </label>
                    <input
                      className="w-full h-10 rounded-sm"
                      type="text"
                      id="organization"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">
                      Phone <span className="text-red-900">*</span>
                    </label>
                    <input
                      className="w-full h-10 rounded-sm"
                      type="text"
                      id="phone"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="country">
                    Country <span className="text-red-900">*</span>
                  </label>
                  <input className="w-full h-10 rounded-sm" type="select" />
                </div>
                <div className="flex items-start gap-2 mt-5">
                  <input type="checkbox" />
                  <div>
                    <p>
                      I agree to receive emails from Event 360, Inc. about
                      relevant content, products and services. I understand I
                      can manage my communication preferences or{" "}
                      <a href="">unsubscribe</a> at any time.
                    </p>
                    <p className="mt-5">
                      Please refer to our <a href="">Privacy Policy</a> or
                      <a href=""> Contact Us</a> for more details.
                    </p>
                  </div>
                </div>
                <Button className="btn-primary">Request a demo</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EventRegistration;
