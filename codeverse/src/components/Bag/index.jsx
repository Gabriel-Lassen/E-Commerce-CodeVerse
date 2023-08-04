import styles from "./styles.module.scss";
import background from "../../assets/imgs/frame-6.png";
import teste from "../../assets/imgs/bag-white.svg";
const Bag = () => {
  return (
    <div className={styles.container}>
      <section className={styles.products}>
        <div className={styles.cards}>
          <img src={teste} alt="" />

          <div className={styles.prodDesc}>
            <span>Coach</span>
            <span>Leather Coach Bag</span>
            <span>qty</span>
          </div>
        </div>
      </section>
      <img src={background} alt="" className={styles.bg} />
    </div>
  );
};

export default Bag;
