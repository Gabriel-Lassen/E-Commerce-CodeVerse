import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const OrderSummary = ({
  subTotal,
  discount,
  delivery,
  pay,
  button,
  titleWeb,
  titleMob,
}) => {
  return (
    <div className={styles.rightWeb}>
      <div className={styles.order}>
        <h2>{titleWeb}</h2>
        <h3>{titleMob}</h3>
        <div className={styles.separator}></div>
        <div>
          <p>Sub Total</p>
          <span>${subTotal.toFixed(2)}</span>
        </div>
        <div>
          <p>Discount</p>
          <span>-${discount}</span>
        </div>
        <div>
          <p>Delivery</p>
          <span>-${delivery.toFixed(2)}</span>
        </div>
        <div>
          <h2>Grand Total</h2>
          <span>${pay.toFixed(2)}</span>
        </div>
      </div>
      {button && (
        <div className={styles.bottom}>
          <div>
            <p>Total Bag Amount</p>
            <span>${pay.toFixed(2)}</span>
          </div>
          <button>Place Order</button>

          <Link to="/">
            <button className={styles.cShop}>Continue Shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
