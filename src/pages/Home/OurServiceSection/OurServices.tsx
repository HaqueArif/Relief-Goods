import service1 from "@/assets/Services/Rectangle 5 (1).png";
import service2 from "@/assets/Services/Rectangle 5.png";
import service3 from "@/assets/Services/Reactangle6.png";
import Container from "@/components/Container";
import "@/styles/OurServices.css";
import ServiceCard from "@/components/ui/OurServiceSectionCard";
import { motion } from "framer-motion";

type ServiceData = {
  image: string;
  title: string;
  description: string;
  features: string[];
};

const animateOurServiceDetails = {
  initial: { opacity: 0, x: 200 },

  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 3, type: "spring", bounce: 0.5 },
  },
};
const animateOurServiceHeader = {
  initial: { opacity: 0, x: -200 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 3, type: "spring", bounce: 0.5 },
  },
};
const animationVariants = [
  {
    initial: { opacity: 0, x: -300 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
  },
  {
    initial: { opacity: 0, y: 100 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
  },
  {
    initial: { opacity: 0, x: 300 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
  },
];

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
          <motion.h1
            variants={animateOurServiceHeader}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            Our Services
          </motion.h1>
          <motion.p
            variants={animateOurServiceDetails}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="header-details"
          >
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </motion.p>

          <div className="service-divider">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={animationVariants[index]}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="service-card-style"
              >
                <ServiceCard key={index} {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurServices;
