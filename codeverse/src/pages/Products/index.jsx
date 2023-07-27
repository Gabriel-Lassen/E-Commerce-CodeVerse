import styles from "./styles.module.scss";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductsInfo from "../../components/Products/Product-Info";
import ProductImg from "../../components/Products/Products-imgs";
import BtnBackForPage from "../../components/BtnBackForPage";
import ArrowSvg from "../../components/ArrowSvg";

import { useState, useEffect } from "react";

const Products = () => {
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
     <BtnBackForPage svg={<ArrowSvg color='var(--Dark)' direction='left'/>} />
      <div className={styles.wrapper}>
        <ProductImg />
        <div className={styles.productInfo}>
          <ProductsInfo />
        </div>
      </div>

      {hidden && <Footer />}
    </>
  );
};

export default Products;
