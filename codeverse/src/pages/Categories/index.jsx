import React from "react";
import styles from "../Categories/styles.module.scss";
import { Link } from "react-router-dom";
import skincare from "../../assets/imgs/category-skincare.png";
import fragrance from "../../assets/imgs/category-fragrance.png";
import handbags from "../../assets/imgs/category-handbags.png";
import eyewear from "../../assets/imgs/category-eyewear.png";
import apparels from "../../assets/imgs/category-apparels.png";

const Categories = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Categories</h1>
      </div>
      <div className={styles.categorys}>
        <Link to="/">
          <img src={skincare} alt="" />
        </Link>
        <Link to="/">
          <img src={fragrance} alt="" />
        </Link>
        <Link to="/">
          <img src={handbags} alt="" />
        </Link>
        <Link to="/">
          <img src={eyewear} alt="" />
        </Link>
        <Link to="/">
          <img src={apparels} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Categories;
