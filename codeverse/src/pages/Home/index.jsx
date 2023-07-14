import BannerMsg from "../../components/banner-msg";
import Brands from "../../components/Shop-Brands-home";
import ShortCut from "../../components/Shortcut-home";
import Footer from "../../components/footer";
import Handpicked from "../../components/handpickedCollections";
import Header from "../../components/header";
import HeroBannerHome from "../../components/heroBanner-home";
import TopCategories from "../../components/TopCategories-home";
import ProductsCarousel from "../../components/productsCarousel";
import Navbar from "../../components/navbar";
import { useEffect, useState } from "react";
import MakeupSkincare from "../../components/makeupSkincare";

const Home = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleHidden = () => {
      setHidden(window.innerWidth <= 720);
    };

    handleHidden();

    window.addEventListener("resize", handleHidden);
  });

  return (
    <>
      <Header />
      <BannerMsg/>
      <HeroBannerHome />
      <TopCategories />
      <ProductsCarousel />
      <Handpicked />
      <Brands/>
      <ShortCut />
      {hidden && <HeroBannerHome order="row-reverse" text={true} />}
      <MakeupSkincare />
      <Footer />
      <Navbar/>
    </>
  );
};

export default Home;
