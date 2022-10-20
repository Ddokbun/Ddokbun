import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import auth from "./auth";
const rootReducers = combineReducers({
  // 여기에 reducer들 추가
  auth,
});

const makeStore = () =>
  configureStore({
    reducer: rootReducers,
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;

export const wrapper = createWrapper<AppStore>(makeStore);
