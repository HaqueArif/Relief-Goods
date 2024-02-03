import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Testimonial.css";
import Container from "@/components/Container";
import client1 from "@/assets/Client/Ellipse 80.svg";
import client2 from "@/assets/Client/Ellipse 80 (1).svg";
import client3 from "@/assets/Client/Ellipse 80 (2).svg";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import Content from "./Content";
import { NextButton, PrevButton } from "@/components/ui/TestimonialButtons";

const testimonials = [
  {
    id: 1,
    userName: "Amelia Joseph",
    title: "Chief Manager",
    testimonial:
      "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
    image: client1,
  },
  {
    id: 2,
    userName: "Jacob Joshua",
    title: "Chief Manager",
    testimonial:
      "I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it's got to be Embrace!",
    image: client2,
  },
  {
    id: 3,
    userName: "Amelia Joseph2",
    title: "Chief Manager",
    testimonial:
      "Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!",
    image: client3,
  },
  {
    id: 4,
    userName: "Amelia Joseph",
    title: "Chief Manager",
    testimonial:
      "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
    image: client1,
  },
  {
    id: 5,
    userName: "Jacob Joshua",
    title: "Chief Manager",
    testimonial:
      "I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it's got to be Embrace!",
    image: client2,
  },
  {
    id: 6,
    userName: "Amelia Joseph",
    title: "Chief Manager",
    testimonial:
      "Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!",
    image: client3,
  },
];

const Testimonial = () => {
  const [slideBegOrNot, handleSlideByState] = useState({
    isFirst: true,
    isLast: false,
  });
  const SlideRef = useRef();

  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };

  const onSlideChange = (swiper) => {
    handleSlideByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });
  };

  const { isLast, isFirst } = slideBegOrNot;

  return (
    <Container className="pt-[94px] pb-[106px]">
      <div className="flex flex-wrap justify-between mb-[79px]">
        <h1 className="capitalize ">What Our Client Said about us</h1>

        <div className="">
          <PrevButton onClick={handlePrev} isDisabled={isFirst} />
          <NextButton onClick={handleNext} isDisabled={isLast} />
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        className={"mySwiper"}
        ref={SlideRef}
        onSlideChange={onSlideChange}
        pagination={{
          el: ".swiper-paginations",
          type: "fraction",
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          390: {
            slidesPerView: 1,
          },
          502: {
            slidesPerView: 1,
          },
          802: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 2.5,
          },
        }}
      >
        {testimonials.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Content
                key={item.id}
                userName={item.userName}
                image={item.image}
                title={item.title}
                testimonial={item.testimonial}
                alt={item.userName}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default Testimonial;
