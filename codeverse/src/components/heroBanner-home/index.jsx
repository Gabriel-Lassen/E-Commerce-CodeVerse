import styles from "./styles.module.scss";
import arrow from "../../assetes/imgs/icon-arrow.svg";
import Banner1 from "../../assetes/imgs/heroBannerHomeMob.png";
import Banner2 from "../../assetes/imgs/heroBannerHomeMob2.png";

const HeroBannerHome = () => {
  return (
    <div className={styles.HeroBannerHomeContainer}>
      <div className={styles.HeroBannerHomeMob}>
        <img src={Banner1} alt="" />
      </div>
      <div className={styles.HeroBannerHomeWeb}>
        <button className={styles.descriptionBtn}>
          <img src={arrow} alt="" />
          see more
        </button>
      </div>
      <div className={styles.HeroBannerHomeMob2}>
        <img src={Banner2} alt="" />
      </div>
    </div>
  );
};

export default HeroBannerHome;
