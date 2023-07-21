import React from "react";
import ReactDOM from "react-dom/client";
import Rotas from "./routes/routes";
import "./global.scss";
import ProductsProvider from "./contexts/products";
import AuthProvider from "./contexts/Auth";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <ProductsProvider>
        <Rotas />
      </ProductsProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
