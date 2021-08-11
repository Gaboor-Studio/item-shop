import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GoodsContextProvider } from "./context/goods-context";
import './FontsFree-Net-ir_sans.ttf';

ReactDOM.render(
  <GoodsContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GoodsContextProvider>,
  document.getElementById("root")
);
