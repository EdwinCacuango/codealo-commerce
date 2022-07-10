import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import DetailProduct from "./components/DetailProduct";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import CarResume from "./components/CarResume";
import ShopHistory from "./components/ShopHistory";

import "./App.css";
import { ProductsProvider } from "./components/Services/ProductsContext";
import { CartContextProvider } from "./components/Services/CartContext";

function App() {
  return (
    <Layout className="App">
      <ProductsProvider>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<DetailProduct />} />
            <Route path="/car-resume" element={<CarResume />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/shop-history" element={<ShopHistory />} />
          </Routes>
        </CartContextProvider>
      </ProductsProvider>
    </Layout>
  );
}

export default App;
