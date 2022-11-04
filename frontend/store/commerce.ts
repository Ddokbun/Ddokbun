import { combineReducers, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { ListArray } from "../types/commerce/list.interface";

// const commerceSlice = createSlice

// 특정상품을 선택했을 때 연관상품관리 ->> props
export const RelatedProductSlice = createSlice({
  name: "reatedProducts",
  initialState: { data: [] },
  reducers: {
    setRelatedItemList: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

/***
 * 장바구니를 보관, 관리하는 스토어입니다
 */
export const CartListSlice = createSlice({
  name: "CartList",
  initialState: {},
  reducers: {
    setCartLists: (state, action) => {
      return {
        ...state,
        ...action.payload,
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
