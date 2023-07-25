import styles from "./styles.module.scss";
import arrow from "../../../assets/imgs/icon-chevron-right-web.svg";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../../contexts/products";

const Preview = () => {
  const { listProducts } = useContext(ProductsContext);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (listProducts) {
      const productId = window.location.pathname.split("/products/").pop();

      const product = listProducts.find((item) => item.id === productId);

      if (product) {
        setImageUrl(product.url);
      }
    }
  }, [listProducts]);

  return (
    <div className={styles.container}>
      <button>
        <img src={arrow} className={styles.left} />
      </button>
      <div>
        <img src={imageUrl} alt="" />
        <img src={imageUrl} alt="" />
        <img src={imageUrl} alt="" />
        <img src={imageUrl} alt="" />
      </div>
      <button>
        <img src={arrow} alt="" />
      </button>
    </div>
  );
};

export default Preview;
