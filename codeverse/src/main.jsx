import React from "react";
import ReactDOM from "react-dom/client";
import Rotas from "./routes/routes";
import "./global.scss";
import ProductsProvider from "./contexts/products";
import AuthProvider from "./contexts/Auth";
import BagActionsProvider from "./contexts/bagActions";
import WishlistActionsProvider, { WishlistActionsContext } from "./contexts/wishlistActions";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import OrdersActionsProvider from "./contexts/ordersActions";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductsProvider>
          <BagActionsProvider>
            <WishlistActionsProvider>
              <OrdersActionsProvider>
                <ToastContainer autoClose={3000} closeButton={false} transition={Slide} />
                <Rotas />
              </OrdersActionsProvider>
            </WishlistActionsProvider>
          </BagActionsProvider>
        </ProductsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
