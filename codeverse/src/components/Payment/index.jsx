import React, { useState } from "react";
import styles from "./styles.module.scss";
import plusIcon from "../../assets/imgs/small-plus.png";
import minusIcon from "../../assets/imgs/minus-icon.png";
import select from "../../assets/imgs/selecionado.png";
import selectCheckbox from "../../assets/imgs/select.png";
import googlePlay from '../../assets/imgs/googlePlay.png'

export const Payment = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isDivClicked, setIsDivClicked] = useState(false);
  const [paymentOption, setPaymentOption] = useState("");
  const [ContentVisible, setContentVisible] = useState(false);
  const [divClicked, setDivClicked] = useState(false);
  const [payment, setPayment] = useState("");

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

  return (
    <>
      <div
        className={`${styles.payment} ${isDivClicked ? styles.clickedDiv : ""}`}
        onClick={handleDivClick}
        style={{
          background: isDivClicked ? "var(--Grey)" : "none",
        }}
      >
        <div className={styles.toggleContainer} onClick={handleToggleClick}>
          <h1>Debit Card/Credit Card</h1>
          <img
            src={isContentVisible ? minusIcon : plusIcon}
            className={styles.toggleIcon}
            id="toggleIcon"
            onClick={handleToggleClick}
          />
        </div>
      </div>

      {isContentVisible && (
        <div className={styles.optionsContainer}>
          <div
            className={`${styles.option} ${
              paymentOption === "debit" ? styles.selected : ""
            }`}
            onClick={() => setPaymentOption("debit")}
          >
            <p>Debit Card</p>
            <img src={paymentOption === "debit" ? select : selectCheckbox} />
          </div>

          <div
            className={`${styles.option} ${
              paymentOption === "credit" ? styles.selected : ""
            }`}
            onClick={() => setPaymentOption("credit")}
          >
            <p>Credit Card</p>
            <img src={paymentOption === "credit" ? select : selectCheckbox} />
          </div>
        </div>
      )}

      <div
        className={`${styles.payment} ${divClicked ? styles.clickedDiv : ""}`}
        onClick={handleClick}
        style={{
          background: divClicked ? "var(--Grey)" : "none",
        }}
      >
        <div className={styles.toggleContainer} onClick={handleToggle}>
          <h1>UPI</h1>
          <img
            src={ContentVisible ? minusIcon : plusIcon}
            className={styles.toggleIcon}
            id="toggleIcon"
            onClick={handleToggle}
          />
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
            <img src={payment === "debit" ? select : selectCheckbox} />
      </div>


      <div className={styles.container}>
            <div className={styles.contentPayment}>
                <div className={styles.box}>
                    <img src={googlePlay} alt="" />
                </div>
                <span>Google Pay</span>
            </div>
            <img src={payment === "debit" ? select : selectCheckbox} />
      </div>

      <div className={styles.container}>
            <div className={styles.contentPayment}>
                <div className={styles.box}>
                    <img src={googlePlay} alt="" />
                </div>
                <span>Google Pay</span>
            </div>
            <img src={payment === "debit" ? select : selectCheckbox} />
      </div>

      </> 
)}
    </>
  );
};
