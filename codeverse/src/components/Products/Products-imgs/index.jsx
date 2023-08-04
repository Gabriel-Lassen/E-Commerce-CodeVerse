import styles from "./styles.module.scss";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../../contexts/products";
import btnImg from "../../../assets/imgs/icon-view-smilar.svg";
import ModalBottomMobile from "../../ModalBottomMobile/indes";
import ProductsCarousel from "../../productsCarousel";

const ProductImg = ({ selectImage }) => {
  const { listProducts } = useContext(ProductsContext);
  const [productCategory, setProductCategory] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (listProducts) {
      const productId = window.location.pathname.split("/products/").pop();

      const product = listProducts.find((item) => item.id === productId);
      setProductCategory(product.category)
    }
  }, [listProducts]);

  return (
    <>
      <div className={styles.containerCarrossel}>
        <div className={styles.image}>
          <img src={selectImage} />
          <button onClick={() => setShowModal(true)}>
            <img src={btnImg} />
          </button>
        </div>
        <div className={styles.imageMob}>
          <img src={selectImage} />
        </div>
        {showModal &&
        <ModalBottomMobile title='You may also like' showModal={showModal} setShowModal={setShowModal}>
          <ProductsCarousel
              showViewAll={false}
              keyToFilter='category'
              expectedOutcome={productCategory}
              maxItems={6}
          />
        </ModalBottomMobile>
      }
      </div>
    </>
  );
};

export default ProductImg;
