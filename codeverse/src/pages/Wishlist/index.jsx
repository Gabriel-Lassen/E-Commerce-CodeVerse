import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BtnBackForPage from "../../components/BtnBackForPage";
import ArrowSvg from "../../components/ArrowSvg";
import SideBarProfile from "../../components/SideBar-Profile";
import TitlePage from "../../components/Title-pages";
import RouteHistory from "../../components/Route-history";

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
        text="My Adress Book"
      />
      <RouteHistory />
      <TitlePage />
      {hidden && <SideBarProfile />}
      {hidden && <Footer />}
    </div>
  );
};

export default WishList;