import styles from "./styles.module.scss";

const Qty = ({ qty, text, gap, quantity, onQuantityChange }) => {
  const plus = () => {
    if (quantity < qty) {
      onQuantityChange(quantity + 1);
    }
  };

  const less = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className={styles.qty} style={{ gap: gap }}>
      <span>{text}</span>
      <div className={styles.btn}>
        <button onClick={less} disabled>-</button>
        {quantity}
        <button onClick={plus} disabled>+</button>
      </div>
    </div>
  );
};

export default Qty;
