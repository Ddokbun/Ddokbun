import { Wrapper } from "./styles";
import { Mousewheel, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { MainPlant } from "../../../../types/commerce/home.interface";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperItem from "./SwiperItem";

const SwiperProduct: React.FC<{ data: MainPlant }> = ({ data }) => {
  console.log(data);
  return (
    <Wrapper>
      <h2>Best Sellers</h2>
      <Swiper
        navigation={true}
        slidesPerView={1}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation, Pagination, Mousewheel]}
      >
        {data.map(item => {
          return (
            <SwiperSlide key={item.itemSeq}>
              <SwiperItem key={item.itemSeq} item={item}></SwiperItem>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

export default SwiperProduct;
