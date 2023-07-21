import React from "react";
import ReactDOM from "react-dom/client";
import Rotas from "./routes/routes";
import "./global.scss";
import ProductsProvider from "./contexts/products";
import AuthProvider from "./contexts/Auth";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductsProvider>
          <ToastContainer
            autoClose={3000}
            closeButton={false}
            transition={Slide}
          />
          <Rotas />
        </ProductsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
