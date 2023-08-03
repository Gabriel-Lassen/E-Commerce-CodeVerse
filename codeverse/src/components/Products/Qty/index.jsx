import styles from "./styles.module.scss";
import { useState } from "react";

const Qty = ({ qty }) => {
  const [count, setCount] = useState(1);

  const plus = () => {
    if (count < qty) {
      setCount((counter) => counter + 1);
    }
  };

  const less = () => {
    if (count > 1) {
      setCount((counter) => counter - 1);
    }
  };

  return (
    <div className={styles.qty}>
      <span>Quantity:</span>
      <div className={styles.btn}>
        <button onClick={less}>-</button>
        {count}
        <button onClick={plus}>+</button>
      </div>
    </div>
  );
};

export default Qty;
