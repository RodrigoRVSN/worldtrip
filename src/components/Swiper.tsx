import { Image } from "@chakra-ui/image";
import { Swiper as Slider, SwiperSlide } from "swiper/react";

export function Swiper() {
  return (
    <Slider
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Slider>
  );
}
