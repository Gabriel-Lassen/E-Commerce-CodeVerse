import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import ShowFooter from "../../components/ShowFooter";
import ArrowSvg from "../../components/ArrowSvg";
import SideBarProfile from "../../components/SideBar-Profile";
import TitlePage from "../../components/Title-pages";
import RouteHistory from "../../components/Route-history";
import MyOrdersComponente from "../../components/MyOrders";
import bag from "../../assets/imgs/bag.svg";
import { Link, useNavigate } from "react-router-dom";

const MyOrders = () => {
  const [hidden, setHidden] = useState(false);
  const [reverse, setReverse] = useState(true);

  useEffect(() => {
    const handleHidden = () => {
      setHidden(window.innerWidth >= 769);
      !setReverse(window.innerWidth <= 768);
    };

    handleHidden();

    window.addEventListener("resize", handleHidden);
  });

  const navigate = useNavigate();

  const handleBackPage = () => {
    navigate(-1);
  };

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
        {hidden && <Header />}
        {reverse && (
          <header className={styles.header}>
            <div className={styles.btn} onClick={handleBackPage}>
              <ArrowSvg color="var(--Primary)" direction="left" />
              <span className={styles.title}>My orders</span>
            </div>
            <Link to="/profile/mycart" className={styles.bag}>
              <img src={bag} />
            </Link>
          </header>
        )}
        {hidden && <RouteHistory />}
        <TitlePage />
        <div className={styles.container}>
          {hidden && <SideBarProfile />}
          <MyOrdersComponente />
        </div>
      </div>
      {hidden && <ShowFooter />}
    </div>
  );
};

export default MyOrders;
