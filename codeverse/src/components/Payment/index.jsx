import React, { useState } from "react";
import styles from "./styles.module.scss";
import plusIcon from "../../assets/imgs/small-plus.png";
import minusIcon from "../../assets/imgs/minus-icon.png";
import select from "../../assets/imgs/selecionado.png";
import selectCheckbox from "../../assets/imgs/select.png";
import googlePlay from "../../assets/imgs/googlePlay.png";
import pay from '../../assets/imgs/payTm.png'
import phone from '../../assets/imgs/phonePe.png'

export const Payment = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isDivClicked, setIsDivClicked] = useState(false);
  const [paymentOption, setPaymentOption] = useState("");
  const [ContentVisible, setContentVisible] = useState(false);
  const [divClicked, setDivClicked] = useState(false);
  const [payment, setPayment] = useState("");
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
          <div className={`${styles.option} ${paymentOption === "debit" ? styles.selected : "" }`} onClick={() => setPaymentOption("debit")}>
            <p>Debit Card</p>
            <img src={paymentOption === "debit" ? select : selectCheckbox} />
          </div>

          <div className={`${styles.option} ${paymentOption === "credit" ? styles.selected : "" }`} onClick={() => setPaymentOption("credit")}>
            <p>Credit Card</p>
            <img src={paymentOption === "credit" ? select : selectCheckbox} />
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
            <img src={payment === "googlePay" ? select : selectCheckbox} onClick={() => setPayment("googlePay")} />
          </div>

          <div className={styles.container}>
            <div className={styles.contentPayment}>
              <div className={styles.box}>
                <img src={phone} alt="" />
              </div>
              <span>Phone Pe</span>
            </div>
            <img src={payment === "phonePe" ? select : selectCheckbox} onClick={() => setPayment("phonePe")}  />
          </div>

          <div className={styles.container}>
            <div className={styles.contentPayment}>
              <div className={styles.box}>
                <img src={pay} alt="" />
              </div>
              <span>Paytm</span>
            </div>
            <img src={payment === "paytm" ? select : selectCheckbox} onClick={() => setPayment("paytm")}  />
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
          <div className={styles.inputWrapper}>
            <input type="text" placeholder="Enter your UPI Id" />
            <p>Eg: 1234567890@ybl</p>
            <div className={styles.checkbox} onClick={toggleSVG}>
              {isActivee ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect width="18" height="18" rx="2" fill="#1B4B66" />
                    <path
                      d="M7.33898 14.081C7.15177 14.2682 6.84823 14.2682 6.66102 14.081L2.70549 10.1255C2.31586 9.73586 2.31586 9.10414 2.70549 8.71451C3.09474 8.32526 3.7257 8.32482 4.11549 8.71353L7 11.59L13.88 4.71C14.2717 4.31829 14.9072 4.31941 15.2975 4.71251C15.6859 5.10365 15.6848 5.73524 15.295 6.125L7.33898 14.081Z"
                      fill="white"
                    />
                  </svg>
                </>
              )
              :
              (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="1" y="1" width="16" height="16" rx="1" stroke="#626262" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              )
              }
              <span>Save this for future transactions</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
