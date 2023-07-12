import styles from "./styles.module.scss";
import smartphone from "../../assets/imgs/smartphone.png";
import arrow from "../../assets/imgs/icon-arrow.svg";
import { Link } from "react-router-dom";

const ShortCut = () => {
  return (
    <div className={styles.ShortCut}>
      <div className={styles.icon}>
        <img src={smartphone} />
      </div>
      <div>
        <p>Discover your favorite products faster with CORA’L web app.</p>

        <div className={styles.redirect}>
          <h3>Add Shortcut</h3>
          <img src={arrow} />
        </div>
      </div>
    </div>
  );
};

export default ShortCut;
