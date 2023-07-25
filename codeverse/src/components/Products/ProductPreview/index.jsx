import styles from "./styles.module.scss";
import arrow from "../../../assets/imgs/icon-chevron-right-web.svg";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../../contexts/products";
import ProductImg from "../Products-imgs";

const Preview = () => {
  const { listProducts } = useContext(ProductsContext);
  const [imageUrl, setImageUrl] = useState("");
  const [selectImage, setSelectImage] = useState("");

  useEffect(() => {
    if (listProducts) {
      const productId = window.location.pathname.split("/products/").pop();

      const product = listProducts.find((item) => item.id === productId);

      if (product) {
        setImageUrl(product.url);
        setSelectImage(product.url);
      }
    }
  }, [listProducts]);

  const switchImg = (newImage) => {
    setSelectImage(newImage);
  };

  return (
    <div className={styles.imgs}>
      <ProductImg selectImage={selectImage} />
      <div className={styles.container}>
        <div className={styles.arrow}>
          <button>
            <img src={arrow} className={styles.left} />
          </button>
        </div>
        <div>
          <button onClick={() => switchImg(`https://placebear.com/g/200/200`)}>
            <img src={`https://placebear.com/g/200/200`} alt="" />
          </button>
          <button
            onClick={() =>
              switchImg(
                `https://cdn.shopify.com/s/files/1/1830/5085/products/VE0007_BCAA_Capsule_90ct_2048x2048.png?v=1494855182`
              )
            }
          >
            <img
              src={`https://cdn.shopify.com/s/files/1/1830/5085/products/VE0007_BCAA_Capsule_90ct_2048x2048.png?v=1494855182`}
              alt=""
            />
          </button>
          <button
            onClick={() =>
              switchImg(`https://source.unsplash.com/user/c_v_r/1900×800`)
            }
          >
            <img
              src={`https://source.unsplash.com/user/c_v_r/1900×800`}
              alt=""
            />
          </button>
          <button onClick={() => switchImg(imageUrl)}>
            <img src={imageUrl} alt="" />
          </button>
        </div>
        <div className={styles.arrow}>
          <button>
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
