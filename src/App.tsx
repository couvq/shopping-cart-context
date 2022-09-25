import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import ProductDetails from "./components/ProductDetails";
import { CartProvider } from "./contexts/CartContext";

const App: React.FC = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
};

export default App;
