import styles from "./styles.module.scss";
import { BagActionsContext } from "../../contexts/bagActions";
import { ProductsContext } from "../../contexts/products";
import { useContext, useEffect, useState } from "react";

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

  return (
    <div className={styles.container}>
      <h2>Order Sumary</h2>
      <div className={styles.separator}></div>
      {userBag.map((item) => {
        const product = getProductById(item.productId);
        if (!product) {
          return null;
        }
        return (
          <>
            <div className={styles.cards} key={item.productId}>
              <img src={product.url} alt={product.name} />
              <div className={styles.prodDesc}>
                <span>{product.name}</span>
                <span>{product.info}</span>
                <span>Qty- 1</span>
              </div>
            </div>
          </>
        );
      })}
      <div className={styles.rightWeb}>
        <div className={styles.order}>
          <h3>Order Details</h3>
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
      </div>
    </div>
  );
};
export default OrderSumary;
