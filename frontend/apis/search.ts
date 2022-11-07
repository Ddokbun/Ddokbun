import AXIOS from "./index";

//오늘의 식물
export const fetchTodayPlant = async () => {
  const path = "market/product/rec-today";
  try {
    const res = await AXIOS({
      method: "GET",
      url: path,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
