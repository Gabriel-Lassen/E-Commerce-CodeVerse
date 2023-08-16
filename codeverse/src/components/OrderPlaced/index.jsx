import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { OrdersActionsContext } from "../../contexts/ordersActions";

import styles from "./styles.module.scss";

import BtnBackForPage from "../BtnBackForPage";
import BtnGeneric from "../BtnGeneric";

import CloseSvg from "../../assets/imgs/close.svg";
import orderPlaced from '../../assets/imgs/orderPlaced.png'

export const OrderPlaced = () => {
  const { orderConfirmed, setOrderConfirmed } = useContext(OrdersActionsContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!orderConfirmed) {
      navigate('/');
    }
  }, [])

  function handleContinueShopping() {
    navigate('/');
    setOrderConfirmed(false);
  }

  function handleViewOrder() {
    navigate('/profile/myorders');
    setOrderConfirmed(false);
  }

  return (
    <>
      {orderConfirmed &&
        <div className={styles.container}>
          <BtnBackForPage
            svg={<img src={CloseSvg} alt="Arrow" style={{ color: "var(--Primary)" }} />}
            text="Order Placed"
          />
          <div className={styles.section}>
            <img src={orderPlaced} />
            <h2>Cheerio!!</h2>
            <p>
              The order has been placed. Thanks for shopping with us. You’ll soon
              recieve the tracking details
            </p>
            <div className={styles.btns}>
              <BtnGeneric theme='light' text='View Order' onClick={handleViewOrder} />
              <BtnGeneric theme='dark' text='Continue Shopping' onClick={handleContinueShopping}/>
            </div>
          </div>
        </div>
      }
    </>
  );
};
