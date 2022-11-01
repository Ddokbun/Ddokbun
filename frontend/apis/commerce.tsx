import AXIOS from ".";

export const fetchProductList = async (params: string) => {
  const path = `market/product/category/${params}`;

  try {
    const res = await AXIOS({
      method: "GET",
      url: path,
    });

    return res.data.content;
  } catch (error) {
    // console.log(error);
  }
};

// market product/list

export const fetchProductDetail = async (id: string) => {
  const path = `market/product/${id}`;
  console.log("path :", path);

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

export const putCart = async (id: sting) => {
  return <div></div>;
};
