import type { NextPage } from "next";
import React, { useEffect } from "react";
import { Router, useRouter } from "next/router";
import { Kakaologin } from "../../../apis/auth";
import Spinner from "../../../common/Spinner";

const KakaoLogin: NextPage = () => {
  const router = useRouter();
  const login_code = router.query.code;

  // useEffect(() => {
  //   const fetchAccessToken = async () => {
  //     const token = await Kakaologin(login_code);
  //     dispatch(ent.setEnt(token));
  //   };
  //   fetchAccessToken();
  //   router.push("/manage");
  // }, [login_code]);

  useEffect(() => {
    Kakaologin(login_code);
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
