import axios from "axios";
import Router from "next/router";
import AXIOS from ".";
import { setCookie, CookieValueTypes } from "cookies-next";

export const getAllProductNumber = async () => {
  const url = "market/product/list";

  try {
    const res = await AXIOS({
      method: "GET",
      url,
    });

    return res.data.content;
  } catch (error) {
    console.log(error);
  }
};

export const fetchProductList = async (params: string) => {
  const url = `market/product/category/${params}`;

  try {
    const res = await AXIOS({
      method: "GET",
      url,
    });
    return res.data.content;
  } catch (error) {
    console.log(error);
  }
};

export const fetchProductDetail = async (id: string) => {
  const url = `market/product/${id}`;

  try {
    const res = await AXIOS({
      method: "GET",
      url,
    });

    return res.data.content;
  } catch (error) {
    console.log(error);
  }
};

/**
 * 장바구니에 희망하는 아이템을 넣습니다
 * @param id 희망하는 아이디가 필요합니다
 * @param 로그인을 필요로 합니다
 * @returns
 */

export const putCart = async (id: number) => {
  console.log(id);

  const data = { itemSeq: id };
  const url = `market/cart`;

  try {
    const res = await AXIOS({
      method: "POST",
      url,
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
  const url = "https://kapi.kakao.com/v1/payment/ready";
  const params = {
    cid: "TC0ONETIME",
    partner_order_id: "partner_order_id",
    partner_user_id: "partner_user_id",
    item_name: "초코파이",
    quantity: 1,
    total_amount: 2200,
    vat_amount: 200,
    tax_free_amount: 0,
    approval_url: "https://localhost:3000/commerce/order/complete",
    fail_url: "http://localhost:3000/commerce/order/cancled",
    cancel_url: "http://localhost:3000/commerce/order/cancled",
  };

  try {
    const res = await axios({
      url,
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
  const url = "https://kapi.kakao.com/v1/payment/approve";
  const params = {
    cid: "TC0ONETIME",
    tid,
    partner_order_id: "partner_order_id",
    partner_user_id: "partner_user_id",
    pg_token: pgToken,
  };

  try {
    const res = await axios({
      url,
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

/**
 * 자신의 장바구니에 있는 카트를 불러오는 함수있니다
 * @param token 회원정보를 필요로 합니다
 * @returns 장바구니에있는 상품을 오브젝트형식으로 반환합니다
 */

export const fetchCartList = async (token?: string) => {
  const url = "cart";

  try {
    const data = await AXIOS({
      url,
      method: "GET",
      headers: { Authorization: token },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

/**
 * 상품과 관련된 연관상품을 호출하는 상품입니다.
 * @param itemSeq 희망하는 상품 번호
 * @returns 연관 상품을 리스트형태로 반환합니다
 */

export const fetchRelatedProducts = async (itemSeq: string) => {
  const url = `market/product/${itemSeq}/similar`;

  try {
    const { data } = await AXIOS({
      url,
      method: "GET",
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
