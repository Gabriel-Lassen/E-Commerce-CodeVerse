import styles from "./styles.module.scss";

const Cupom = () => {
  return (
    <div className={styles.cupom}>
      <input type="text" placeholder="Apply Coupon Code" />
      <button>CHECK</button>
    </div>
  );
};

export default Cupom;
