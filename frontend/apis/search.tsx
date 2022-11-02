import AXIOS from "./index";

export const fetchTodayPlant = async () => {
  const path = "cart";
  try {
    const res = await AXIOS({
      method: "GET",
      url: path,
    });
    console.log(res);
    return res.data.content;
  } catch (error) {
    console.log(error);
  }
};
