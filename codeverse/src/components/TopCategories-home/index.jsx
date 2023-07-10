import styles from "./styles.module.scss";
import handbags from "../../assets/imgs/Top-handbags.png";
import jewellery from "../../assets/imgs/Top-jewellery.png";
import skincare from "../../assets/imgs/Top-skincare.png";
import watch from "../../assets/imgs/Top-watch.png";
import eyewear from "../../assets/imgs/Top-eyewear.png";

const TopCategories = () => {
  return (
    <div className={styles.TopCategories}>
      <h2>Top Categories</h2>
      <div className={styles.TopCategories__itens}>
        <div>
          <img src={skincare} alt="" />
          <p>Skincare</p>
        </div>
        <div>
          <img src={jewellery} alt="" />
          <p>Jewellery</p>
        </div>
        <div>
          <img src={handbags} alt="" />
          <p>handbags</p>
        </div>
        <div>
          <img src={watch} alt="" />
          <p>Watch</p>
        </div>
        <div>
          <img src={eyewear} alt="" />
          <p>Eyewear</p>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
