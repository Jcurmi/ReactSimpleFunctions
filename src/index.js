import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createGlobalStyle } from "styled-components";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-size: 16px;
    font-family: Alegreya, serif;
  }
`;

if (module.hot) {
  module.hot.accept(App);
}

serviceWorker.unregister();
