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

  useEffect(() => {
    const handleHidden = () => {
      setHidden(window.innerWidth >= 769);
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
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0 16px",
            height: "56px",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", gap: "20px" }}
            onClick={handleBackPage}
          >
            <ArrowSvg color="var(--Primary)" direction="left" />
            <span
              style={{
                color: "var(--Primary)",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "26px",
              }}
            >
              My orders
            </span>
          </div>
          <Link to="/profile/mycart" style={{ width: "24px", height: "24px" }}>
            <img src={bag} />
          </Link>
        </header>
        <RouteHistory />
        <TitlePage />
        <div style={{ display: "flex", flexDirection: "row" }}>
          {hidden && <SideBarProfile />}
          <MyOrdersComponente />
        </div>
      </div>
      {hidden && <ShowFooter />}
    </div>
  );
};

export default MyOrders;
