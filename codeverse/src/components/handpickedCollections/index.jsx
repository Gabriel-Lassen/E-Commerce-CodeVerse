import styles from "./styles.module.scss";
import imag1 from "../../assets/imgs/handbags.png";
import imag2 from "../../assets/imgs/personalcare.png";
import imag3 from "../../assets/imgs/sunglasses.png";
import imag4 from "../../assets/imgs/wristwatches.png";

function Handpicked() {
  return (
    <div className={styles.container}>
      <p>Handpicked Collections</p>
      <div className={styles.all}>
        <div className={styles.column}>
          <a href="">
            <img src={imag2} alt="" />
          </a>
          <a href="">
            <img src={imag1} alt="" />
          </a>
        </div>
        <div className={styles.column}>
          <a href="">
            <img src={imag4} alt="" />
          </a>
          <a href="">
            <img src={imag3} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Handpicked;
