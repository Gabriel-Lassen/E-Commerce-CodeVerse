import styles from "./styles.module.scss";

const Bag = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <div className={styles.labels}>
          <h2>Product Name</h2>
          <div>
            <h2>Price</h2>
            <h2>Qty</h2>
            <h2>Subtotal</h2>
          </div>
        </div>
        <div className={styles.separador}></div>
      </div>
      <div className={styles.containerRight}></div>
    </div>
  );
};

export default Bag;
