import styles from "../Completed/styles.module.scss";

const Cancelled = () => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <span>Order ID</span>
        <span>Date</span>
        <span>Price</span>
        <span className={styles.status}>Status</span>
      </div>
      <div className={styles.separator}></div>
    </div>
  );
};

export default Cancelled;
