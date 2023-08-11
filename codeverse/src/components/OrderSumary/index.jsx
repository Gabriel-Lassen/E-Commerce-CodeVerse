import styles from "./styles.module.scss";
import { BagActionsContext } from "../../contexts/bagActions";
import { ProductsContext } from "../../contexts/products";
import { useContext, useEffect, useState } from "react";
import OrderSummary from "../OrderSummary";

const OrderSumary = () => {
  const { listProducts } = useContext(ProductsContext);
  const { userBag } = useContext(BagActionsContext);
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [pay, setPay] = useState(0);

  const getProductById = (productId) => {
    return listProducts.find((product) => product.id === productId);
  };

  const discountedPrice = (productId) => {
    const product = getProductById(productId);

    const quantity = 1;

    return product.price * (1 - product.discount) * quantity;
  };

  useEffect(() => {
    const Price = userBag.reduce(
      (totalPrice, item) => totalPrice + discountedPrice(item.productId),
      0
    );

    const cupom = 0;
    const delivery = 0;
    const total = Price + delivery;

    setSubTotal(Price);
    setDiscount(cupom);
    setDelivery(delivery);
    setPay(total);
  }, [userBag]);



const data = new Date();

const month = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

data.setDate(data.getDate() + 14);

const Day = String(data.getDate()).padStart(2, '0');
const Month = month[data.getMonth()];

const formatoData = `${Day} ${Month}`;

  return (
    <div className={styles.container}>
      <h2 className={styles.order}>Order Sumary</h2>
      <h3 className={styles.expected}>Expected Delivery</h3>
      <div className={styles.separator}></div>
      {userBag.map((item) => {
        const product = getProductById(item.productId);
        if (!product) {
          return null;
        }
        return (
            <div className={styles.cards} key={item.productId}>
              <img src={product.url} alt={product.name} />
              <div className={styles.prodDesc}>
                <span className={styles.data}>{formatoData}</span>
                <span>{product.name}</span>
                <span>{product.info}</span>
                <span className={styles.qty}>Qty- 1</span>
              </div>
            </div>
        );
      })}
      <OrderSummary
      subTotal={subTotal}
      discount={discount} delivery={delivery} pay={pay} button={false} titleWeb={"Order Details"} titleMob={"Order Details"} />
    </div>
  );
};
export default OrderSumary;
