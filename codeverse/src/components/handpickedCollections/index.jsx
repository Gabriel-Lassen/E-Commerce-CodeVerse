import styles from "./styles.module.scss";
import img1 from "../../assets/imgs/handbags.png";
import img2 from "../../assets/imgs/personal care.png";
import img3 from "../../assets/imgs/sunglasses.png";
import img4 from "../../assets/imgs/wrist watches.png";

function Handpicked() {
  return (
    <div className={styles.container}>
      <p>Handpicked Collections</p>
      <div className={styles.column}>
        <a href="//www.google.com">
          <img src={img2} alt="" />
        </a>
        <a href="">
          <img src={img1} alt="" />
        </a>
        <div className={styles.column}>
          <a href="">
            <img src={img4} alt="" />
          </a>
          <a href="">
            <img src={img3} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Handpicked;
