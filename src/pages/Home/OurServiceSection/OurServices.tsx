import service1 from "@/assets/Services/Rectangle 5 (1).png";
import service2 from "@/assets/Services/Rectangle 5.png";
import service3 from "@/assets/Services/Reactangle6.png";
import Container from "@/components/Container";
import "./OurServices.css";
import ServiceCard from "@/components/ui/OurServiceSectionCard";

type ServiceData = {
  image: string;
  title: string;
  description: string;
  features: string[];
};

const OurServices = () => {
  const services: ServiceData[] = [
    {
      image: service1,
      title: "Corporate Event",
      description:
        "Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.",
      features: [
        "One day pass access all lectures",
        "Lunch and Snack",
        "Meet Event Speaker",
        "Front Seat",
        "One day pass access all lectures",
      ],
    },
    {
      image: service2,
      title: "Organization Event",
      description:
        "Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.",
      features: [
        "One day pass access all lectures",
        "Lunch and Snack",
        "Meet Event Speaker",
        "Front Seat",
        "One day pass access all lectures",
      ],
    },
    {
      image: service3,
      title: "Wedding Event",
      description:
        "Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.",
      features: [
        "One day pass access all lectures",
        "Lunch and Snack",
        "Meet Event Speaker",
        "Front Seat",
        "One day pass access all lectures",
      ],
    },
  ];
  return (
    <section className="service-section">
      <Container>
        <div className="header-section">
          <h1 className="">Our Services</h1>
          <p className="header-details">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>

          <div className="service-divider">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurServices;
