import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// const commerceSlice = createSlice

// 특정상품을 선택했을 때 연관상품관리 ->> props
const relatedProductSlice = createSlice({
  name: "reatedProducts",
  initialState: [],
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (action.payload.setRelated) {
        return action.payload.setRelated;
      }
    },
  },
});

/***
 * 장바구니를 보관, 관리하는 스토어입니다
 */
const CartListSlice = createSlice({
  name: "CartList",
  initialState: {},
  reducers: {
    setCartLists(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    // incrementCartItem(state) {
    //   state.value ++
    // }
    // decrementCartItem(state) {
    //   state.value ++
    // }
  },
  extraReducers: {
    // 예시
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setCartLists } = CartListSlice.actions;

export default combineReducers({
  relatedProductSlice: relatedProductSlice.reducer,
  CartListSlice: CartListSlice.reducer,
});
