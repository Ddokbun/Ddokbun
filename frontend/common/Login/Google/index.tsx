import Image from "next/image";
import Link from "next/link";
import google from "../../../assets/googleLogin.png";

const GoogleLogin = () => {
  const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID_GOOGLE}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI_GOOGLE}&response_type=code&scope=${process.env.NEXT_PUBLIC_RESPONSE_TYPE}&access_type=${process.env.NEXT_PUBLIC_ACCESS_TYPE}`;

  return (
    <Link href={GOOGLE_AUTH_URL}>
      <div className="google-button">
        <Image src={google} alt="구글 로그인 버튼" width={350} height={50} />
      </div>
    </Link>
  );
};

export default GoogleLogin;
