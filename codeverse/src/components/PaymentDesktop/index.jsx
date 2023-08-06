import styles from "./styles.module.scss";
import select from "../../assets/imgs/selecionado.png";
import selectCheckbox from "../../assets/imgs/select.png";
import upi from "../../assets/imgs/UPI-Logo.png";

export const PaymentDesktop = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.payment}>
        <div className={styles.box}>
          <div className={styles.content}>
            <img src={select} alt="" />
          </div>
          <div className={styles.center}>
            <img src={upi} alt="" />
          </div>
            <h1>UPI</h1>
        </div>
      </div>
      <div className={styles.payment}>
        <div className={styles.box}>
          <div className={styles.content}>
            <img src={select} alt="" />
          </div>
          <div className={styles.center}>
            <img src={upi} alt="" />
          </div>
            <h1>UPI</h1>
        </div>
      </div>
      <div className={styles.payment}>
        <div className={styles.box}>
          <div className={styles.content}>
            <img src={select} alt="" />
          </div>
          <div className={styles.center}>
            <img src={upi} alt="" />
          </div>
            <h1>UPI</h1>
        </div>
      </div>
      <div className={styles.payment}>
        <div className={styles.box}>
          <div className={styles.content}>
            <img src={select} alt="" />
          </div>
          <div className={styles.center}>
            <img src={upi} alt="" />
          </div>
            <h1>UPI</h1>
        </div>
      </div>
    </div>
    </>
  );
};
