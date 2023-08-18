import Bag from "../../components/Bag";
import BtnBackForPage from "../../components/BtnBackForPage";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import X from "../../assets/imgs/close.svg";
import TitlePage from "../../components/Title-pages";
import RouteHistory from "../../components/Route-history";
import ShowFooter from "../../components/ShowFooter";

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
      <div style={{display: "flex", flexDirection:"column", justifyContent: 'space-between', height: "100%"}}>
      <div>
      {hidden && <Header />}
      <BtnBackForPage
        text="My Bag"
        svg={<img src={X} alt="Arrow" style={{ color: "var(--Primary)" }} />}
      />
      <RouteHistory />
      <TitlePage />
      <Bag />
      </div>
      {hidden && <ShowFooter/>}
      </div>
  );
};

export default MyCart;
