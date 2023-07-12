import styles from "./styles.module.scss";
import arrow from "../../assets/imgs/icon-arrow.svg";
import Banner1 from "../../assets/imgs/heroBannerHomeMob.png";
import Banner2 from "../../assets/imgs/heroBannerHomeMob2.png";

const HeroBannerHome = (direction) => {
  const { order } = direction;

  return (
    <div
      className={styles.HeroBannerHomeContainer}
      style={{ flexDirection: order }}
    >
      <div className={styles.HeroBannerHomeMob}>
        <img src={Banner1} alt="" />
      </div>
      <div className={styles.HeroBannerHomeWeb}>
        <button className={styles.descriptionBtn}>
          <img src={arrow} alt="" />
          <p>see more</p>
        </button>
      </div>

      <div className={styles.HeroBannerHomeMob2}>
        <img src={Banner2} alt="" />
      </div>
    </div>
  );
};

export default HeroBannerHome;
