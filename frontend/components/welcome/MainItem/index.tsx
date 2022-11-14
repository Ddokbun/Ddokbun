import { Wrapper } from "./styles";
import Image from "next/image";
import mainImg from "../../../assets/onboarding/mainImg.jpg";
import { LoginButton } from "../../../common/Button";
import KakaoLogin from "../../../common/Login/Kakao";
import GoogleLogin from "../../../common/Login/Google";
import { CardHover } from "../../../styles/animations/animation";
import { motion } from "framer-motion";

const MainItem = () => {
  return (
    <Wrapper>
      <div className="banner-wrap">
        <div className="fill-img">
          <Image
            layout="fill"
            src={mainImg}
            alt="똑분 Ddokbun 컨텐츠 설명 이미지"
            className="banner-img"
          />
        </div>
        <div className="title">
          <h1>Ddokbun</h1>
          <h2>스마트 화분 어플리케이션</h2>
        </div>
        <div className="login-button">
          <KakaoLogin></KakaoLogin>
          <GoogleLogin></GoogleLogin>
          <LoginButton path="/search/camera" />
        </div>
      </div>
    </Wrapper>
  );
};

export default MainItem;
