import ReferandEarn from "../../components/Refer-Earn";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BtnBackForPage from "../../components/BtnBackForPage";
import ArrowSvg from "../../components/ArrowSvg";
import styles from './styles.module.scss'
import { useState, useEffect } from "react";
import SideBarProfile from "../../components/SideBar-Profile";

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
      <div className={styles.wrapper}>
        {hidden && <SideBarProfile />}
        <ReferandEarn />
      </div>
      {hidden && <Footer />}
    </div>
  );
};

export default ReferAndEarn;
