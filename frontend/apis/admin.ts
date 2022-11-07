import AXIOS from "./index";

// 유저 리스트 조회
export const getAdminUserList = async () => {
  // const path = "admin/user/list?size=&page=2";
  const path = "admin/user/list";
  try {
    const res = await AXIOS({
      method: "GET",
      url: path,
    });
    return res.data;
  } catch (error) {
    5;
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
export const getAdminOrderList = async () => {
  const path = "admin/order/list";
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

export const getProductList = async () => {
  const path = "admin/product/list";
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
