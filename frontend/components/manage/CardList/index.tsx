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
import Link from "next/link";

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
        spaceBetween={50}
        centerInsufficientSlides={true}
        breakpoints={{
          600: { slidesPerView: 3 },
        }}
      >
        {plantsList?.map(plant => {
          return (
            <SwiperSlide key={plant.potSerial}>
              <CardItem potSerial={plant.potSerial!} />
            </SwiperSlide>
          );
        })}
        <SwiperSlide key={"add"}>
          <Link href={"/manage/add"}>
            <button className="plant-add-container"></button>
          </Link>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default CardList;
