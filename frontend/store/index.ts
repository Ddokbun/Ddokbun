import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import authSlice from "./auth";
import manage from "./manage";
import commerce from "./commerce";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storageSession from "redux-persist/lib/storage/session"; //sessionstorage나 localstorage 중에 선택

const persistConfig: any = {
  key: "root",
  storage: storageSession,
  whitelist: ["authSlice", "commerce"], //유지할 데이터
};

const rootReducers = combineReducers({
  // 여기에 reducer들 추가
  authSlice,
  manage,
  commerce,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        // }).concat(logger),
      }),
  });
export const persistor = persistStore(makeStore());

// export const makeStore = () =>
//   configureStore({
//     reducer: rootReducers,
//     devTools: true,
//   });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;

export const wrapper = createWrapper<AppStore>(makeStore);
export type RootState = ReturnType<typeof rootReducers>;

export default makeStore;
