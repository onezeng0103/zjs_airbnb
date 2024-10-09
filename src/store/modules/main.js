import { createSlice } from "@reduxjs/toolkit";

const mainReducer = createSlice({
  name: "main",
  initialState: {
    fixed: false,
  },
  reducers: {
    changeFixedAction(state, { payload }) {
      state.fixed = payload;
    },
  },
});
export const { changeFixedAction } = mainReducer.actions;
export default mainReducer.reducer;
