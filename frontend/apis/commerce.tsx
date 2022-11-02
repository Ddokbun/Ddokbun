import AXIOS from ".";

export const getAllProductNumber = async () => {
  const path = "market/product/list";

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

export const putCart = async (id: number) => {
  console.log(id);

  const data = { itemSeq: id };
  const path = `market/cart`;

  try {
    const res = await AXIOS({
      method: "POST",
      url: path,
      data,
    });
    return res.data.content;
  } catch (error) {
    console.log(error);
  }
};
