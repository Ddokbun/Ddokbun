import axios from "axios";
import Router, { useRouter } from "next/router";
import AXIOS from ".";
import { setCookie, CookieValueTypes } from "cookies-next";
import { ParsedUrlQuery } from "querystring";
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

/**
 * 카카오 결제를 위한 결제 요청 함수입니다
 * 개발 완료 후 ServerSide에서 관리될 함수입니다.
 *
 * @params 결제를 위한 Params를 확인합니다.
 * @returns 결제진행을 위한 페이지로 Redirect됩니다.
 */
export const postKakaoPay = async () => {
  const route = Router;
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
    approval_url: "http://localhost:3000/commerce/order/complete",
    fail_url: "http://localhost:3000/commerce/order/cancled",
    cancel_url: "http://localhost:3000/commerce/order/cancled",
  };

  try {
    const res = await axios({
      url: path,
      method: "POST",
      headers: {
        Authorization: "KakaoAK 46b639c2f7c3f7a7cff1606b75f90b83",
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      params,
    });
    console.log(res.data);
    setCookie("tid", res.data.tid);

    await route.push(res.data.next_redirect_pc_url);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

/**
 * 카카오 결제를 위한 결제 승인 함수입니다
 * 개발 완료 후 ServerSide에서 관리될 함수입니다.
 *
 * @params 결제를 위한 tid값과 pg_token값을 사용합니다.
 * @returns 결제진행을 위한 페이지로 Redirect됩니다.
 */

export const approveKakaoPay = async (
  tid: CookieValueTypes,
  pgToken: string,
) => {
  const path = "https://kapi.kakao.com/v1/payment/approve";
  const params = {
    cid: "TC0ONETIME",
    tid,
    partner_order_id: "partner_order_id",
    partner_user_id: "partner_user_id",
    pg_token: pgToken,
  };

  try {
    const res = await axios({
      url: path,
      method: "POST",
      headers: {
        Authorization: "KakaoAK 46b639c2f7c3f7a7cff1606b75f90b83",
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      params,
    });

    return res.data;
  } catch (error) {
    // console.log(error);
  }
};
