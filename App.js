import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";

function App() {
  useEffect(() => {
    console.log("App Loaded");
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;