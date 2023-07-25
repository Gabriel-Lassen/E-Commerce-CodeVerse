import styles from "./styles.module.scss";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductsInfo from "../../components/Products/Product-Info";
import ProductImg from "../../components/Products/Products-imgs";
import Preview from "../../components/Products/ProductPreview";

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
      <div className={styles.wrapper}>
        <div className={styles.imgs}>
          <ProductImg />
          <Preview />
        </div>
        <div className={styles.productInfo}>
          <ProductsInfo />
        </div>
      </div>

      {hidden && <Footer />}
    </>
  );
};

export default Products;
