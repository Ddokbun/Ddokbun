import axios from "axios";

const AXIOS = axios.create({
  baseURL: "https://ddokbun.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default AXIOS;
