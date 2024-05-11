import Container from "@/components/Container";

import { useParams } from "react-router-dom";
import Donate from "./Donate";
import { useGetSuppliesQuery } from "@/redux/fetures/supply/supplyApi";

const ReliefDetails = () => {
  const { _id } = useParams();
  const { data } = useGetSuppliesQuery({});
  console.log("_id==>", _id);
  console.log("data==>", data);
  const matchedServices = data?.filter((service) => service._id === _id);
  console.log("matchedServices==>", matchedServices);
  // console.log("title", title);

  return (
    <Container>
      <div className="pb-60 pt-40 ">
        <div className="">
          {matchedServices?.map((service) => (
            <div>
              <div className="grid grid-cols-2 gap-5">
                {/* Thumbnail */}
                <div>
                  <img src={service.image} alt="" />
                </div>
                {/* body */}
                <div className=" pt-5">
                  <h3 className="text-4xl  font-bold underline-offset-8 underline">
                    About {service.title}
                  </h3>
                  <p className="text-xl mt-10 ">
                    <span className="font-bold text-[#566B84]">Category: </span>
                    {service.category}
                  </p>
                  <p className="text-xl">
                    <span className="font-bold text-[#566B84]">Amount: </span>
                    {service.amount}
                  </p>
                  <div>
                    <Donate
                      _id={service._id}
                      title={service.title}
                      category={service.category}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10 font-light">
                <div>
                  <p className="text-xl mt-40 text-justify">
                    <span className="underline font-semibold mr-2">
                      Description:
                    </span>
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ReliefDetails;
