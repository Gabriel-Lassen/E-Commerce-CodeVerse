import styles from "./styles.module.scss";
import arrow from "../../../assets/imgs/icon-chevron-right-web.svg";
import teste from "../../../assets/imgs/teste.png";
import teste2 from "../../../assets/imgs/teste2.png";
import teste3 from "../../../assets/imgs/teste3.png";
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
      <div className={styles.arrow}>
        <button>
          <img src={arrow} className={styles.left} />
        </button>
      </div>
      <div>
        <button onClick={() => setImageUrl(`https://placebear.com/g/200/200`)}>
          <img src={teste} alt="" />
        </button>
        <button
          onClick={() =>
            setImageUrl(
              `https://cdn.shopify.com/s/files/1/1830/5085/products/VE0007_BCAA_Capsule_90ct_2048x2048.png?v=1494855182`
            )
          }
        >
          <img src={teste2} alt="" />
        </button>
        <button
          onClick={() =>
            setImageUrl(`https://source.unsplash.com/user/c_v_r/1900×800`)
          }
        >
          <img src={teste3} alt="" />
        </button>
        <button onClick={() => setImageUrl(imageUrl)}>
          <img src={imageUrl} alt="" />
        </button>
      </div>
      <div className={styles.arrow}>
        <button>
          <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Preview;
