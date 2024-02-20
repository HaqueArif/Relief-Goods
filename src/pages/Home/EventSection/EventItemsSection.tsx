import Container from "@/components/Container";
import "@/styles/EventItems.css";
import { useGetEventItems } from "@/api/dashboard/eventItems/event.hook";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/Animation/useAnimation";
import {
  EventItem01,
  EventItem02,
  EventItem03,
  EventItem04,
  EventItem05,
  EventItem06,
} from "./EventItems";
import { DestructuredData, EventProps } from "@/components/Types";

const EventItemsSection = () => {
  const { data, isLoading, isError } = useGetEventItems();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Something went wrong...</p>;
  }

  const firstSixItemsWithIndex = data?.data
    ?.slice(0, 6)
    .map((item: EventProps, index: number) => ({ ...item, index }));

  const destructuredData: DestructuredData = firstSixItemsWithIndex.reduce(
    (acc: DestructuredData, curr: { item: string }, index: number) => {
      acc[`item${index + 1}` as keyof DestructuredData] = curr.item;
      return acc;
    },

    {}
  );

  return (
    <section className="measurement">
      <Container>
        <motion.h1
          variants={fadeInRight}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="heading"
        >
          Event Items
        </motion.h1>
        <motion.p
          variants={fadeInLeft}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="heading-details"
        >
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </motion.p>
        <div className="items-divider">
          <EventItem01 thumbnail={destructuredData?.item1} />
          <EventItem02 thumbnail={destructuredData?.item2} />
          <EventItem03 thumbnail={destructuredData?.item3} />
          <EventItem04 thumbnail={destructuredData?.item4} />
          <EventItem05 thumbnail={destructuredData?.item5} />
          <EventItem06 thumbnail={destructuredData?.item6} />
        </div>
      </Container>
    </section>
  );
};

export default EventItemsSection;
