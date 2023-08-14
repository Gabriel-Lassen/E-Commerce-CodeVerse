import { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { OrdersActionsContext } from '../../contexts/ordersActions';

const ItemsOrdered = ({id}) => {
    const { userOrders } = useContext(OrdersActionsContext);
    const [itemsOrdered, setItemsOrdered] = useState([]);
    const [order, setOrder] = useState();

    useEffect(() => {
        const order = userOrders.find((item) => {return item.orderId == id});
        if(order) {
            setOrder(order);
            setItemsOrdered(order.productsOrdered);
        }
    }, [userOrders, id]);

  return (
    <div>

    </div>
  )
}

export default ItemsOrdered