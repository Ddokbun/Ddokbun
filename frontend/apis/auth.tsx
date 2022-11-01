import axios from "axios";
import Router from "next/router";
import cookies from "react-cookies";
import AXIOS from "./index";

export interface AxiosResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  setHeader: any;
  request?: any;
}

export const Kakaologin = async (login_code?: string[] | string) => {
  const path = "user/login/oauth/kakao?code=";
  try {
    const res = await AXIOS({
      method: "GET",
      url: path + login_code,
    });
    const accessToken = res.data.content.jwtToken;
    AXIOS.defaults.headers.common["Authorization"] = `${accessToken}`;
    document.cookie = `키이름=${accessToken}`;

    console.log("성공", res);
    cookies.save("refreshToken", res.data.content.jwtToken, {
      path: "/",
    });

    // res.setHeader("Set-Cookie", accessToken);

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
