import type { NextPage } from "next";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Kakaologin } from "../../../apis/auth";

const KakaoLogin: NextPage = () => {
  const router = useRouter();
  const login_code = router.query.code;

  useEffect(() => {
    Kakaologin(login_code);
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
