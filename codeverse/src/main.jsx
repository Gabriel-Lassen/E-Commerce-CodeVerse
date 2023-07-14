import React from "react";
import ReactDOM from "react-dom/client";
import Rotas from "./routes/routes";
import "./global.scss";
import ProductsProvider from "./contexts/products";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsProvider>
      <Rotas />
    </ProductsProvider>
  </React.StrictMode>
);
