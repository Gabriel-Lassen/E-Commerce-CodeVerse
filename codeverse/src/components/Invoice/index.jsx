import styles from "./styles.module.scss";

import { OrdersActionsContext } from "../../contexts/ordersActions";
import { useState, useContext, useEffect } from "react";
import MobileSeparator from "../MobileSeparator";

const Invoice = ({ id }) => {
  const { userOrders, handleExecuteOrder } = useContext(OrdersActionsContext);
  const [itemsOrdered, setItemsOrdered] = useState([]);
  const [order, setOrder] = useState();

  useEffect(() => {
    const order = userOrders.find((item) => {
      return item.orderId == id;
    });
    if (order) {
      setOrder(order);
      setItemsOrdered(order.productsOrdered);
    }
  }, [userOrders, id]);

  return (
    <>
      {order && (
        <div className={styles.container}>
          <div className={styles.card}>
            <span className={styles.id}>{order.orderId}</span>
            <div>
              <span className={styles.text}>Placed On</span>
              <span className={styles.date}>{order.orderDate}</span>
            </div>
          </div>

          <span className={styles.qty}>{order.length} Item(s)</span>
          <div className={styles.productContainer}>
            {itemsOrdered &&
              itemsOrdered.map((item) => {
                return (
                  <div className={styles.products}>
                    <div>
                      <span className={styles.Name}>{item.productName}</span>
                      <span className={styles.info}>{item.productInfo}</span>
                    </div>
                    <span className={styles.price}>{item.productPrice}</span>
                    <span>Qty- 1</span>
                    <div className={styles.separator}></div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default Invoice;
