import BannerMsg from "../../components/Banner-msg";
import Brands from "../../components/Shop-Brands-home";
import ShortCut from "../../components/Shortcut-home";
import Footer from "../../components/Footer";
import Handpicked from "../../components/HandpickedCollections";
import Header from "../../components/Header";
import HeroBannerHome from "../../components/HeroBanner-home";
import TopCategories from "../../components/TopCategories-home";
import ProductsCarousel from "../../components/ProductsCarousel";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import MakeupSkincare from "../../components/MakeupSkincare";

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
      <BannerMsg />
      <HeroBannerHome />
      <TopCategories />
      <ProductsCarousel keyToFilter='releaseDate' expectedOutcome='2023-06'/>
      <Handpicked />
      <Brands />
      <ShortCut />
      <MakeupSkincare />
      {hidden && <HeroBannerHome order="row-reverse" text={true} />}
      <Footer />
      <Navbar />
    </>
  );
};

export default Home;
