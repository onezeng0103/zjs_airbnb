import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/user";
import homeReducer from "./modules/home";
import entireReducer from "./modules/entire/index.js";
import detailReducer from "./modules/detail.js";
import mainReducer from "./modules/main.js";
const store = configureStore({
  reducer: {
    user: userReducer,
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer,
    main: mainReducer,
  },
});
export default store;
