import React from "react";
import ReactDOM from "react-dom/client";
import Rotas from "./routes/routes";
import "./global.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>
);
