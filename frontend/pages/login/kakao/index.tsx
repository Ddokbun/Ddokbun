import type { NextPage } from "next";
import React, { useEffect } from "react";
import { Router, useRouter } from "next/router";
import { Kakaologin } from "../../../apis/auth";
import Spinner from "../../../common/Spinner";
import { setCookie } from "cookies-next";
import { useDispatch } from "react-redux";
import AXIOS from "../../../apis";
import { authActions } from "../../../store/auth";

const KakaoLogin: NextPage = () => {
  const router = useRouter();
  const login_code = router.query.code;
  const dispatch = useDispatch()
  
  useEffect(() => {
    const login = async () => {
      const res = await Kakaologin(login_code);
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

export default KakaoLogin;
