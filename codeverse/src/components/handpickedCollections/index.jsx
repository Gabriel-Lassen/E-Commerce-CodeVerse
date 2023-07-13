import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
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
          <Link to="/">
            <img src={imag2} alt="" />
          </Link>
          <Link to="/">
            <img src={imag1} alt="" />
          </Link>
        </div>
        <div className={styles.column}>
          <Link to="/">
            <img src={imag4} alt="" />
          </Link>
          <Link to="/">
            <img src={imag3} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Handpicked;
