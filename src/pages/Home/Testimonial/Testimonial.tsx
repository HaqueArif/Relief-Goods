/* eslint-disable @typescript-eslint/no-explicit-any */
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Testimonial.css";
import Container from "@/components/Container";
import { useRef, useState } from "react";
import Content from "./TestimonialItem";
import { NextButton, PrevButton } from "@/components/ui/TestimonialButtons";
import { fadeInLeft, fadeInRight, flipLeft } from "@/Animation/useAnimation";
import { testimonials } from "@/data/Testimonial.Data";

const Testimonial = () => {
  const [slideBegOrNot, handleSlideByState] = useState({
    isFirst: true,
    isLast: false,
  });
  const SlideRef = useRef<SwiperRef | null>(null);

  const onSlideChange = (swiper: SwiperType) => {
    handleSlideByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isBeginning,
    });
  };

  const handleNext = () => {
    SlideRef.current!.swiper.slideNext();
  };

  const handlePrev = () => {
    SlideRef.current!.swiper.slidePrev();
  };

  const { isLast, isFirst } = slideBegOrNot;

  return (
    <Container className="pt-[94px] pb-[106px]">
      <div className="flex flex-wrap justify-between mb-10 jd:mb-[79px]">
        <motion.h1
          variants={fadeInLeft}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="capitalize "
        >
          What Our Client Said about us
        </motion.h1>

        {/*/////////// Navigation ///////////*/}
        <motion.div
          variants={fadeInRight}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <PrevButton onClick={handlePrev} isDisabled={isFirst} />
          <NextButton onClick={handleNext} isDisabled={isLast} />
        </motion.div>
      </div>
      {/*/////////// Slider ///////////*/}
      <motion.div
        variants={flipLeft}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
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
          {/*/////////// Slider Components ///////////*/}
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
      </motion.div>
    </Container>
  );
};

export default Testimonial;
