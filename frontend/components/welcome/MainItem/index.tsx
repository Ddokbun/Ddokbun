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
  const CLIENT_ID = "e7b3aeb0998dc77e6832174667e50b90"; // REST API 부분을 넣어준다
  const REDIRECT_URI = "https://k7d208.p.ssafy.io/api/user/login/oauth/kakao"; // 설정한 리다이렉트 URL을 넣어준다
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  // const kakaoLogin = async () => {
  //   // 카카오 초기화
  //   const kakao = kakaoInit();
  //   // 카카오 로그인 구현
  //   // throughTalk: false,
  //   kakao.Auth.login({
  //     success: () => {
  //       kakao.API.request({
  //         url: "/v2/user/me", // 사용자 정보 가져오기
  //         success: (res: any) => {
  //           console.log("성공!", res);
  //         },
  //         fail: (error: any) => {
  //           console.log("호출실패", error);
  //         },
  //       });
  //     },
  //     fail: (error: any) => {
  //       console.log("요청자체가 실패:", error);
  //     },
  //   });
  // };

  const loginFormWithKakao = () => {
    const kakao = kakaoInit();
    kakao.Auth.login({
      success(authObj: any) {
        console.log(authObj);
      },
      fail(err: any) {
        console.log(err);
      },
    });
  };

  // const onSuccess = async (res: any) => {
  //   await axios
  //     .post(`/api/user/login/oauth/kakao`, {
  //       access_token: res.access_token,
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       alert("서버에서 오류발생");
  //     });
  //   Router.push("/");
  // };

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
          <div>
            <Image src={kakao} alt="구글 로그인 버튼" width={350} height={50} />
          </div>
          <div>
            <LoginBtn path={`commerce/products/list`} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MainItem;
