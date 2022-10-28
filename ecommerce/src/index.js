import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { Filter02ContextProvider } from "./context/filter02_context";
import { CartProvider } from "./context/cart-context";
import { AuthContextProvider } from "./context/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ProductsProvider>
      <Filter02ContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </Filter02ContextProvider>
    </ProductsProvider>
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
