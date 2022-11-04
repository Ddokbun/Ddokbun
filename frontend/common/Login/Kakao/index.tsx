import Image from "next/image";
import Link from "next/link";
import kakao from "../../../assets/kakaoLogin.png";

const KakaoLogin = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID_KAKAO}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI_KAKAO}&response_type=code`;

  return (
    <Link href={KAKAO_AUTH_URL}>
      <div>
        <Image src={kakao} alt="카카오 로그인 버튼" width={350} height={50} />
      </div>
    </Link>
  );
};

export default KakaoLogin;
