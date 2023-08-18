import { useContext, useState } from "react";
import { OrdersActionsContext } from "../../contexts/ordersActions";
import styles from "./styles.module.scss";
import plusIcon from "../../assets/imgs/small-plus.png";
import minusIcon from "../../assets/imgs/minus-icon.png";
import select from "../../assets/imgs/selecionado.png";
import selectCheckbox from "../../assets/imgs/select.png";
import googlePlay from "../../assets/imgs/googlePlay.png";
import pay from '../../assets/imgs/payTm.png'
import phone from '../../assets/imgs/phonePe.png'
import EnterUpi from "../EnterUpi";

export const Payment = () => {
  const { paymentMethod, setPaymentMethod } = useContext(OrdersActionsContext);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isDivClicked, setIsDivClicked] = useState(false);
  const [ContentVisible, setContentVisible] = useState(false);
  const [divClicked, setDivClicked] = useState(false);
  const [isActivee, setIsActivee] = useState(false);

  const handleToggleClick = () => {
    setIsContentVisible(!isContentVisible);
  };

  const handleDivClick = (event) => {
    setIsDivClicked(!isDivClicked);
    event.stopPropagation();
  };

  const handleToggle = () => {
    setContentVisible(!ContentVisible);
  };

  const handleClick = (event) => {
    setDivClicked(!divClicked);
    event.stopPropagation();
  };


  const toggleSVG = () => {
    setIsActivee((Active) => !Active);
  };

  return (
    <>
      <div className={`${styles.payment} ${isDivClicked ? styles.clickedDiv : ""}`} onClick={handleDivClick} style={{background: isDivClicked ? "var(--Grey)" : "none"}}>
        <div className={styles.toggleContainer} onClick={handleToggleClick}>
          <h1>Debit Card/Credit Card</h1>
          <img src={isContentVisible ? minusIcon : plusIcon} className={styles.toggleIcon} id="toggleIcon" onClick={handleToggleClick} />
        </div>
      </div>

      {isContentVisible && (
        <div className={styles.optionsContainer}>
          <div className={`${styles.option} ${paymentMethod === "debit" ? styles.selected : "" }`} onClick={() => setPaymentMethod("debit")}>
            <p>Debit Card</p>
            <img src={paymentMethod === "debit" ? select : selectCheckbox} />
          </div>

          <div className={`${styles.option} ${paymentMethod === "credit" ? styles.selected : "" }`} onClick={() => setPaymentMethod("credit")}>
            <p>Credit Card</p>
            <img src={paymentMethod === "credit" ? select : selectCheckbox} />
          </div>
        </div>
      )}

      <div className={`${styles.payment} ${divClicked ? styles.clickedDiv : ""}`} onClick={handleClick} style={{background: divClicked ? "var(--Grey)" : "none"}}>
        <div className={styles.toggleContainer} onClick={handleToggle}>
          <h1>UPI</h1>
          <img src={ContentVisible ? minusIcon : plusIcon} className={styles.toggleIcon} id="toggleIcon" onClick={handleToggle} />
        </div>
      </div>

      {ContentVisible && (
        <>
          <div className={styles.container}>
            <div className={styles.contentPayment}>
              <div className={styles.box}>
                <img src={googlePlay} alt="" />
              </div>
             <span>Google Pay</span>
            </div>
            <img src={paymentMethod === "googlePay" ? select : selectCheckbox} onClick={() => setPaymentMethod("googlePay")} />
          </div>

          <div className={styles.container}>
            <div className={styles.contentPayment}>
              <div className={styles.box}>
                <img src={phone} alt="" />
              </div>
              <span>Phone Pe</span>
            </div>
            <img src={paymentMethod === "phonePe" ? select : selectCheckbox} onClick={() => setPaymentMethod("phonePe")}  />
          </div>

          <div className={styles.container}>
            <div className={styles.contentPayment}>
              <div className={styles.box}>
                <img src={pay} alt="" />
              </div>
              <span>Paytm</span>
            </div>
            <img src={paymentMethod === "paytm" ? select : selectCheckbox} onClick={() => setPaymentMethod("paytm")}  />
          </div>
        </>
      )}

      <div className={styles.center}>
        <div className={styles.contentUPI}>
          <svg xmlns="http://www.w3.org/2000/svg" width="328" height="142" viewBox="0 0 328 142" fill="none">
            <path
              d="M0.5 16C0.5 12.2146 0.501062 9.4259 0.788435 7.28845C1.07387 5.16538 1.63351 3.75989 2.6967 2.6967C3.75989 1.63351 5.16538 1.07387 7.28845 0.788435C9.4259 0.501062 12.2146 0.5 16 0.5H312C315.785 0.5 318.574 0.501062 320.712 0.788435C322.835 1.07387 324.24 1.63351 325.303 2.6967C326.366 3.75989 326.926 5.16538 327.212 7.28845C327.499 9.4259 327.5 12.2146 327.5 16V126C327.5 129.785 327.499 132.574 327.212 134.712C326.926 136.835 326.366 138.24 325.303 139.303C324.24 140.366 322.835 140.926 320.712 141.212C318.574 141.499 315.785 141.5 312 141.5H16C12.2146 141.5 9.4259 141.499 7.28845 141.212C5.16538 140.926 3.75989 140.366 2.6967 139.303C1.63351 138.24 1.07387 136.835 0.788435 134.712C0.501062 132.574 0.5 129.785 0.5 126V16Z"
              fill="white"
              stroke="#F1F1F1"
            />
          </svg>
          <EnterUpi />
        </div>
      </div>
    </>
  );
};
