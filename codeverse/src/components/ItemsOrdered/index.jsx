import { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { OrdersActionsContext } from '../../contexts/ordersActions';
import ProductCardOrdered from '../ProductCardOrdered';
import MobileSeparator from '../MobileSeparator';
import OrderDetails from '../OrderDetails';
import AddressDetails from '../AddressDetails';

const ItemsOrdered = () => {
    const { userOrders, handleExecuteOrder } = useContext(OrdersActionsContext);
    const [itemsOrdered, setItemsOrdered] = useState([]);
    const [order, setOrder] = useState();
    const [orderId, setOrderId] = useState('');

    useEffect(() => {
      const orderId = window.location.pathname.split("/profile/myorders/").pop();
      setOrderId(orderId);
    }, [])

    useEffect(() => {
        const order = userOrders.find((item) => {return item.orderId == orderId});
        if(order) {
            setOrder(order);
            setItemsOrdered(order.productsOrdered);
        }
    }, [userOrders, orderId]);

  return (
    <>
      {order &&
        <div className={styles.wrapper}>

          <div className={styles.table}>
            <div className={styles.nameFiled}>
              <span>Product Name</span>
            </div>
            <div className={styles.otherFilds}>
              <span>Price</span>
              <span>Qty</span>
              <span>Subtotal</span>
            </div>
          </div>
          <hr />

          <div className={styles.products}>
            {itemsOrdered &&
              itemsOrdered.map((product, idx) => {
                return (
                  <ProductCardOrdered
                    key={idx}
                    id={product.productId}
                    imgUrl={product.productImage}
                    name={product.productName}
                    info={product.productInfo}
                    price={product.productPrice}
                  />
                )
              })
            }
          </div>

          <div className={styles.information}>
            <span>Order Information</span>
            <hr />
          </div>

          <div className={styles.container}>
            <MobileSeparator />

            <div className={styles.details}>
              <OrderDetails totalPrice={order.orderTotalPrice} />
            </div>

            <MobileSeparator />
            <hr className={styles.divider} />

            <div className={styles.payment}>
              <span>Payment Details</span>
              <span>{order.paymentMethod}</span>
            </div>

            <MobileSeparator />
            <hr className={styles.divider} />

            <div className={styles.details}>
              <AddressDetails name={order.orderedName} complement={order.orderAddress.complement} street={order.orderAddress.street} city={order.orderAddress.city} pinCode={order.orderAddress.pinCode} /> 
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default ItemsOrdered