import AXIOS from "./index";

export const Kakaologin = async (login_code?: string[] | string) => {
  const path = "user/login/oauth/kakao?code=";
  try {
    const res = await AXIOS({
      method: "GET",
      url: path + login_code,
    });

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

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserSeq = async (token?: string) => {
  const url = `user`;
  try {
    const res = await AXIOS({
      method: "get",
      url,
      headers: {
        authorization: token,
      },
    });

    return res.data.content.userSeq;
  } catch (error) {
    console.log(error);
  }
};
