import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getGoodPrice,
  getHighScore,
  getDiscount,
  getHotRecommendDest,
  getLongFor,
  getPlus,
} from "@/api/home";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
  (_payload, { dispatch }) => {
    getGoodPrice().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });
    getHighScore().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });
    getDiscount().then((res) => {
      dispatch(changeDiscountInfoAction(res));
    });
    getHotRecommendDest().then((res) => {
      dispatch(changeHotRecommendDestAction(res));
    });
    getLongFor().then((res) => {
      dispatch(changeLongForInfoAction(res));
    });
    getPlus().then((res) => {
      dispatch(changePlusInfoAction(res));
    });
  }
);
const homeReducer = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommendDestInfo: {},
    longForInfo: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
    changeHotRecommendDestAction(state, { payload }) {
      state.hotRecommendDestInfo = payload;
    },
    changeLongForInfoAction(state, { payload }) {
      state.longForInfo = payload;
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload;
    },
  },
});
export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeHotRecommendDestAction,
  changeLongForInfoAction,
  changePlusInfoAction,
} = homeReducer.actions;
export default homeReducer.reducer;
