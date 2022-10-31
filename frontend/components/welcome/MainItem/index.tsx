import { Wrapper } from "./styles";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import mainImg from "../../../assets/onboarding/mainImg.jpg";
import kakao from "../../../assets/kakaoLogin.png";
import { LoginBtn } from "../../../common/Button";

export const kakaoInit = () => {
  const kakao = (window as any).Kakao;
  if (!kakao.isInitialized()) {
    kakao.init("3f4847bbf4c1f2a936b9fdff9d098303");
    console.log(kakao.isInitialized());
  }

  return kakao;
};

const MainItem = () => {
  const CLIENT_ID_KAKAO = "e7b3aeb0998dc77e6832174667e50b90"; // REST API 부분을 넣어준다
  const REDIRECT_URI_KAKAO = "http://localhost:3000/"; // 설정한 리다이렉트 URL을 넣어준다
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID_KAKAO}&redirect_uri=${REDIRECT_URI_KAKAO}&response_type=code`;

  const CLIENT_ID_GOOGLE =
    "127690755793-5kgtvm8bmt7dhacov2qitf3d90h62reb.apps.googleusercontent.com";
  const REDIRECT_URI_GOOGLE = "http://localhost:3000/";
  const RESPONSE_TYPE = "email%20profile%20openid";
  const ACCESS_TYPE = "offline";
  const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID_GOOGLE}&redirect_uri=${REDIRECT_URI_GOOGLE}&response_type=code&scope=${RESPONSE_TYPE}&access_type=${ACCESS_TYPE}`;

  return (
    <Wrapper>
      <div className="banner-wrap">
        <div className="fill-img">
          <Image
            layout="fill"
            src={mainImg}
            alt="임시 메인 이미지"
            className="banner-img"
          />
        </div>
        <div className="title">
          <h1>Ddokbun</h1>
          <h2>스마트 화분 어플리케이션</h2>
        </div>
        <div className="login-button">
          <Link href={KAKAO_AUTH_URL}>
            <a>
              {/* <Button onClick={loginFormWithKakao}> */}
              <div>
                <Image
                  src={kakao}
                  alt="카카오 로그인 버튼"
                  width={350}
                  height={50}
                />
              </div>
              {/* </Button> */}
            </a>
          </Link>
          <Link href={GOOGLE_AUTH_URL}>
            <Image src={kakao} alt="구글 로그인 버튼" width={350} height={50} />
          </Link>
          <div>
            <LoginBtn path={`commerce/products/list`} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MainItem;
