import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyle } from "./styles/global";

// Components
import App from "./app/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
