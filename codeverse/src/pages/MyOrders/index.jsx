import { useState, useEffect } from "react";
import Header from "../../components/Header";
import ShowFooter from "../../components/ShowFooter";
import BtnBackForPage from "../../components/BtnBackForPage";
import ArrowSvg from "../../components/ArrowSvg";
import SideBarProfile from "../../components/SideBar-Profile";
import TitlePage from "../../components/Title-pages";
import RouteHistory from "../../components/Route-history";


const MyOrders = () => {
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
        svg={<ArrowSvg color="var(--Primary)" direction="left" />}
        text="My Order"
      />
      <RouteHistory />
      <TitlePage />
      {hidden && <SideBarProfile />}
      </div>
      {hidden && <ShowFooter />}
    </div>
  );
};

export default MyOrders