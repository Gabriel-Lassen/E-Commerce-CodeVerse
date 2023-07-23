import styles from "./styles.module.scss";

const ProductPromo = () => {
 
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.cardInfo}>
          <span className={styles.infoDiscount}>Get upto 30% Off on order value above $100</span>
          <span className={styles.infoPolicy}>Terms & Conditions</span>
        </div>
        <div className={styles.cardCode}>
          <span className={styles.codeUser}>Use Code</span>
          <span className={styles.codeNumber}>ORDER100</span>
        </div>
      </div>
    </>
  );
};

export default ProductPromo;
