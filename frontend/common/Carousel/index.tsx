import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";
import { Wrapper } from "./styles";
import ProductCard from "../Cards/ProductCard";
const Carousel: React.FC = () => {
  return (
    <Wrapper>
      <Swiper
        navigation={true}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1500: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        spaceBetween={30}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <ProductCard isResponsive={false} price={18000} id={1} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard isResponsive={false} price={18000} id={1} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard isResponsive={false} price={18000} id={1} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard isResponsive={false} price={18000} id={1} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard isResponsive={false} price={18000} id={1} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard isResponsive={false} price={18000} id={1} />
        </SwiperSlide> */}
      </Swiper>
    </Wrapper>
  );
};

export default Carousel;
