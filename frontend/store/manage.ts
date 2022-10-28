import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  plantSeq: "",
};

const manageSlice = createSlice({
  name: "managePlant",
  initialState,
  reducers: {
    // 얘는 예시
    // setEnt(state, action) {
    //   return action.payload;
    // },

    setPlantSeq(state, action) {
      console.log(action.payload);

      state.plantSeq = action.payload;
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
