import styles from "./styles.module.scss";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ProductsInfo from "../../components/Products/Product-Info";
import ProductImg from "../../components/Products/Products-imgs";
import ProductPromo from "../../components/Products/Products-promo";

import styles from "./styles.module.scss";
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
      <div className={styles.wrapper}>
        <ProductImg />
      <ProductPromo/>
      </div>
        <ProductsInfo />
      </div>
      {hidden && <Footer />}
    </>
  );
};

export default Products;
