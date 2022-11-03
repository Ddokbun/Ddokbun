import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  plants: [],
};

const relatedProductSlice = createSlice({
  name: "reatedProducts",
  initialState,
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (action.payload.setRelated) {
        return action.payload.setRelated;
      }
    },
  },
});

export default relatedProductSlice.reducer;
