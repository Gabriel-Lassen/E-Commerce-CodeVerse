import Footer from "../../components/footer";
import Header from "../../components/header";
import ProductImg from "../../components/Products/Products-imgs";
import ProductPromo from "../../components/Products/Products-promo";

import styles from "./styles.module.scss";
const Products = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
      <ProductImg />
      <ProductPromo/>
      </div>
      <Footer />
    </>
  );
};

export default Products;
