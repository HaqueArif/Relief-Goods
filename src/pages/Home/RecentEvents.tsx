import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import event1 from "@/assets/Recent Events/Rectangle 183.png";
import event2 from "@/assets/Recent Events/Rectangle 184.png";
import event3 from "@/assets/Recent Events/Rectangle 181.png";
import event4 from "@/assets/Recent Events/Rectangle 182.png";
import event5 from "@/assets/Recent Events/Rectangle 185.png";
import event6 from "@/assets/Recent Events/Rectangle 186.png";

const recentEvents = [
  { image: event1 },
  { image: event2 },
  { image: event3 },
  { image: event4 },
  { image: event5 },
  { image: event6 },
];

const RecentEvents = () => {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2  md:gap-10 xl:gap-[105px] place-items-center py-20 lg:py-[115px]">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 order-2 md:order-1">
        {recentEvents.map((item, i) => (
          <img
            key={i}
            className={i === 2 || i === 3 ? "rounded-full" : "rounded-3xl"}
            src={item.image}
            alt=""
          />
        ))}
      </div>
      <div className="order-1 md:order-2 mb-10 md:mb-0">
        <h1 className="">Recent Events</h1>
        <p className="mt-2 mb-4 lg:mt-6 lg:mb-12 w-[85%]">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>

        <Button className="btn-primary">Learn more</Button>
      </div>
    </Container>
  );
};

export default RecentEvents;
