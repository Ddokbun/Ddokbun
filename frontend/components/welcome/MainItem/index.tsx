import { Wrapper } from "./styles";
import Image from "next/image";
import Link from "next/link";
import mainImg from "../../../assets/onboarding/mainImg.jpg";
import kakao from "../../../assets/kakaoLogin.png";
import google from "../../../assets/googleLogin.jpg";
import { LoginButton } from "../../../common/Button";

const MainItem = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID_KAKAO}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI_KAKAO}&response_type=code`;

  const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID_GOOGLE}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI_GOOGLE}&response_type=code&scope=${process.env.NEXT_PUBLIC_RESPONSE_TYPE}&access_type=${process.env.NEXT_PUBLIC_ACCESS_TYPE}`;

  console.log(GOOGLE_AUTH_URL);
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
          <Link href={KAKAO_AUTH_URL}>
            <div>
              <Image
                src={kakao}
                alt="카카오 로그인 버튼"
                width={350}
                height={50}
              />
            </div>
          </Link>
          <Link href={GOOGLE_AUTH_URL}>
            <div className="google-button">
              <Image
                src={google}
                alt="구글 로그인 버튼"
                width={350}
                height={50}
              />
            </div>
          </Link>
          <div>
            <LoginButton path="/commerce" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MainItem;
