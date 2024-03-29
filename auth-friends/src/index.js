import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import configRedux from "./configRedux";
import { Provider } from "react-redux";

const store = configRedux();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
