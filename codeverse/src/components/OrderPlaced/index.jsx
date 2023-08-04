import styles from "./styles.module.scss";
import BtnBackForPage from "../BtnBackForPage";
import ArrowSvg from "../../assets/imgs/close.svg";
import orderPlaced from '../../assets/imgs/orderPlaced.png'
export const OrderPlaced = () => {
  return (
    <div className={styles.container}>
      <BtnBackForPage
        svg={<img src={ArrowSvg} alt="Arrow" style={{ color: "var(--Primary)" }} />}
        text="My Bag"
      />
      <div className={styles.section}>
        <img src={orderPlaced} />
        <h2>Cheerio!!</h2>
        <p>
          The order has been placed. Thanks for shopping with us. You’ll soon
          recieve the tracking details
        </p>
        <button className={styles.button}>View Order</button>
        <button>Continue Shopping</button>
      </div>
    </div>
  );
};
