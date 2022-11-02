import type { NextPage } from "next";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Googlelogin } from "../../../apis/auth";
import { useDispatch } from "react-redux";
import { ent } from "../../../store/auth";

const Home: NextPage = () => {
  const router = useRouter();
  const login_code = router.query.code;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAccessToken = async () => {
      const token = await Googlelogin(login_code);
      dispatch(ent.setEnt(token));
    };
    fetchAccessToken();
    router.push("/manage");
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
