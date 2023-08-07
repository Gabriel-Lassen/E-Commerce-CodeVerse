import styles from "./styles.module.scss";
import select from "../../assets/imgs/selecionado.png";
import selectCheckbox from "../../assets/imgs/select.png";
import upi from "../../assets/imgs/UPI-Logo.png";
import credit from "../../assets/imgs/credit.png";
import apple from "../../assets/imgs/Apple.png";
import amazon from "../../assets/imgs/amazon.png";
import google from "../../assets/imgs/googledesktop.png";
import { useState } from "react";
import EnterUpi from "../EnterUpi";
import pay from '../../assets/imgs/Pay.png'
import phonePe from '../../assets/imgs/PhonePeDesk.png'
import debit from '../../assets/imgs/credit.jpg'
import amazonImg from '../../assets/imgs/amazon.jpg'

export const PaymentDesktop = () => {
  const [optionSelected, setOptionSelected] = useState("");
  const [payment, setPayment] = useState("");

  return (
    <>
      <div className={styles.container}>

        <div className={styles.payment}>
          <div className={styles.box} onClick={() => setOptionSelected(optionSelected === "UPI" ? "" : "UPI")} style={optionSelected === "UPI" ? { backgroundColor: "rgba(var(--primary-tint, 99, 149, 153), 0.08)" } : {}} >
            <div className={styles.content}>
              <img src={optionSelected === "UPI" ? select : selectCheckbox} alt="" />
            </div>
            <div className={styles.center}>
              <img src={upi} alt="" />
            </div>
            <h1 className={styles.upi}>UPI</h1>
          </div>
        </div>

        <div className={styles.payment}>
          <div className={styles.box} onClick={() => setOptionSelected(optionSelected === "Card" ? "" : "Card")} style={optionSelected === "Card" ? { backgroundColor: "rgba(var(--primary-tint, 99, 149, 153), 0.08)" } : {} }>
            <div className={styles.content}>
              <img src={optionSelected === "Card" ? select : selectCheckbox} alt="" />
            </div>
            <div className={styles.center}>
              <img src={credit} alt="" />
            </div>
            <h1 className={styles.credit}>Credit/Debit Card</h1>
          </div>
        </div>
        
        <div className={styles.payment}>
          <div className={styles.box} onClick={() => setOptionSelected(optionSelected === "Apple" ? "" : "Apple")} style={optionSelected === "Apple" ? { backgroundColor:"rgba(var(--primary-tint, 99, 149, 153), 0.08)" } : {}}>
            <div className={styles.content}>
              <img src={optionSelected === "Apple" ? select : selectCheckbox} alt="" />
            </div>
            <div className={styles.center}>
              <img src={apple} alt="" />
            </div>
            <h1 className={styles.apple}>Apple Pay</h1>
          </div>
        </div>

        <div className={styles.payment}>
          <div className={styles.box} onClick={() => setOptionSelected(optionSelected === "Amazon" ? "" : "Amazon")} style={optionSelected === "Amazon" ? { backgroundColor: "rgba(var(--primary-tint, 99, 149, 153), 0.08)" } : {}}>
            <div className={styles.content}>
              <img src={optionSelected === "Amazon" ? select : selectCheckbox} alt="" />
            </div>
            <div className={styles.center}>
              <img src={amazon} alt="" />
            </div>
            <h1 className={styles.amazon}>Amazon Pay</h1>
          </div>
        </div>
      </div>

      <div className={styles.contentPay} style={optionSelected === '' ? {border: 'none'} : {}}>

        {optionSelected === "UPI" && (
        <>
          <div className={styles.method} style={payment === "Google Pay" ? { backgroundColor: "rgba(var(--primary-tint, 99, 149, 153), 0.08)" } : {} }>
            <div>
              <div className={styles.nameMethod} onClick={() => setPayment(payment === "Google Pay" ? "" : "Google Pay")}>
                <div className={styles.imgBox}>
                  <img src={google} alt="" />
                </div>
                <span>Google Pay</span>
              </div>
              {payment == "Google Pay" &&
                <EnterUpi />
              }
            </div>
            <img src={payment === "Google Pay" ? select : selectCheckbox} alt="" onClick={() => setPayment(payment === "Google Pay" ? "" : "Google Pay")}/>
          </div>

          <div className={styles.method} style={payment === "Phone Pe" ? { backgroundColor: "rgba(var(--primary-tint, 99, 149, 153), 0.08)" } : {} }>
            <div>
              <div className={styles.nameMethod} onClick={() => setPayment(payment === "Phone Pe" ? "" : "Phone Pe")}>
                <div className={styles.imgBox}>
                  <img src={phonePe} alt="" />
                </div>
                <span>Phone Pe</span>
              </div>
              {payment == "Phone Pe" &&
                <EnterUpi />
              }
            </div>
            <img src={payment === "Phone Pe" ? select : selectCheckbox} alt="" onClick={() => setPayment(payment === "Phone Pe" ? "" : "Phone Pe")}/>
          </div>

          <div className={styles.method} style={payment === "Paytm" ? { backgroundColor: "rgba(var(--primary-tint, 99, 149, 153), 0.08)" } : {} }>
            <div>
              <div className={styles.nameMethod} onClick={() => setPayment(payment === "Paytm" ? "" : "Paytm")}>
                <div className={styles.imgBox}>
                  <img src={pay} alt="" />
                </div>
                <span>Paytm</span>
              </div>
              {payment == "Paytm" &&
                <EnterUpi />
              }
            </div>
            <img src={payment === "Paytm" ? select : selectCheckbox} alt="" onClick={() => setPayment(payment === "Paytm" ? "" : "Paytm")}/>
          </div>
        </>
        )}

        {optionSelected === "Card" &&
        <>
          <div className={styles.method} style={payment === "Credit" ? { backgroundColor: "rgba(var(--primary-tint, 99, 149, 153), 0.08)" } : {} }>
            <div>
              <div className={styles.nameMethod} onClick={() => setPayment(payment === "Credit" ? "" : "Credit")}>
                <div className={styles.imgBox}>
                  <img className={styles.debitCard} src={debit} alt="" />
                </div>
                <span>Credit Card</span>
              </div>
              {payment == "Credit" &&
                <EnterUpi />
              }
            </div>
            <img src={payment === "Credit" ? select : selectCheckbox} alt="" onClick={() => setPayment(payment === "Credit" ? "" : "Credit")}/>
          </div>

          <div className={styles.method} style={payment === "Debit" ? { backgroundColor: "rgba(var(--primary-tint, 99, 149, 153), 0.08)" } : {} }>
            <div>
              <div className={styles.nameMethod} onClick={() => setPayment(payment === "Debit" ? "" : "Debit")}>
                <div className={styles.imgBox}>
                  <img className={styles.debitCard} src={debit} alt="" />
                </div>
                <span>Debit Card</span>
              </div>
              {payment == "Debit" &&
                <EnterUpi />
              }
            </div>
            <img src={payment === "Debit" ? select : selectCheckbox} alt="" onClick={() => setPayment(payment === "Debit" ? "" : "Debit")}/>
          </div>
        </>
        }
        {optionSelected === 'Apple' && 
           <div className={styles.method} style={payment === "Apple" ? { backgroundColor: "rgba(var(--primary-tint, 99, 149, 153), 0.08)" } : {} }>
           <div>
             <div className={styles.nameMethod} onClick={() => setPayment(payment === "Apple" ? "" : "Apple")}>
               <div className={styles.imgBox}>
                 <img src={google} alt="" />
               </div>
               <span>Apple Pay</span>
             </div>
             {payment == "Apple" &&
               <EnterUpi />
             }
           </div>
           <img src={payment === "Apple" ? select : selectCheckbox} alt="" onClick={() => setPayment(payment === "Apple" ? "" : "Apple")}/>
         </div>
        }
        {optionSelected === 'Amazon' && 
         <div className={styles.method} style={payment === "Amazon" ? { backgroundColor: "rgba(var(--primary-tint, 99, 149, 153), 0.08)" } : {} }>
         <div>
           <div className={styles.nameMethod} onClick={() => setPayment(payment === "Amazon" ? "" : "Amazon")}>
             <div className={styles.imgBox}>
               <img src={amazonImg} alt="" />
             </div>
             <span>Amazon Pay</span>
           </div>
           {payment == "Amazon" &&
             <EnterUpi />
           }
         </div>
         <img src={payment === "Amazon" ? select : selectCheckbox} alt="" onClick={() => setPayment(payment === "Amazon" ? "" : "Amazon")}/>
       </div>
        }
      </div>
    </>
  );
};
