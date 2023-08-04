import styles from "./styles.module.scss";
import arrow from "../../assets/imgs/arrowLong.svg";
import X from "../../assets/imgs/icon-cross-small.svg";
import { Link } from "react-router-dom";
import Qty from "../Products/Qty";

// eslint-disable-next-line react/prop-types
const BagModal = ({ active }) => {
  const close = () => {
    active(false);
  };

  return (
    <div className={styles.container}>
      <header>
        <nav>
          <button onClick={close}>
            <img src={arrow} alt="" />
          </button>
          <h1>Back</h1>
        </nav>
      </header>

      <div className={styles.card}>
        <img src="" alt="" />

        <div className={styles.prodDesc}>
          <span>Coach</span>
          <span>Leather Coach Bag</span>
          <Qty />
        </div>
        <div className={styles.cardRight}>
          <button>
            <img src={X} alt="" />
          </button>
          <span>$54.69</span>
        </div>
      </div>

      <div className={styles.price}>
        <div className={styles.subTotal}>
          <p>Subtotal: </p>
          <span>$109.38</span>
        </div>
        <div className={styles.tax}>
          <p>Tax: </p>
          <span>$2.00</span>
        </div>
        <div className={styles.total}>
          <p>Total: </p>
          <span>$111.38</span>
        </div>
      </div>

      <div className={styles.coupon}>
        <input type="text" placeholder="Apply Coupon Code" />
        <button>CHECK</button>
      </div>

      <Link to="/mycart">
        <button className={styles.order}>Place Order</button>
      </Link>

      <p className={styles.continueSP} onClick={close}>
        Continue Shopping
      </p>
    </div>
  );
};

export default BagModal;
