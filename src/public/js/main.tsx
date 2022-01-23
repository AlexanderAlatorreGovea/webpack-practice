import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const START_UP_BOILER_PLATE = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const ROOT = document.getElementById("root");

ReactDOM.render(START_UP_BOILER_PLATE, ROOT);
