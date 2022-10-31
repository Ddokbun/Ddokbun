import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import auth from "./auth";
import manage from "./manage";

const rootReducers = combineReducers({
  // 여기에 reducer들 추가
  auth,
  manage,
});

export const makeStore = () =>
  configureStore({
    reducer: rootReducers,
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;

export const wrapper = createWrapper<AppStore>(makeStore);
export type RootState = ReturnType<typeof rootReducers>;

export default makeStore;
