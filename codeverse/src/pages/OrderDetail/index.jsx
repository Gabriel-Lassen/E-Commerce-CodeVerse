import { useState, useEffect, useContext } from "react";

import styles from "./styles.module.scss";

import Header from "../../components/Header";
import ShowFooter from "../../components/ShowFooter";
import SideBarProfile from "../../components/SideBar-Profile";
import RouteHistory from "../../components/Route-history";
import ItemsOrdered from "../../components/ItemsOrdered";
import Invoice from "../../components/Invoice";

const OrderDetail = () => {
  const [hidden, setHidden] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [componentInView, setComponentInview] = useState('Items');
  const [btnActive, setBtnActive] = useState('Items');

  useEffect(() => {
    const orderId = window.location.pathname.split("/profile/myorders/").pop();
    setOrderId(orderId);
  }, [])

  useEffect(() => {
    const handleHidden = () => {
      setHidden(window.innerWidth >= 769);
    };
    handleHidden();
    window.addEventListener("resize", handleHidden);
  });

  function handleclick(text){
    setComponentInview(text);
    setBtnActive(text);
  }

  return (
    <div style={{display: "flex", flexDirection:"column", justifyContent: 'space-between', height: "100%"}}>
      <div>
        {hidden && <Header />}
        {hidden && <RouteHistory />}

        <div className={styles.title}>
          <h1>Order#{orderId}</h1>
        </div>

        <div className={styles.container}>
          {hidden && <SideBarProfile />}
          
          <div className={styles.wrapper}>
            <div className={styles.btns}>
              <button onClick={() => handleclick('Items')} className={btnActive == 'Items' ? styles.btnActive : ''} >
                Items Ordered
              </button>
              <button onClick={() => handleclick('Invoice')} className={btnActive == 'Invoice' ? styles.btnActive : ''} >
                Invoice
              </button>
              <button onClick={() => handleclick('Order')} className={btnActive == 'Order' ? styles.btnActive : ''} >
                Order Shipment
              </button>
            </div>
            <div className={styles.inView}>
              { componentInView === 'Items' &&
                <ItemsOrdered />
              }
              { componentInView === 'Invoice' &&
                <Invoice id={orderId}/>
              }
              { componentInView === 'Order' &&
                <></>
              }
            </div>
          </div>
        </div>
      </div>
      {hidden && <ShowFooter />}
    </div>
  )
}

export default OrderDetail