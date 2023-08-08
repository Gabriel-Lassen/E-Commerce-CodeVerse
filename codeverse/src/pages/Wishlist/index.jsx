import styles from "./styles.module.scss";

import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BtnBackForPage from "../../components/BtnBackForPage";
import ArrowSvg from "../../components/ArrowSvg";
import SideBarProfile from "../../components/SideBar-Profile";
import TitlePage from "../../components/Title-pages";
import RouteHistory from "../../components/Route-history";
import MyWishlist from "../../components/MyWishlist";

const WishList = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleHidden = () => {
      setHidden(window.innerWidth >= 769);
    };

    handleHidden();

    window.addEventListener("resize", handleHidden);
  });
  return (
    <div>
      {hidden && <Header />}
      <BtnBackForPage
        svg={<ArrowSvg color="var(--Primary)" direction="left" />}
        text="My Wishlist"
      />
      <RouteHistory />
      <TitlePage />
      <div className={styles.container}>
        {hidden && <SideBarProfile />}
        <MyWishlist />
      </div>
      {hidden && <Footer />}
    </div>
  );
};

export default WishList;
