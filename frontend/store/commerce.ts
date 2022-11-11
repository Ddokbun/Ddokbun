import {
  AnyAction,
  combineReducers,
  createSlice,
  current,
  PayloadAction,
} from "@reduxjs/toolkit";
import { ListArray, ListObjectItem } from "../types/commerce/list.interface";

// const commerceSlice = createSlice

// 특정상품을 선택했을 때 연관상품관리 ->> props
export const RelatedProductSlice = createSlice({
  name: "reatedProducts",
  initialState: [],
  reducers: {
    setRelatedItemList: (state, action) => {
      return action.payload;
    },
  },
});

/***
 * 장바구니를 보관, 관리하는 스토어입니다
 */
export const CartListSlice = createSlice({
  name: "CartList",
  initialState: [] as ListObjectItem[],
  reducers: {
    setAllCartLists: (state, action) => {
      console.log("wht", action.payload);

      return action.payload;
    },

    setCartLists: (state, action) => {
      return [...state, action.payload];
    },

    deleteCartList: (state, action) => {
      const temp = current(state).map((item: ListObjectItem) => {
        if (item && item.itemSeq !== parseInt(action.payload)) {
          return item;
        }
      });
      console.log(temp);
      return temp as ListObjectItem[];
    },

    putCartItem: (state, action) => {
      const temp = current(state).map((item: ListObjectItem) => {
        if (item.itemSeq === parseInt(action.payload.itemSeq)) {
          return {
            ...item,
            quantity: action.payload.quantity,
          };
        } else return item;
      });
      console.log(temp);

      return temp;
    },
  },
});

export const { setAllCartLists, setCartLists, putCartItem, deleteCartList } =
  CartListSlice.actions;
export const { setRelatedItemList } = RelatedProductSlice.actions;

export interface CommerceState {
  CartListSlice: ListArray;
  relatedProductSlice: ListArray;
}
