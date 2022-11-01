import axios from "axios";
import Router from "next/router";
import AXIOS from "./index";

export const Kakaologin = async (login_code?: string[] | string) => {
  const path = "user/login/oauth/kakao?code=";
  try {
    const res = await AXIOS({
      method: "GET",
      url: path + login_code,
    });
    axios.defaults.headers.common[
      "Authorization"
    ] = `${res.data.content.jwtToken}`;
    console.log("성공", res);
    Router.push("/manage");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const Googlelogin = async (login_code?: string[] | string) => {
  const path = "user/login/oauth/google?code=";
  try {
    const res = await AXIOS({
      method: "GET",
      url: path + login_code,
    });
    axios.defaults.headers.common[
      "Authorization"
    ] = `${res.data.content.jwtToken}`;
    console.log("성공", res);
    Router.push("/manage");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
