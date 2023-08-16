import styles from "./styles.module.scss";
import { OrdersActionsContext } from "../../../contexts/ordersActions";
import { useContext } from "react";
import ArrowSvg from "../../ArrowSvg";

const Completed = () => {
  const { userOrders } = useContext(OrdersActionsContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>
        <span>Order ID</span>
        <span>Date</span>
        <span>Price</span>
        <span className={styles.status}>Status</span>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.qty}><span>{userOrders.length} Order(s)</span></div>
      <div className={styles.ordersContainer}>
        {userOrders &&
          userOrders.map((order) => (
            <div className={styles.card} key={order.orderId}>
              <div className={styles.mob}>
                <div className={styles.id}>
                  <input type="checkbox" />
                  <span>{order.orderId}</span>
                </div>

                <span className={styles.date}>{order.orderDate}</span>
                <span className={styles.price}>${order.orderTotalPrice}</span>
                <span className={styles.status}>Paid</span>
              </div>
              <ArrowSvg color="var(--TypeLowEmphasis)" direction="right" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Completed;
