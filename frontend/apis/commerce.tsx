import axios from "axios";
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

export const postKakaoPay = async () => {
  const path = "https://kapi.kakao.com/v1/payment/ready";
  const params = {
    cid: "TC0ONETIME",
    partner_order_id: "partner_order_id",
    partner_user_id: "partner_user_id",
    item_name: "초코파이",
    quantity: 1,
    total_amount: 2200,
    vat_amount: 200,
    tax_free_amount: 0,
    approval_url: "http://localhost:3000/",
    fail_url: "http://localhost:3000/",
    cancel_url: "http://localhost:3000/",
  };

  try {
    const res = await axios({
      url: path,
      method: "POST",
      headers: {
        Authorization: "KakaoAK bf914987ac3e41b88503cd2dc147c2f7",
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      params,
    });
    console.log(res.data);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
