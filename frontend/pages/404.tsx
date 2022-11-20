import type { NextPage } from "next";
import Swal from "sweetalert2";
import router from "next/router";

const Custom404NotFountPage: NextPage = () => {
  Swal.fire({ title: "정상적인 접근이 아닙니다." }).then(() => {
    router.push("/welcome");
  });
  return <div></div>;
};

export default Custom404NotFountPage;
