import Bag from "../../components/Bag";
import BtnBackForPage from "../../components/BtnBackForPage";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useEffect, useState } from "react";

const MyCart = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleHidden = () => {
      setHidden(window.innerWidth >= 768);
    };

    handleHidden();

    window.addEventListener("resize", handleHidden);
  });

  return (
    <>
      {hidden && <Header />}
      <BtnBackForPage text="My Bag" />
      <Bag />
      {hidden && <Footer />}
    </>
  );
};

export default MyCart;
