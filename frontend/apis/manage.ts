import { AxiosError } from "axios";
import AXIOS from ".";

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
