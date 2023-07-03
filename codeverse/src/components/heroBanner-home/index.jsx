import React from "react";
import styles from "./styles.module.scss";
import banner1 from "../../assetes/imgs/heroBannerHome.png";
import banner2 from "../../assetes/imgs/heroBannerHome2.png";

const HeroBannerHome = () => {
  return (
    <div className={styles.HeroBannerHomeContainer}>
      <div className={styles.banner1}>
        <img src={banner1} alt="" />
        <div className={styles.description}>
          <h2>
            Carry your <br /> Funk
          </h2>
          <p>Trendy handbags collection for your party animal</p>
        </div>
      </div>
      <div className={styles.banner2}>
        <img src={banner2} alt="" />
      </div>
    </div>
  );
};

export default HeroBannerHome;
