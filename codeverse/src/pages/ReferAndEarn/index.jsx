import ReferandEarn from "../../components/Refer-Earn";
import Header from "../../components/Header";
import ShowFooter from "../../components/ShowFooter";
import BtnBackForPage from "../../components/BtnBackForPage";
import ArrowSvg from "../../components/ArrowSvg";
import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import SideBarProfile from "../../components/SideBar-Profile";
import TitlePage from "../../components/Title-pages";
import RouteHistory from "../../components/Route-history";

const ReferAndEarn = () => {
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
        text="Refer & Earn"
      />
      <RouteHistory />
      <TitlePage />
      <div className={styles.wrapper}>
        {hidden && <SideBarProfile />}
        <ReferandEarn />
      </div>
      {hidden && <ShowFooter />}
    </div>
  );
};

export default ReferAndEarn;
