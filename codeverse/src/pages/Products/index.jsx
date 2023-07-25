import styles from "./styles.module.scss";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductsInfo from "../../components/Products/Product-Info";
import ProductImg from "../../components/Products/Products-imgs";

import { useState, useEffect } from "react";
import OverviewMobile from "../../components/Products/Product-Overview/OverviewMobile";
import ProductOverview from "../../components/Products/Product-Overview";

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
      <div className={styles.wrapper}>
        <ProductImg />
        <div className={styles.productInfo}>
          <ProductsInfo />
        </div>
      </div>
      <ProductOverview />
      {hidden && <Footer />}
    </>
  );
};

export default Products;
