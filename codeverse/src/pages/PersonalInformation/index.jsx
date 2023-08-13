import Header from "../../components/Header";
import ShowFooter from "../../components/ShowFooter";
import BtnBackForPage from "../../components/BtnBackForPage";
import ArrowSvg from "../../components/ArrowSvg";
import styles from "./styles.module.scss";
import SideBarProfile from "../../components/SideBar-Profile";
import { useState, useEffect } from "react";
import ProfileInformation from "../../components/Personal-information";
import TitlePage from "../../components/Title-pages";
import RouteHistory from "../../components/Route-history";
import Logout from "../../components/BtnLogout";

const PersonalInformation = () => {
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
          text="Personal Information"
        />
        <RouteHistory />
        {hidden && 
          <div className={styles.container}>
            <TitlePage />
            <Logout/>
          </div>
        }
        <div className={styles.wrapper}>
          {hidden && <SideBarProfile />}
          <ProfileInformation />
        </div>
      </div>
      {hidden && <ShowFooter />}
    </div>
  );
};

export default PersonalInformation;
