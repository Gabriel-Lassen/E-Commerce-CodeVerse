import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import MyCart from "../pages/Mycart";
import WishList from "../pages/Wishlist";
import Profile from "../pages/Profile";
import Categories from "../pages/Categories";
import Products from "../pages/Products";
import ProductsByCategoy from "../pages/ProductsByCategory";
import GetStart from "../pages/GetStart";
import ReferAndEarn from "../pages/ReferAndEarn";
import PersonalInformation from "../pages/PersonalInformation";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:category" element={<ProductsByCategoy />} />
      <Route path="/products/:id" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/getstarted" element={<GetStart/>} />
      <Route path="/mycart" element={<MyCart />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/personalinformation" element={<PersonalInformation/>} />
      <Route path="/profile/referandearn" element={<ReferAndEarn />} />
      <Route path="/profile/myorders" element={""} />
      <Route path="/profile/mywishlist" element={<WishList />} />
      <Route path="/profile/myreviews" element={""} />
      <Route path="/profile/myaddressbook" element={""} />
      <Route path="/profile/mysavedcards" element={""} />
    </Routes>
  );
};

export default Rotas;
