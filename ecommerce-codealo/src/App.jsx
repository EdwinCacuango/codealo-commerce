import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Products from "./components/Products"
import DetailProduct from "./components/DetailProduct"
import LogIn from "./components/LogIn"
import SignUp from "./components/SignUp"
import CarResume from "./components/CarResume"
import ShopHistory from "./components/ShopHistory"

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/detail-product" element={<DetailProduct />} />
        <Route path="/car-resume" element={<CarResume />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/shop-history" element={<ShopHistory />} />
      </Routes>
    </div>
  );
}

export default App;
