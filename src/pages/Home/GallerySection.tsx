import Container from "@/components/Container";
import "@/styles/Gallery.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import GalleryHeading from "../../components/GalleryHeading";

const GallerySection = () => {
  return (
    <Container className="my-[250px]">
      <div className="">
        {/* Headings and details */}
        <GalleryHeading />
        {/* slider */}
        <>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              300: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            modules={[Autoplay, EffectCoverflow]}
            className="mySwiper"
          >
            <div className="grid">
              <SwiperSlide>
                <img src="https://i.postimg.cc/0NLv9KvK/Water-Containers.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.postimg.cc/fRqZgggK/Warm-Clothing-Packs.webp" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.postimg.cc/2SSrGfTy/Solar-Lanterns.webp" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.postimg.cc/gJ8WjccS/Shelter-Kits.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.postimg.cc/dtvq7Cy8/Relief-Goods-images-of-Medical-Supplies.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.postimg.cc/xTtSc4Y2/Hygiene-Essentials.webp" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.postimg.cc/hPSB4qks/Food-Supplies.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.postimg.cc/Hkn159s7/Emergency-Blankets.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.postimg.cc/brRf06t1/Communication-Supplies.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.postimg.cc/L4kSMsbh/Children-s-Supplies1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.postimg.cc/W4DjR6BP/Children-s-Supplies.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.postimg.cc/8cGV68j1/Agricultural-Supplies.jpg" />
              </SwiperSlide>
            </div>
          </Swiper>
        </>
      </div>
    </Container>
  );
};

export default GallerySection;
