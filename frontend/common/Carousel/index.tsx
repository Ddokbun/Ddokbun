import React, { useEffect, useRef, useState } from "react";
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
import { ListArray, ListObjectItem } from "../../types/commerce/list.interface";

const Carousel: React.FC<{ items: ListObjectItem[] }> = ({ items }) => {
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
        }}
        spaceBetween={30}
        className="mySwiper"
      >
        {items &&
          items.map(item => {
            return (
              <SwiperSlide key={item?.itemSeq}>
                <ProductCard isResponsive={false} item={item} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Wrapper>
  );
};

export default Carousel;
