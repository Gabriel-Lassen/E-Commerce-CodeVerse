import styles from "./styles.module.scss";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductsInfo from "../../components/Products/Product-Info";
import BtnBackForPage from "../../components/BtnBackForPage";
import ArrowSvg from "../../components/ArrowSvg";
import Preview from "../../components/Products/ProductPreview";

import { useState, useEffect } from "react";
import ProductOverview from "../../components/Products/Product-Overview";

import { useLocation } from 'react-router-dom';
import BtnAddToBag from "../../components/BtnAddToBag";
import BtnAddToWishlist from "../../components/BtnAddToWishlist";

const Products = () => {
  const [hidden, setHidden] = useState(false);
  const [key, setKey] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleHidden = () => {
      setHidden(window.innerWidth >= 769);
    };

    handleHidden();

    let newKey = key + 1;
    setKey(newKey);

    window.addEventListener("resize", handleHidden);
  }, [location]);

  return (
    <div key={key}>
      {hidden && <Header />}
     <BtnBackForPage svg={<ArrowSvg color='var(--Dark)' direction='left'/>} />
      <div className={styles.wrapper}>
        <Preview />
        <div className={styles.productInfo}>
          <ProductsInfo />
          <div className={styles.btns}>
            <BtnAddToBag />
            <BtnAddToWishlist type='big' />
          </div>
        </div>
      </div>
      <ProductOverview />
      {hidden && <Footer />}
    </div>
  );
};

export default Products;
