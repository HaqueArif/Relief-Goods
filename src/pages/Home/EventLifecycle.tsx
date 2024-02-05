import Container from "@/components/Container";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

const EventLifecycle = () => {
  return (
    <div className="mt-36 mb-40 pricingBgColor overflow-x-clip">
      <Container className=" ">
        <h1 className="text-center md:w-[60%]  mx-auto mb-40">
          Event Planning And Marketing In One Place
        </h1>
        <div className="">
          <div className="">
            <div className=" btn-glass-gradient hover:rotate-[360deg] duration-1000  relative w-[250px] h-[250px] sm:w-[400px] sm:h-[400px]  mx-auto  border-2 border-primary rounded-full ">
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] w-[80%] text-center">
                <h2 className="text-2xl font-bold mb-1">
                  Event <span className="text-primary">360</span>
                </h2>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Event Lifecycle
                </h2>
                <p className="text-sm sm:text-base font-light w-[90%] mx-auto">
                  Seamless event marketing and management, real results
                </p>
              </div>
              {/* ///////// arrows ///////// */}
              <span className="absolute top-[13%] left-[10%] ">
                <ChevronsRight className="-rotate-45" />
              </span>
              <span className="absolute bottom-[13%] left-[10%] ">
                <ChevronsRight className="-rotate-[125deg]" />
              </span>
              <span className="absolute bottom-[13%] right-[10%] ">
                <ChevronsLeft className="-rotate-45" />
              </span>
              <span className="absolute top-[13%] right-[10%] ">
                <ChevronsLeft className="-rotate-[125deg]" />
              </span>
              {/* ///////// buttons ///////// */}
              <button className="rounded-full w-20 h-20 p-1 sm:w-36 sm:h-36 absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] bg-primary text-primary text-md sm:text-lg text-white hover:bg-primary duration-100  hover:scale-105">
                Post Event
              </button>
              <button className="rounded-full w-20 h-20 p-1 sm:w-36 sm:h-36 absolute top-[50%] right-0 translate-y-[-50%] translate-x-[50%] bg-primary  text-md sm:text-lg text-white hover:bg-primary duration-100  hover:scale-105 text-primary">
                Planning
              </button>
              <button className="rounded-full w-20 h-20 p-1 sm:w-36 sm:h-36 absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%] bg-primary text-primary text-md sm:text-lg text-white hover:bg-primary duration-100  hover:scale-105">
                Promotion
              </button>
              <button className="rounded-full w-20 h-20 p-1 sm:w-36 sm:h-36 absolute top-[50%] left-[0] translate-y-[-50%] translate-x-[-50%] bg-primary  text-md sm:text-lg text-white hover:bg-primary duration-100  hover:scale-105 text-primary block">
                Day Of Event
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EventLifecycle;
