import { AxiosError } from "axios";
import AXIOS from ".";
import { RegisterType } from "../common/Button";

export const fetchAllPlantsList = async () => {
  const url = "/pot/plant-info";

  try {
    const res = await AXIOS({
      method: "get",
      url,
    });
    console.log(res.data.content);
    return res.data.content;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.response);
  }
};

export const fetchRegisterPot = async (data: RegisterType) => {
  const url = "/api/pot";
  console.log("여기");
  AXIOS.defaults.withCredentials = true;
  try {
    const res = await AXIOS({
      method: "put",
      url,
      data,
    });
    console.log(res.data);

    return res.data.status;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.response);
  }
};
