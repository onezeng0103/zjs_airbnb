import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";
import "@/assets/css/reset.less";
import store from "@/store/index";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "@/assets/css/common.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
