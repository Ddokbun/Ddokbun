import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  plantNickname: "",
  plantEnName: "",
  plantName: "",
  growHumid: "",
  humidity: 0,
  isAuto: "",
  light: 0,
  lightType: 0,
  maxTemperature: 0,
  minTemperature: 0,
  soilHumidity: 0,
  temperature: 0,
  waterCycle: 0,
  waterHeight: 0,
  waterSupply: [],
  plantSeq: 0,
};

const manageSlice = createSlice({
  name: "managePlant",
  initialState,
  reducers: {
    // 얘는 예시
    // setEnt(state, action) {
    //   return action.payload;++++++++++
    // },
    setPlantInfo(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  extraReducers: {
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
