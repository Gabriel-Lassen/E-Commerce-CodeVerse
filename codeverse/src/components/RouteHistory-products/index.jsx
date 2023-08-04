import Arrow from "../../assets/imgs/chevron-right-small.svg";
import styles from "./styles.module.scss";

import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../contexts/products";

const RouteHistProd = () => {
  const { listProducts } = useContext(ProductsContext);
  const [productCategory, setProductCategory] = useState("");
  const [productName, setProductName] = useState("");

  useEffect(() => {
    if (listProducts) {
      const productId = window.location.pathname.split("/products/").pop();

      const product = listProducts.find((item) => item.id === productId);

      if (product) {
        setProductCategory(product.category);
        setProductName(product.name);
      }
    }
  }, [listProducts]);

  const productCategoryUpperCase = productCategory.charAt(0).toUpperCase() + productCategory.slice(1);

  return (
    <div className={styles.bread}>
      <Link className={styles.link} to='/'>
        <span className={styles.textBlue}>Home</span>
          <img src={Arrow} alt="Arrow" />
      </Link>

      <Link className={styles.link} to={`/categories/${productCategory}`}>
        <span className={styles.textBlue}>
          {productCategoryUpperCase}</span>
          <img src={Arrow} alt="Arrow" />
      </Link>

        <span className={styles.textGray}>{productName}</span>
    </div>
  );
};

export default RouteHistProd;
