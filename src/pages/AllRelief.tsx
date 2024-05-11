import Container from "@/components/Container";
import ServiceCard from "@/components/WorkCard";
import { useGetSuppliesQuery } from "@/redux/fetures/supply/supplyApi";

const AllRelief = () => {
  const { data } = useGetSuppliesQuery({});

  return (
    <Container>
      <h1 className="pt-40 text-center mb-5 ">Explore Relief Goods & Donate</h1>
      <p className="text-center mb-20">
        Welcome to our "Explore Relief Goods & Donate" page, where you can
        discover a wide range of essential relief goods available for donation.
        Browse through our collection of relief supplies, including food, water,
        shelter materials, medical supplies, and more. Each item represents a
        lifeline for those in need, and your contribution can make a significant
        impact on their lives. Explore the selection, find the items you wish to
        support, and take action by donating today. Together, we can make a
        difference in the lives of those affected by crises and disasters
        worldwide.
      </p>
      <div className="service-divider">
        {data?.map((service, index) => (
          <div key={index} className="relative service-card-style">
            <ServiceCard key={index} {...service} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AllRelief;
