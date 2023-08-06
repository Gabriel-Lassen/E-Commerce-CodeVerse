import styles from "./styles.module.scss";
import select from "../../assets/imgs/selecionado.png";
import selectCheckbox from "../../assets/imgs/select.png";
import upi from "../../assets/imgs/UPI-Logo.png";
import { useState } from "react";

export const PaymentDesktop = () => {
  const [optionSelected, setOptionSelected] = useState('');
  return (
    <>
    <div className={styles.container}>
      <div className={styles.payment}>
        <div className={styles.box} onClick={() => setOptionSelected(optionSelected === 'UPI' ? '' : 'UPI')}
          style={optionSelected === "UPI" ?
          {backgroundColor: 'rgba(0, 0, 0, .03)'} : {} }
        >
          <div className={styles.content}>
            <img src={optionSelected === 'UPI' ? select : selectCheckbox} alt="" />
          </div>
          <div className={styles.center}>
            <img src={upi} alt="" />
          </div>
            <h1>UPI</h1>
        </div>
      </div>
      <div className={styles.payment}>
        <div className={styles.box} onClick={() => setOptionSelected(optionSelected === 'Google' ? '' : 'Google')}
          style={optionSelected === "Google" ?
          {backgroundColor: 'rgba(0, 0, 0, .03)'} : {}}>
          <div className={styles.content}>
            <img src={optionSelected === 'Google' ? select : selectCheckbox} alt="" />
          </div>
          <div className={styles.center}>
            <img src={upi} alt="" />
          </div>
            <h1>UPI</h1>
        </div>
      </div>
      <div className={styles.payment}>
        <div className={styles.box} onClick={() => setOptionSelected(optionSelected === 'PAY' ? '' : 'PAY')}
          style={optionSelected === "PAY" ?
          {backgroundColor: 'rgba(0, 0, 0, .03)'} : {}}>
          <div className={styles.content}>
            <img src={optionSelected === 'PAY' ? select : selectCheckbox} alt="" />
          </div>
          <div className={styles.center}>
            <img src={upi} alt="" />
          </div>
            <h1>UPI</h1>
        </div>
      </div>
      <div className={styles.payment}>
        <div className={styles.box} onClick={() => setOptionSelected(optionSelected === 'PIX' ? '' : 'PIX')}
          style={optionSelected === "PIX" ?
          {backgroundColor: 'rgba(0, 0, 0, .03)'} : {}}>
          <div className={styles.content}>
            <img src={optionSelected === 'PIX' ? select : selectCheckbox} alt="" />
          </div>
          <div className={styles.center}>
            <img src={upi} alt="" />
          </div>
            <h1>UPI</h1>
        </div>
      </div>
    </div>

    <div className={styles.contentPay}>
        <div className={styles.active}>

        </div>
    </div>
    </>
    
  );
};
