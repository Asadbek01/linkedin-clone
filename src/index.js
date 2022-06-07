import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import "./styles/profile.css";
import "./styles/home.css";
import "./styles/Feedpage.css";
import { Provider } from "react-redux";
// import configureStore from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={configureStore}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
