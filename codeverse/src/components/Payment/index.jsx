import React, { useState } from "react";
import styles from "./styles.module.scss";
import plusIcon from "../../assets/imgs/small-plus.png";
import minusIcon from "../../assets/imgs/minus-icon.png";
import select from "../../assets/imgs/selecionado.png";
import selectCheckbox from "../../assets/imgs/select.png";

export const Payment = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isDivClicked, setIsDivClicked] = useState(false);
  const [paymentOption, setPaymentOption] = useState("");

  const handleToggleClick = () => {
    setIsContentVisible(!isContentVisible);
  };

  const handleDivClick = (event) => {
    setIsDivClicked(!isDivClicked);
    event.stopPropagation();
  };

  return (
    <div className={`${styles.payment} ${isDivClicked ? styles.clickedDiv : ""}`}
      onClick={handleDivClick}
      style={{
        width: isDivClicked ? "360px" : "auto",
        height: isDivClicked ? "48px" : "auto",
        background: isDivClicked ? "var(--Grey)" : "none",
      }}
    >
      <div className={styles.toggleContainer} onClick={handleToggleClick}>
        <h1>Debit Card/Credit Card</h1>
        <img
          className={styles.toggleIcon}
          id="toggleIcon"
          src={isContentVisible ? minusIcon : plusIcon}
          onClick={handleToggleClick}
        />
      </div>
      {isContentVisible && (
        <div className={styles.content}>
          <h2></h2>
          <div className={styles.optionsContainer}>
          <p>Debit Card</p>
            <div
              className={`${styles.option} ${
                paymentOption === "debit" ? styles.selected : ""
              }`}
              onClick={() => setPaymentOption("debit")} >
              <img src={paymentOption === "debit" ? select : selectCheckbox} />
             
            </div>
            
            <div
              className={`${styles.option} ${
                paymentOption === "credit" ? styles.selected : ""
              }`}
              
              onClick={() => setPaymentOption("credit")}>
                 <p>Credit Card</p>
              <img src={paymentOption === "credit" ? select : selectCheckbox} />
             
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
