import AXIOS from "./index";
import router from "next/router";

// 유저 리스트 조회
export const getAdminUserList = async (page?: number) => {
  const path = "admin/user/list?size=&page=";
  try {
    const res = await AXIOS({
      method: "GET",
      url: path + page,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

//유저 Role 변경 -> 김채리 구글 아이디로만 가능
export const fetchAdminRole = async (userSeq: number) => {
  const path = "admin/user/role/";
  try {
    const res = await AXIOS({
      method: "GET",
      url: path + userSeq,
    });
    return res.data;
  } catch (error) {
    alert("마스터 계정만 권한 변경이 가능합니다.");
    console.log(error);
  }
};

// 전체 주문 건수 조회
export const getOrderCount = async () => {
  const path = "admin/order/count";
  try {
    const res = await AXIOS({
      method: "GET",
      url: path,
    });
    return res.data;
  } catch (error) {
    alert("어드민 접근 권한이 없습니다");
    router.push("/welcome");
    console.log(error);
  }
};

// 전체 주문 목록 조회
export const getAdminOrderList = async (page?: number) => {
  const path = "admin/order/list?size=&page=";
  try {
    const res = await AXIOS({
      method: "GET",
      url: path + page,
    });
    console.log(path + page);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

//상품 목록 조회
export const getProductList = async (page?: number) => {
  const path = "admin/product/list?size=&page=";
  try {
    const res = await AXIOS({
      method: "GET",
      url: path + page,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

//상품 등록
// export const postProduct = async ({ item }) => {
//   const data = item;
//   const path = "admin/product";
//   try {
//     const res = await AXIOS({
//       method: "POST",
//       url: path,
//       data: data,
//     });
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

//주문 상태 변경
export const putOrderStatus = async (status: (string | number)[]) => {
  const data = { orderSeq: status[0], orderStatus: status[1] };
  const path = "admin/order";
  try {
    const res = await AXIOS({
      method: "PUT",
      url: path,
      data: data,
    });
    console.log("성공 우하하");
    window.location.replace("/admin/commerce");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// 전체 가입 유저 수 조회
export const getUserCount = async () => {
  const path = "admin/user/count";
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

// 보유 상품 개수 조회
export const getProductCount = async () => {
  const path = "admin/product/count";
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

// 최근 10일간 판매 데이터
export const getOrderData = async () => {
  const path = "admin/order/count-by-date";
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

//상품 삭제
export const deleteProduct = async (itemSeq: number) => {
  const path = "admin/product/";
  try {
    const res = await AXIOS({
      method: "DELETE",
      url: path + itemSeq,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
