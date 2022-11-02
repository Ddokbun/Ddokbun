import type { NextPage } from "next";
import React, { useEffect } from "react";
import { Router, useRouter } from "next/router";
import { Kakaologin } from "../../../apis/auth";
import { useSelector, useDispatch } from "react-redux";
import { ent } from "../../../store/auth";

const KakaoLogin: NextPage = () => {
  const router = useRouter();
  const login_code = router.query.code;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAccessToken = async () => {
      const token = await Kakaologin(login_code);
      dispatch(ent.setEnt(token));
    };
    fetchAccessToken();
    router.push("/manage");
  }, [login_code]);

  return (
    <div>
      <main>
        <h1>카카오 로그인 하는 중</h1>
      </main>
    </div>
  );
};

export default KakaoLogin;
