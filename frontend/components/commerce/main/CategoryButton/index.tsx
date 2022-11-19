import { Wrapper } from "./styles";
import Link from "next/link";
import Home from "../../../../assets/commerce/plants/home-banner.jpg";
import Pet from "../../../../assets/commerce/plants/pet-banner.jpg";
import Air from "../../../../assets/commerce/plants/air-banner.jpg";
import Beginner from "../../../../assets/commerce/plants/starter-banner.jpg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CategoryButton = () => {
  return (
    <Wrapper>
      <h2>Category</h2>
      <div className="card-wrap">
        <Link href={"/commerce/list/초보집사"}>
          <div className="img-wrap">
            <Image
              src={Beginner}
              alt="오늘의 식물 이미지"
              layout="fill"
              objectFit="cover"
            />
            <div className="font-box">
              <div className="font">
                <h3>For Beginner</h3>
                <h4>#초보집사</h4>
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/commerce/list/집꾸미기"}>
          <div className="img-wrap">
            <Image
              src={Home}
              alt="오늘의 식물 이미지"
              layout="fill"
              objectFit="cover"
            />
            <div className="font-box">
              <div className="font">
                <h3>Home Decoration</h3>
                <h4>#집꾸미기</h4>
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/commerce/list/반려동물"}>
          <div className="img-wrap">
            <Image
              src={Pet}
              alt="오늘의 식물 이미지"
              layout="fill"
              objectFit="cover"
            />
            <div className="font-box">
              <div className="font">
                <h3>Gardening with Pets</h3>
                <h4>#반려동물</h4>
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/commerce/list/공기정화"}>
          <div className="img-wrap">
            <Image
              src={Air}
              alt="오늘의 식물 이미지"
              layout="fill"
              objectFit="cover"
            />
            <div className="font-box">
              <div className="font">
                <h3>Air Purifying Plants</h3>
                <h4>#공기정화</h4>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <Swiper
        navigation={true}
        slidesPerView={1}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation, Pagination, Mousewheel]}
      >
        <SwiperSlide>
          <Link href={"/commerce/list/초보집사"}>
            <div className="img-wrap">
              <Image
                src={Beginner}
                alt="오늘의 식물 이미지"
                layout="fill"
                objectFit="cover"
              />
              <div className="font-box">
                <div className="font">
                  <h3>For Beginner</h3>
                  <h4>#초보집사</h4>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/commerce/list/집꾸미기"}>
            <div className="img-wrap">
              <Image
                src={Home}
                alt="오늘의 식물 이미지"
                layout="fill"
                objectFit="cover"
              />
              <div className="font-box">
                <div className="font">
                  <h3>Home Decoration</h3>
                  <h4>#집꾸미기</h4>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/commerce/list/반려동물"}>
            <div className="img-wrap">
              <Image
                src={Pet}
                alt="오늘의 식물 이미지"
                layout="fill"
                objectFit="cover"
              />
              <div className="font-box">
                <div className="font">
                  <h3>Gardening with Pets</h3>
                  <h4>#반려동물</h4>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/commerce/list/공기정화"}>
            <div className="img-wrap">
              <Image
                src={Air}
                alt="오늘의 식물 이미지"
                layout="fill"
                objectFit="cover"
              />
              <div className="font-box">
                <div className="font">
                  <h3>Air Purifying Plants</h3>
                  <h4>#공기정화</h4>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default CategoryButton;
