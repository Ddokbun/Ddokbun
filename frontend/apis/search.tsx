import AXIOS from "./index";

export const fetchTodayPlant = async () => {
  const path = "market/product/rec-today";
  try {
    const res = await AXIOS({
      method: "GET",
      url: path,
    });
    console.log(res.data.content[0]);
    return res.data.content[0];
  } catch (error) {
    console.log(error);
  }
};
