import styles from "./styles.module.scss";
import handbags from "../../assets/imgs/Top-handbags.png";
import jewellery from "../../assets/imgs/Top-jewellery.png";
import skincare from "../../assets/imgs/Top-skincare.png";
import watch from "../../assets/imgs/Top-watch.png";
import eyewear from "../../assets/imgs/Top-eyewear.png";
import { Link } from "react-router-dom";

const TopCategories = () => {
  return (
    <div className={styles.TopCategories}>
      <h2>Top Categories</h2>
      <div className={styles.TopCategories__itens}>
        <Link to='/categories/skincare'>
          <div>
            <img src={skincare} alt="" />
            <p>Skincare</p>
          </div>
        </Link>
        <Link to='/categories/jewellery'>
          <div>
            <img src={jewellery} alt="" />
            <p>Jewellery</p>
          </div>
        </Link>
        <Link to='/categories/handbags'>
          <div>
            <img src={handbags} alt="" />
            <p>Handbags</p>
          </div>
        </Link>
        <Link to='/categories/watches'>
          <div>
            <img src={watch} alt="" />
            <p>Watches</p>
          </div>
        </Link>
        <Link to='/categories/eyewear'>
          <div>
            <img src={eyewear} alt="" />
            <p>Eyewear</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopCategories;
