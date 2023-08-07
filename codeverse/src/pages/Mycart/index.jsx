import Bag from "../../components/Bag";
import BtnBackForPage from "../../components/BtnBackForPage";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import X from "../../assets/imgs/close.svg";
import TitlePage from "../../components/Title-pages";
import RouteHistory from "../../components/Route-history";

const MyCart = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleHidden = () => {
      setHidden(window.innerWidth >= 769);
    };

    handleHidden();

    window.addEventListener("resize", handleHidden);
  });

  return (
    <>
      {hidden && <Header />}
      <BtnBackForPage
        text="My Bag"
        svg={<img src={X} alt="Arrow" style={{ color: "var(--Primary)" }} />}
      />
      <RouteHistory />
      <TitlePage />
      <Bag />
      {hidden && <Footer position={"fixed"} />}
    </>
  );
};

export default MyCart;
