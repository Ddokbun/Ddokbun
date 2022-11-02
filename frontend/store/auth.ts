import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  accessToken: "",
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    // 얘는 예시
    setEnt(state, action) {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: {
    // 예시
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", state, action.payload);
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const ent = authSlice.actions;
export default authSlice.reducer;
