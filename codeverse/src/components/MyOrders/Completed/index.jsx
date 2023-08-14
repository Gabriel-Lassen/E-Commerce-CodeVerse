import styles from "./styles.module.scss";
import OrdersActionsContext from "../../../contexts/ordersActions";
import { useContext } from "react";
import ArrowSvg from "../../ArrowSvg";

const Completed = () => {
  //const { userOrders } = useContext(OrdersActionsContext);

  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <span>Order ID</span>
        <span>Date</span>
        <span>Price</span>
        <span>Status</span>
      </div>
      <div className={styles.ordersContainer}>
        {/* {userOrders &&
          userOrders.map((order) => (
            <div className={styles.card} key={order.orderId}>
              <div>
                <input type="checkbox" name="" id="" />
                <span>{order.orderId}</span>
              </div>
              <span>{order.orderDate}</span>
              <span>{order.orderTotalPrice}</span>
              <span>Paid</span>
              <ArrowSvg />
            </div>
          ))} */}
      </div>
    </div>
  );
};

export default Completed;
