import axios, { AxiosError } from "axios";
import Router from "next/router";
import AXIOS from ".";
import { setCookie, CookieValueTypes } from "cookies-next";
import { AppDispatch } from "../store";
import { ListObjectItem } from "../types/commerce/list.interface";
import { putCartItem, setCartLists } from "../store/commerce";

// 인기식물 조회
export const fetchHotPlant = async () => {
  const path = "market/product/hot";
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

// 커머스 메인
export const getMainProduct = async () => {
  const path = "market/product/selected";
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
  const data = { itemSeq: id };
  const url = `cart`;

  try {
    const res = await AXIOS({
      method: "POST",
      url,
      data,
    });
    alert("id를 장바구니에 넣었습니다");

    return res.data;
  } catch (error) {
    const { response } = error as any | AxiosError;
    console.log(response);

    switch (response.status) {
      case 400:
        alert("이미 등록된 상품입니다");
        break;

      default:
        alert("로그인이 필요한 기능입니다");
        break;
    }
    return 400;
  }
};

/**
 * 장바구니 삭제 API
 * @params ItemSeq를 필요로 합니다
 */

export const deleteCart = async (itemSeq: number) => {
  const url = `cart/${itemSeq}`;
  try {
    const { data } = await AXIOS({
      url,
      method: "DELETE",
    });

    return data;
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
export const postKakaoPay = async (
  partner_user_id: string,
  total_amount: number,
  item_name: string,
  isMobile: boolean,
) => {
  const route = Router;
  const url = "https://kapi.kakao.com/v1/payment/ready";
  const params = {
    cid: "TC0ONETIME",
    partner_order_id: "똑분 Ddokbun",
    partner_user_id,
    item_name,
    quantity: 1,
    total_amount,
    vat_amount: 200,
    tax_free_amount: 0,
    approval_url: "https://ddokbun.com/commerce/order/complete",
    fail_url: "https://ddokbun.com/commerce/order/cancled",
    cancel_url: "https://ddokbun.com/commerce/order/cancled",
  };
  // const params = {
  //   cid: "TC0ONETIME",
  //   partner_order_id: "똑분 Ddokbun",
  //   partner_user_id,
  //   item_name,
  //   quantity: 1,
  //   total_amount,
  //   vat_amount: 200,
  //   tax_free_amount: 0,
  //   approval_url: "https://localhost:3001/commerce/order/complete",
  //   fail_url: "https://localhost:3001/commerce/order/cancled",
  //   cancel_url: "https://localhost:3001/commerce/order/cancled",
  // };

  try {
    const res = await axios({
      url,
      method: "POST",
      headers: {
        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_PAY}`,
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      params,
    });
    console.log(res.data);
    setCookie("tid", res.data.tid);

    if (isMobile === true) {
      await route.push(res.data.next_redirect_mobile_url);
    } else {
      await route.push(res.data.next_redirect_pc_url);
    }

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
  partner_user_id: string,
  tid: CookieValueTypes,
  pgToken: string,
) => {
  const url = "https://kapi.kakao.com/v1/payment/approve";
  const params = {
    cid: "TC0ONETIME",
    tid,
    partner_order_id: "똑분 Ddokbun",
    partner_user_id,
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
    console.log(res);

    return res.data;
  } catch (error) {
    console.log(error);
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
    });
    return data.data.content;
  } catch (error) {
    console.log(error);
  }
};

/**
 * 장바구니의 아이템의 수량을 변경하는 api입니다
 *
 */
export const putCartItemCount = async (
  quantity: number,
  itemSeq: number,
  dispatch: any,
) => {
  const url = `cart/${itemSeq}`;

  try {
    const { data } = await AXIOS({
      url,
      method: "PUT",
      data: {
        quantity,
      },
    });
    dispatch(putCartItem({ itemSeq, quantity }));
    alert("수량이 변경됐습니다");
  } catch (error) {
    console.log(error);
    alert("뭔가가 잘못됐습니다!");
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

/**
 * 주문정보를 저장하는 API입니다.
 *
 */

export const postOrderList = async (
  orderName: string,
  itemSeqList: string,
  orderEmail: string,
  orderMethod: number,
  orderPhone: string,
  orderPrice: number,
  post: string,
  detailPost: string,
  additionnalPost: string,
  orderUserName: string,
) => {
  console.log(itemSeqList);

  const url = `order`;
  const data = {
    itemSeqList,
    orderAddress: post + " " + detailPost + " " + additionnalPost,
    orderEmail,
    orderMethod: orderMethod === 1 ? "KAKAO" : "Naver",
    orderName,
    orderPhone,
    orderPrice: String(orderPrice),
    orderQuantity: 1,
    orderReceiver: post + " " + detailPost + " " + additionnalPost,
    orderUserName,
  };
  try {
    const res = await AXIOS({
      url,
      method: "POST",
      data,
    });
    console.log(res);
    return res.data.content;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPriorityProduct = async () => {
  const url = "market/product/hot";

  try {
    const res = await AXIOS({
      url,
      method: "GET",
    });
    return res.data.content;
  } catch (error) {
    console.log(error);
  }
};

export const clickItem = async (itemSeq: string) => {
  const url = `market/product/hotc/${itemSeq}`;

  try {
    const res = await AXIOS({
      url,
      method: "GET",
    });

    return res.data.content;
  } catch (error) {
    console.log(error);
  }
};

export const fetchServeyList = async () => {
  const url = "market/product/survey";

  try {
    const { data } = await AXIOS({
      url,
      method: "GET",
    });
    return data.content;
  } catch (error) {
    console.log(error);
  }
};

/**
 * 주문 후 주문상태 변경 API입니다
 */

export const setOrderInfo = async (orderSeq: string) => {
  const url = `order/${orderSeq}/pay`;

  try {
    const res = await AXIOS({
      url,
      method: "GET",
    });
    // console.log(res);
    return res.data.content;
  } catch (error) {
    console.log(error);
  }
};

/**
 * 주문 정보를 받아오는 API입니다
 */

export const fetchOrderInfo = async (orderSeq: string, token: string) => {
  const url = `order/${orderSeq}`;

  try {
    const data = await AXIOS({
      url,
      method: "GET",
      headers: {
        Authorization: token,
      },
    });

    return data.data.content;
  } catch (error) {
    console.log(error);
  }
};

/**
 * 설문결과를 받아오는 API입니다
 */

export const fetchSurveyComplete = async (answerList: number[]) => {
  const url = `market/product/survey`;

  try {
    const { data } = await AXIOS({
      url,
      method: "POST",
      data: {
        answerList,
      },
    });
    return data.content;
  } catch (error) {
    console.log(error);
  }
};

export interface DeliveriesType {
  orderSeq: number;
  orderQuantity: number;
  orderName: string;
  orderPrice: number;
  orderStatus: string;
  orderTime: string;
}

export const fetchDeliveries = async () => {
  const url = `order/list`;
  try {
    const res = await AXIOS({
      url,
      method: "get",
    });
    return res.data.content;
  } catch (error) {}
};

export const fetchSimilarItem = async (potSerial: string) => {
  const url = `AI/find-plant/${potSerial}`;
  try {
    const res = await AXIOS({
      url,
      method: "get",
    });

    return res.data.content;
  } catch (error) {}
};
