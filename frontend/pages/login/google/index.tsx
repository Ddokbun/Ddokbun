import type { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/auth";
import { Googlelogin } from "../../../apis/auth";
import Spinner from "../../../common/Spinner";
import { setCookie } from "cookies-next";
import AXIOS from "../../../apis";

const Home: NextPage = () => {
  const router = useRouter();
  const login_code = router.query.code;
  const dispatch = useDispatch();

  useEffect(() => {
    const login = async () => {
      const res = await Googlelogin(login_code);
      if (res?.code === 200) {
        const accessToken = res.content.jwtToken;
        const { userSeq } = res.content;
        setCookie("token", accessToken);
        AXIOS.defaults.headers.common["Authorization"] = `${accessToken}`;
        dispatch(authActions.setUserInfo({ accessToken, userSeq }));
        router.push(`/manage/${userSeq}`);
      }
    };

    login();
  }, [login_code]);

  return (
    <div>
      <main>
        <Spinner />
      </main>
    </div>
  );
};

export default Home;
