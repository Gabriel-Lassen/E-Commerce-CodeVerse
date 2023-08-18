import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import ProductsProvider from "./contexts/products";
import AuthProvider from "./contexts/Auth";
import BagActionsProvider from "./contexts/bagActions";
import WishlistActionsProvider from "./contexts/wishlistActions";
import OrdersActionsProvider from "./contexts/ordersActions";

import Rotas from "./routes/routes";

import { ToastContainer, Slide } from "react-toastify";

import "./global.scss";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductsProvider>
          <BagActionsProvider>
            <WishlistActionsProvider>
              <OrdersActionsProvider>
                <ToastContainer autoClose={1200} closeButton={false} transition={Slide} />
                <Rotas />
              </OrdersActionsProvider>
            </WishlistActionsProvider>
          </BagActionsProvider>
        </ProductsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
