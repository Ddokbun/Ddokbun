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
    return res.data.content;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.response);
  }
};

export const fetchRegisterPot = async (data: RegisterType) => {
  const url = "pot";
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

export const fetchPlantData = async (plantSeq: string) => {
  const url = `pot/${plantSeq}/plant-info`;

  try {
    const res = await AXIOS({
      method: "get",
      url,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.response);
  }
};

export const fetchPlantsList = async () => {
  const url = "pot/my-pot";
  console.log("진입");

  try {
    const res = await AXIOS({
      method: "get",
      url,
    });
    return res.data.content;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.response);
  }
};

export const fetchCurrentStatus = async (potSeq: string) => {
  const url = `pot/${potSeq}`;

  try {
    const res = await AXIOS({
      method: "get",
      url,
    });

    console.log(res.data);
    
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.response);
  }
};
