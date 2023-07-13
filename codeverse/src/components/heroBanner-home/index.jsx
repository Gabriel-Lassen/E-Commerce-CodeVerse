import styles from "./styles.module.scss";
import arrow from "../../assets/imgs/icon-arrow.svg";
import Banner1 from "../../assets/imgs/heroBannerHomeMob.png";
import Banner2 from "../../assets/imgs/heroBannerHomeMob2.png";
import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
const HeroBannerHome = ({ order, text }) => {
  const list = useRef(null)

  useEffect(() => {
    if(order == 'row-reverse'){
      list.current.scrollIntoView({inline: "end"});
    }
  }, [])
  return (
    <div>
      {text && (
        <div className={styles.secondBanner}>
          <p>Trending Deals</p>
        </div>
      )}
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

        <div className={styles.HeroBannerHomeMob2} ref={list}>
          <img src={Banner2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroBannerHome;
