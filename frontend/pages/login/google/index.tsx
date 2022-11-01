import type { NextPage } from "next";
import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Googlelogin } from "../../../apis/auth";

const Home: NextPage = () => {
  const router = useRouter();
  const login_code = router.query.code;

  useEffect(() => {
    Googlelogin(login_code);
  }, [login_code]);

  return (
    <div>
      <main>
        <h1>구글 로그인 하는 중</h1>
      </main>
    </div>
  );
};

export default Home;
