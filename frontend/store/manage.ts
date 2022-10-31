import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  plantSeq: "",
  krName: "",
};

const manageSlice = createSlice({
  name: "managePlant",
  initialState,
  reducers: {
    // 얘는 예시
    // setEnt(state, action) {
    //   return action.payload;
    // },

    setPlantInfo(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
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

export const manageActions = manageSlice.actions;

export default manageSlice.reducer;
