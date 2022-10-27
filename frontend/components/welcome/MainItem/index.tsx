import { Wrapper } from "./styles";
import Image from "next/image";
import mainImg from "../../../assets/onboarding/mainImg.jpg";
import kakao from "../../../assets/kakaoLogin.png";

// function loginFormWithKakao() {
//   Kakao.Auth.loginForm({
//     success(authObj) {
//       console.log(authObj.access_token);
//     },
//     fail(err) {
//       console.log(err);
//     },
//   });
// }

const MainItem = () => {
  const CLIENT_ID = "d472544681f74ec321dcb0b1b470b8c1";
  const REDIRECT_URI = "http://localhost:3000";
  // 프런트엔드 리다이랙트 URI 예시
  // REST API 부분을 넣어준다
  // const REDIRECT_URI =  "http://localhost:3000/oauth/callback/kakao";

  // 백엔드 리다이랙트 URI 예시
  // 설정한 리다이렉트 URL을 넣어준다
  // const REDIRECT_URI =  "http://localhost:5000/kakao/code";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <Wrapper>
      <div className="banner-wrap">
        <Image src={mainImg} alt="임시 메인 이미지" className="banner-img" />
        <div className="title">
          <h1>Ddokbun</h1>
          <h2>스마트 화분 어플리케이션</h2>
        </div>
      </div>
      <a href={KAKAO_AUTH_URL}>
        <Image src={kakao} alt="" />
        <div className="kakao-btn"></div>
      </a>
    </Wrapper>
  );
};

export default MainItem;
