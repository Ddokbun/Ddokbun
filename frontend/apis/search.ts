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

// 검색 시 아이템 시퀀스 리턴
export const fetchItemSeq = async (plantSeq: number) => {
  const path = "market/product/plant/";
  try {
    const res = await AXIOS({
      method: "GET",
      url: path + plantSeq,
    });
    return res.data.content.itemSeq;
  } catch (error) {
    console.log(error);
  }
};

// AI 검색을 위한 이미지 전송
export const postPicture = async (image: any) => {
  console.log("이미지입니다", image);
  const formData = new FormData();
  formData.append("file", image);
  const path = "AI/picture";
  try {
    const res = await AXIOS({
      method: "POST",
      url: path,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    });
    console.log("성공", res.data.content.plantSeq);
    return res.data.content.plantSeq;
  } catch (error) {
    console.log(error);
  }
};
