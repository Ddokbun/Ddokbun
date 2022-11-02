import axios from "axios";

const AXIOS = axios.create({
  baseURL: "https://ddokbun.com/api/",
});

export default AXIOS;
