import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { ListArray } from "../types/commerce/list.interface";

// const commerceSlice = createSlice

// 특정상품을 선택했을 때 연관상품관리 ->> props
const RelatedProductSlice = createSlice({
  name: "reatedProducts",
  initialState: [],
  reducers: {
    setRelatedItemList(state, action) {
      return action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (action.payload.commerce.relatedProductSlice) {
        return action.payload.commerce.relatedProductSlice;
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
        ...action.payload.setCartLists,
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
        ...action.payload.setCartLists,
      };
    },
  },
});

export const { setCartLists } = CartListSlice.actions;
export const { setRelatedItemList } = RelatedProductSlice.actions;

export interface CommerceState {
  CartListSlice: ListArray;
  relatedProductSlice: ListArray;
}

export default combineReducers({
  relatedProductSlice: RelatedProductSlice.reducer,
  CartListSlice: CartListSlice.reducer,
});
