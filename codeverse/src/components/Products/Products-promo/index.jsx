import styles from "./styles.module.scss";

const ProductPromo = () => {
 
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.cardInfo}>
          <span className={styles.infoDiscount}></span>
          <span className={styles.infoPolicy}></span>
        </div>
        <div className={styles.cardCode}>
          <span className={styles.codeUser}></span>
          <span className={styles.codeNumber}></span>
        </div>
      </div>
    </>
  );
};

export default ProductPromo;
