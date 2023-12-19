import BannerMsg from "../../components/Banner-msg";
import Brands from "../../components/Shop-Brands-home";
import ShortCut from "../../components/Shortcut-home";
import Handpicked from "../../components/HandpickedCollections";
import Header from "../../components/Header";
import HeroBannerHome from "../../components/HeroBanner-home";
import TopCategories from "../../components/TopCategories-home";
import ProductsCarousel from "../../components/productsCarousel";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import MakeupSkincare from "../../components/MakeupSkincare";
import styles from "./styles.module.scss";
import ShowFooter from "../../components/ShowFooter";

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <div>
        <Header />
        <BannerMsg />
        <HeroBannerHome />
        <TopCategories />
        <div className={styles.carousel}>
          <ProductsCarousel
            title="New Arrivals"
            showViewAll={true}
            keyToFilter="releaseDate"
            expectedOutcome="2023-06"
          />
        </div>
        <Handpicked />
        <Brands />
        <ShortCut />
        <MakeupSkincare />
        {hidden && <HeroBannerHome order="row-reverse" text={true} />}
        <Navbar />
      </div>
      <ShowFooter />
    </div>
  );
};

export default Home;
