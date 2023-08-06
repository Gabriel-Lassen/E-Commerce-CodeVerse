import Bag from "../../components/Bag";
import BtnBackForPage from "../../components/BtnBackForPage";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import X from "../../assets/imgs/close.svg";

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
        svg={
          <img src={X} alt="Arrow" style={{ color: "var(--Primary)" }} />
        }
      />
      <Bag />
      {hidden && <Footer />}
    </>
  );
};

export default MyCart;
