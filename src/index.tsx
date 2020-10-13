import React from "react";
import ReactDOM from "react-dom";
import App from "./Router/index";
import "./index.css";

ReactDOM.render(
  // 严格模式
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById("root")
);
