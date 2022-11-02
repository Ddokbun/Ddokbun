import axios from "axios";
import { getCookie } from "cookies-next";

const AXIOS = axios.create({
  baseURL: "https://ddokbun.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

AXIOS.defaults.headers.common["Authorization"] = `${getCookie("token")}`;

export default AXIOS;
