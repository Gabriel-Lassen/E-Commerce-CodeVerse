import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { OrdersActionsContext } from "../../contexts/ordersActions";
import { useContext } from "react";

import OrderSumary from "../../components/OrderSumary"
import Header from "../../components/Header";
import ShowFooter from "../../components/ShowFooter";
import BtnBackForPage from "../../components/BtnBackForPage";
import ArrowSvg from "../../components/ArrowSvg";
import TitlePage from "../../components/Title-pages";
import RouteHistory from "../../components/Route-history";
import Address from "../../components/Address";
import DropdowBtn from "../../components/DropdowBtn";
import BtnAddress from "../../components/BtnOpenAddress";
import { Payment } from "../../components/Payment";
import { PaymentDesktop } from "../../components/PaymentDesktop";
import MobileSeparator from "../../components/MobileSeparator";
import MobileFixedBottomBar from "../../components/MobileFixedBottomBar";
import BtnGeneric from "../../components/BtnGeneric";

import styles from "./styles.module.scss";


const Checkout = () => {

  const { handleExecuteOrder } = useContext(OrdersActionsContext);
  
  const [hidden, setHidden] = useState(false);

    useEffect(() => {
      const handleHidden = () => {
        setHidden(window.innerWidth >= 769);
      };
  
      handleHidden();
  
      window.addEventListener("resize", handleHidden);
    });

  return (
     <div style={{display: "flex", flexDirection:"column", justifyContent: 'space-between', height: "100%"}}>
     <div>
     {hidden && <Header />}
        <BtnBackForPage
            svg={<ArrowSvg color="var(--Primary)" direction="left" />}
          text="Order Summary"
        />
        <RouteHistory />
        <TitlePage />

        <div className={styles.wrapper}>
          <div className={styles.info}>
          <DropdowBtn title='Contact Information'>
                <Address />
          </DropdowBtn>
          
          <DropdowBtn title='Select Payment Method' footer='footer'>
                <PaymentDesktop/>
          </DropdowBtn>

          <div className={styles.btnsDiv}>
          <Link to={'/profile/mycart'}>
          <span className={styles.btnBack}>Back to Cart</span>
          </Link>
          <button className={styles.btnPayConfirm} onClick={handleExecuteOrder}> Checkout </button>
          </div>
          
          </div>
           <OrderSumary/>
        </div>

        <div className={styles.mobile}>
          <BtnAddress />

          <MobileSeparator/>
          <DropdowBtn title='Product Details'>
            <OrderSumary/>
          </DropdowBtn>

          <MobileSeparator/>
          <DropdowBtn title='Select Payment Method'>
            <Payment/>
          </DropdowBtn>

          <button className={styles.btnPayConfirm} onClick={handleExecuteOrder}>Checkout</button>

          <MobileFixedBottomBar>
            <div className={styles.bottomBar}>
              <BtnGeneric theme={'dark'} text={'Checkout'} onClick={handleExecuteOrder} />
            </div>
          </MobileFixedBottomBar>
        </div>
     </div>

     {hidden && <ShowFooter />}
   </div>
  )
}

export default Checkout