import AXIOS from "./index";

export const fetchTodayPlant = async () => {
  const path = "market/product/rec-today";
  try {
    const res = await AXIOS({
      method: "GET",
      url: path,
    });
    return res.data.content;
  } catch (error) {
    console.log(error);
  }
};
