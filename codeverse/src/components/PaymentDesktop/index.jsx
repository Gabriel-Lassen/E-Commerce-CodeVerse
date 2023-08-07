import styles from "./styles.module.scss";
import select from "../../assets/imgs/selecionado.png";
import selectCheckbox from "../../assets/imgs/select.png";
import upi from "../../assets/imgs/UPI-Logo.png";
import credit from "../../assets/imgs/credit.png";
import apple from "../../assets/imgs/Apple.png";
import amazon from "../../assets/imgs/amazon.png";
import google from "../../assets/imgs/googledesktop.png";
import { useState } from "react";

export const PaymentDesktop = () => {
  const [optionSelected, setOptionSelected] = useState("");
  const [payment, setPayment] = useState("");

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

      <div className={styles.contentPay}>
        {optionSelected === "UPI" && (
          <>
            <div
              className={styles.options}
              onClick={() => setPayment(payment === "Teste" ? "" : "Teste")}
            >
              <div className={styles.leftSide}>
                <div className={styles.ImagemETexto}>
                  <div className={styles.ImagemBOx}>
                    <img src={google} alt="" />
                  </div>
                  <span>Google Pay</span>
                </div>
              </div>
            </div>

            <div
              className={styles.options}
              onClick={() => setPayment(payment === "Teste2" ? "" : "Teste2")}
            >
              <div className={styles.leftSide}>
                {payment === "Teste2" && (
                    <div className={styles.center}>
                      <div className={styles.contentUPI}>
                        <div className={styles.inputWrapper}>
                          <input type="text" placeholder="Enter your UPI Id" />
                          <p>Eg: 1234567890@ybl</p>
                          <div className={styles.checkbox}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <rect
                                width="18"
                                height="18"
                                rx="2"
                                fill="#1B4B66"
                              />
                               <path
                                d="M7.33898 14.081C7.15177 14.2682 6.84823 14.2682 6.66102 14.081L2.70549 10.1255C2.31586 9.73586 2.31586 9.10414 2.70549 8.71451C3.09474 8.32526 3.7257 8.32482 4.11549 8.71353L7 11.59L13.88 4.71C14.2717 4.31829 14.9072 4.31941 15.2975 4.71251C15.6859 5.10365 15.6848 5.73524 15.295 6.125L7.33898 14.081Z"
                                fill="white"
                              /> 
                            </svg>
                            <span>Save this for future transactions</span>
                          </div>
                        </div>
                      </div>
                    </div>
                
                )}
                </div>

              <div className={styles.rightSide}>
                <img src={payment === "Teste2" ? select : selectCheckbox} />
              </div>
            </div>
          </>
        )}

        {optionSelected === "Google" && (
          <div>
            <span>Google</span>
          </div>
        )}
      </div>
    </>
  );
};
