import AXIOS from "./index";

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

//유저 Role 변경 -> 김채리 카카오 아이디로만 가능
export const fetchAdminRole = async (userSeq: number) => {
  const path = "admin/user/role/";
  try {
    const res = await AXIOS({
      method: "GET",
      url: path + userSeq,
    });
    return res.data;
  } catch (error) {
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
export const postProduct = async ({ item }) => {
  const data = item;
  const path = "admin/product";
  try {
    const res = await AXIOS({
      method: "POST",
      url: path,
      data: data,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
