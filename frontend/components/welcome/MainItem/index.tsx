import { Wrapper } from "./styles";
import Image from "next/image";
import { Button } from "../../../common/Button/styles";
import Router from "next/router";
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

export const kakaoInit = () => {
  const kakao = (window as any).Kakao;
  if (!kakao.isInitialized()) {
    kakao.init("f043787ac5dea0cb9c9279ab765c592b");
    console.log(kakao.isInitialized());
  }

  return kakao;
};

const MainItem = () => {
  const CLIENT_ID = "d472544681f74ec321dcb0b1b470b8c1"; // REST API 부분을 넣어준다
  const REDIRECT_URI = "http://localhost:3000"; // 설정한 리다이렉트 URL을 넣어준다
  // 프런트엔드 리다이랙트 URI 예시
  // const REDIRECT_URI =  "http://localhost:3000/oauth/callback/kakao";

  // 백엔드 리다이랙트 URI 예시
  // const REDIRECT_URI =  "http://localhost:5000/kakao/code";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const kakaoLogin = async () => {
    // 카카오 초기화
    const kakao = kakaoInit();
    // 카카오 로그인 구현
    kakao.Auth.login({
      success: () => {
        kakao.API.request({
          url: "/v2/user/me", // 사용자 정보 가져오기
          success: (res: any) => {
            // 로그인 성공할 경우 정보 확인 후 /kakao 페이지로 push
            console.log(res);
            Router.push("/search");
          },
          fail: (error: any) => {
            console.log(error);
          },
        });
      },
      fail: (error: any) => {
        console.log(error);
      },
    });
  };

  return (
    <Wrapper>
      <div className="banner-wrap">
        <Image src={mainImg} alt="임시 메인 이미지" className="banner-img" />
        <div className="title">
          <h1>Ddokbun</h1>
          <h2>스마트 화분 어플리케이션</h2>
        </div>
      </div>
      {/* <a href={KAKAO_AUTH_URL}> */}
      <Button onClick={kakaoLogin}>
        <Image src={kakao} alt="" />
      </Button>
      <div className="kakao-btn"></div>
      {/* </a> */}
    </Wrapper>
  );
};

export default MainItem;
