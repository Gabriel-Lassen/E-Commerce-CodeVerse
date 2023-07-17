import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import MyCart from "../pages/Mycart";
import WishList from "../pages/Wishlist";
import Profile from "../pages/Profile";
import Categories from "../pages/Categories";
import Products from "../pages/Products";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
