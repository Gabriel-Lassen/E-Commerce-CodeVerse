import styles from "./styles.module.scss";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductsInfo from "../../components/Products/Product-Info";
import ProductImg from "../../components/Products/Products-imgs";

import { useState, useEffect } from "react";
import ProductOverview from "../../components/Products/Product-Overview";

import { useLocation } from 'react-router-dom';

const Products = () => {
  const [hidden, setHidden] = useState(false);
  const [key, setKey] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleHidden = () => {
      setHidden(window.innerWidth >= 768);
    };

    handleHidden();

    let newKey = key + 1;
    setKey(newKey);

    window.addEventListener("resize", handleHidden);
  }, [location]);

  return (
    <div key={key}>
      {hidden && <Header />}
      <div className={styles.wrapper}>
        <ProductImg />
        <div className={styles.productInfo}>
          <ProductsInfo />
        </div>
      </div>
      <ProductOverview />
      {hidden && <Footer />}
    </div>
  );
};

export default Products;
