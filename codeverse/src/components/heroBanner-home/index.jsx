import styles from "./styles.module.scss";
import banner1 from "../../assetes/imgs/heroBannerHome.png";
import banner2 from "../../assetes/imgs/heroBannerHome2.png";
import arrow from "../../assetes/imgs/icon-arrow.svg";

const HeroBannerHome = () => {
  return (
    <div className={styles.HeroBannerHomeContainer}>
      <div className={styles.banner1}>
        <img src={banner1} alt="" />
        <div className={styles.description}>
          <h2>Carry your Funk</h2>
          <p>Trendy handbags collection for your party animal</p>

          <button className={styles.descriptionBtn}>
            <img src={arrow} />
            See more
          </button>
        </div>
      </div>
      <div className={styles.banner2}>
        <img src={banner2} alt="" />
        <div className={styles.description_2}>
          <h2>Spring Summer Collection</h2>
          <div className={styles.promo}>
            <h3>UPTO 20% OFF</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerHome;
