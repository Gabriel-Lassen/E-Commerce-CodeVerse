import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BtnBackForPage from "../../components/BtnBackForPage";
import ArrowSvg from "../../components/ArrowSvg";
import SideBarProfile from "../../components/SideBar-Profile";
import TitlePage from "../../components/Title-pages";
import RouteHistory from "../../components/Route-history";
import Addres from "../../components/Edit-Addres";
import styles from "./styles.module.scss";
import BtnAddres from "../../components/BtnOpenAddres";
import DropdowBtn from "../../components/DropdowBtn";

const MyAddressBook = () => {
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
      <div className={styles.wrapper}>
      {hidden && <SideBarProfile />}
      <BtnAddres />
      {hidden && 
      <DropdowBtn title='Add New Address'>
            <Addres />
      </DropdowBtn>}
      </div>
      {hidden && <Footer />}
    </div>
  );
};

export default MyAddressBook