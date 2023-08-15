import { useState, useEffect } from "react";
import OrderSumary from "../../components/OrderSumary"
import Header from "../../components/Header";
import ShowFooter from "../../components/ShowFooter";
import BtnBackForPage from "../../components/BtnBackForPage";
import ArrowSvg from "../../components/ArrowSvg";
import TitlePage from "../../components/Title-pages";
import RouteHistory from "../../components/Route-history";
import Address from "../../components/Address";
import styles from "./styles.module.scss";

import DropdowBtn from "../../components/DropdowBtn";
import BtnAddress from "../../components/BtnOpenAddress";
import { Payment } from "../../components/Payment";
import { PaymentDesktop } from "../../components/PaymentDesktop";


const Checkout = () => {
  
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
        <BtnAddress />
        {hidden && 
        <DropdowBtn title='Contact Information'>
              <Address />
        </DropdowBtn>}
        
        {hidden && 
        <DropdowBtn title='Select Payment Method' footer='footer'>
              <PaymentDesktop/>
        </DropdowBtn>}

        <Payment/>
        </div>
        
        <OrderSumary/>
        </div>
     </div>
     {hidden && <ShowFooter />}
   </div>
  )
}

export default Checkout