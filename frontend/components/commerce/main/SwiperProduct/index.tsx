import { Wrapper } from "./styles";
import { Mousewheel, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { MainPlant } from "../../../../types/commerce/home.interface";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperItem from "./SwiperItem";

const SwiperProduct: React.FC<{ data: MainPlant }> = ({ data }) => {
  return (
    <Wrapper>
      <h2>Best Sellers</h2>
      <Swiper
        navigation={true}
        slidesPerView={3}
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
