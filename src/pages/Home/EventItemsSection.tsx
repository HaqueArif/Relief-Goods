import Container from "@/components/Container";
import item1 from "@/assets/Event/Rectangle 2989.png";
import item2 from "@/assets/Event/Rectangle 2989 (4).png";
import item3 from "@/assets/Event/Rectangle 2989 (2).png";
import item4 from "@/assets/Event/Rectangle 2989 (1).png";
import item5 from "@/assets/Event/Rectangle 2989 (3).png";
import item6 from "@/assets/Event/Rectangle 2989 (5).png";

const EventItemsSection = () => {
  return (
    <section className="mt-[127px]">
      <Container>
        <h1 className="text-center">Event Items</h1>
        <p className="text-center mt-3 mb-[54px] max-w-2xl mx-auto">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>

        {/* <div className="grid grid-cols-12 grid-rows-2 gap-5">
          <div className="col-span-12 md:col-span-6 lg:col-span-4  ">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 glass-gradient-service p-5">
                <img className="w-full" src={item1} alt="" />
                <h4 className="mt-3 md:text-2xl font-[500]">Event Item - 1</h4>
              </div>

              <div className="col-span-12 sm:col-span-6  glass-gradient-service p-5">
                <img className="w-full" src={item6} alt="event" />
                <h4 className="mt-3 md:text-2xl font-[500] ">Event Item - 2</h4>
              </div>
              <div className="col-span-12 sm:col-span-6 glass-gradient-service p-5">
                <img className="w-full" src={item2} alt="event" />
                <h4 className="mt-3 md:text-2xl font-[500]">Event Item - 3</h4>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
            <div className="grid grid-cols-6 gap-5">
              <div className="col-span-6 glass-gradient-service p-5 max-h-[275px]">
                <img className="w-full max-h-[275px]" src={item4} alt="event" />
                <h4 className="mt-3 md:text-2xl font-[500]">Event Item - 4</h4>
              </div>

              <div className="col-span-6 glass-gradient-service p-5">
                <img
                  className="w-full  max-h-[275px]"
                  src={item5}
                  alt="event"
                />
                <h4 className="mt-3 md:text-2xl font-[500]">Event Item - 5</h4>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4 glass-gradient-service p-5">
            <img className="w-full" src={item3} alt="event" />
            <h4 className="mt-3 md:text-2xl font-[500]">Event Item - 6</h4>
          </div>
        </div> */}

        <div className="grid grid-cols-12 gap-5 mb-40 text-center">
          <div className="w-full col-span-12 md:col-span-6 lg:col-span-4">
            <div className="grid grid-cols-2 gap-5">
              <div className="glass-gradient-service p-5 col-span-2 ">
                <img className="w-full" src={item1} alt="" />
                <h4 className="mt-3 md:text-2xl font-[500]">Event Item - 1</h4>
              </div>
              <div className="w-full h-full glass-gradient-service p-5 col-span-2 sm:col-span-1 bg-yellow-500">
                <img className="w-full" src={item6} alt="event" />
                <h4 className="mt-3 md:text-2xl font-[500] ">Event Item - 2</h4>
              </div>
              <div className="w-full h-full glass-gradient-service p-5 col-span-2 sm:col-span-1 bg-red-500">
                <img className="w-full" src={item2} alt="event" />
                <h4 className="mt-3 md:text-2xl font-[500]">Event Item - 3</h4>
              </div>
            </div>
          </div>
          <div className="w-full col-span-12 md:col-span-6 lg:col-span-4">
            <div className="grid grid-cols-1 gap-5">
              <div className="glass-gradient-service p-5">
                <img className="w-full max-h-[275px]" src={item4} alt="event" />
                <h4 className="mt-3 md:text-2xl font-[500]">Event Item - 4</h4>
              </div>
              <div className="glass-gradient-service p-5">
                <img
                  className="w-full  max-h-[275px]"
                  src={item5}
                  alt="event"
                />
                <h4 className="mt-3 md:text-2xl font-[500]">Event Item - 5</h4>
              </div>
            </div>
          </div>
          <div className="w-full glass-gradient-service p-5 col-span-12 md:col-span-6 lg:col-span-4">
            <img className="w-full" src={item3} alt="event" />
            <h4 className="mt-3 md:text-2xl font-[500]">Event Item - 6</h4>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EventItemsSection;
