import styles from "./styles.module.scss";
import select from "../../assets/imgs/selecionado.png";
import selectCheckbox from "../../assets/imgs/select.png";
import upi from "../../assets/imgs/UPI-Logo.png";
import credit from "../../assets/imgs/credit.png";
import apple from "../../assets/imgs/Apple.png";
import amazon from "../../assets/imgs/amazon.png";
import { useState } from "react";

export const PaymentDesktop = () => {
  const [optionSelected, setOptionSelected] = useState("");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.payment}>
          <div
            className={styles.box}
            onClick={() =>
              setOptionSelected(optionSelected === "UPI" ? "" : "UPI")
            }
            style={
              optionSelected === "UPI"
                ? { backgroundColor: "rgba(0, 0, 0, .03)" }
                : {}
            }
          >
            <div className={styles.content}>
              <img
                src={optionSelected === "UPI" ? select : selectCheckbox}
                alt=""
              />
            </div>
            <div className={styles.center}>
              <img src={upi} alt="" />
            </div>
            <h1 className={styles.upi}>UPI</h1>
          </div>
        </div>
        <div className={styles.payment}>
          <div
            className={styles.box}
            onClick={() =>
              setOptionSelected(optionSelected === "Google" ? "" : "Google")
            }
            style={
              optionSelected === "Google"
                ? { backgroundColor: "rgba(0, 0, 0, .03)" }
                : {}
            }
          >
            <div className={styles.content}>
              <img
                src={optionSelected === "Google" ? select : selectCheckbox}
                alt=""
              />
            </div>
            <div className={styles.center}>
              <img src={credit} alt="" />
            </div>
            <h1 className={styles.credit}>Credit/Debit Card</h1>
          </div>
        </div>
        <div className={styles.payment}>
          <div
            className={styles.box}
            onClick={() =>
              setOptionSelected(optionSelected === "PAY" ? "" : "PAY")
            }
            style={
              optionSelected === "PAY"
                ? { backgroundColor: "rgba(0, 0, 0, .03)" }
                : {}
            }
          >
            <div className={styles.content}>
              <img
                src={optionSelected === "PAY" ? select : selectCheckbox}
                alt=""
              />
            </div>
            <div className={styles.center}>
              <img src={apple} alt="" />
            </div>
            <h1 className={styles.apple}>Apple Pay</h1>
          </div>
        </div>
        <div className={styles.payment}>
          <div
            className={styles.box}
            onClick={() =>
              setOptionSelected(optionSelected === "PIX" ? "" : "PIX")
            }
            style={
              optionSelected === "PIX"
                ? { backgroundColor: "rgba(0, 0, 0, .03)" }
                : {}
            }
          >
            <div className={styles.content}>
              <img
                src={optionSelected === "PIX" ? select : selectCheckbox}
                alt=""
              />
            </div>
            <div className={styles.center}>
              <img src={amazon} alt="" />
            </div>
            <h1 className={styles.amazon}>Amazon Pay</h1>
          </div>
        </div>
      </div>
    </>
  );
};
