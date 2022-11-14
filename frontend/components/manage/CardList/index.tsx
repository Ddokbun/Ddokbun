import { motion } from "framer-motion";
import { FC } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { PlantListType } from "../../../pages/manage/[userseq]";
import CardItem from "../CardItem";
import { Wrapper } from "./styles";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Props {
  plantsList: PlantListType[];
}

const CardList: FC<Props> = ({ plantsList }) => {
  return (
    <Wrapper>
      <Swiper
        navigation={true}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
      >
        {plantsList?.map(plant => {
          return (
            <SwiperSlide key={plant.potSerial}>
              <CardItem
                plantSeq={plant.plantSeq}
                potSerial={plant.potSerial}
                plantNickname={plant.plantNickname}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

export default CardList;
