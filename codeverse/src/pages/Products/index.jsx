import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";

import { ProductsContext } from "../../contexts/products";

import styles from "./styles.module.scss";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductsInfo from "../../components/Products/Product-Info";
import BtnBackForPage from "../../components/BtnBackForPage";
import ArrowSvg from "../../components/ArrowSvg";
import Preview from "../../components/Products/ProductPreview";
import ProductOverview from "../../components/Products/Product-Overview";
import BtnAddToBag from "../../components/BtnAddToBag";
import BtnAddToWishlist from "../../components/BtnAddToWishlist";
import RouteHistoryProducts from "../../components/RouteHistory-products";

const Products = () => {
  const { listProducts } = useContext(ProductsContext);
  const [hidden, setHidden] = useState(false);
  const [key, setKey] = useState(0);
  const location = useLocation();
  const [productId, setProductId] = useState('');

  useEffect(() => {
    if (listProducts) {
      const productId = window.location.pathname.split("/products/").pop();
      const product = listProducts.find((item) => item.id === productId);
      if (product) {
        setProductId(product.id)
      }
    }
  }, [listProducts])

  useEffect(() => {
    const handleHidden = () => {
      setHidden(window.innerWidth >= 769);
    };

    handleHidden();

    let newKey = key + 1;
    setKey(newKey);
    
    window.addEventListener("resize", handleHidden);

    if (listProducts) {
      const productId = window.location.pathname.split("/products/").pop();
      const product = listProducts.find((item) => item.id === productId);
      if (product) {
        setProductId(product.id)
      }
    }
  }, [location]);

  return (
    <div key={key}>
      {hidden && <Header />}
      <RouteHistoryProducts />
      <BtnBackForPage svg={<ArrowSvg color="var(--Dark)" direction="left" />} />
      <div className={styles.wrapper}>
        <Preview />
        <div className={styles.productInfo}>
          <ProductsInfo />
          <div className={styles.btns}>
            <BtnAddToBag id={productId} />
            <BtnAddToWishlist type="big" id={productId} />
          </div>
        </div>
      </div>
      <ProductOverview />
      {hidden && <Footer />}
    </div>
  );
};

export default Products;
