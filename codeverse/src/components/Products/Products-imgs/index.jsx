import styles from "./styles.module.scss";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../../contexts/products";
import btnImg from "../../../assets/imgs/icon-view-smilar.svg";

const ProductImg = () => {
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
    <>
      <div className={styles.containerCarrossel}>
        <div className={styles.image}>
          <img src={imageUrl} />
          <button>
            <img src={btnImg} />
          </button>
        </div>
        <div className={styles.imageMob}>
          <img src={imageUrl} />
        </div>
      </div>
    </>
  );
};

export default ProductImg;
