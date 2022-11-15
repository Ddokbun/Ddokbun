import type { NextPage } from "next";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { ent } from "../../../store/auth";
import { Googlelogin } from "../../../apis/auth";
import Spinner from "../../../common/Spinner";

const Home: NextPage = () => {
  const router = useRouter();
  const login_code = router.query.code;
  const dispatch = useDispatch();

  useEffect(() => {
    Googlelogin(login_code);
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
