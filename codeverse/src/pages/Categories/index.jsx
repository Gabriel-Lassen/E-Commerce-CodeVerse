import styles from "../Categories/styles.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import skincare from "../../assets/imgs/category-skincare.png";
import fragrance from "../../assets/imgs/category-fragrance.png";
import handbags from "../../assets/imgs/category-handbags.png";
import eyewear from "../../assets/imgs/category-eyewear.png";
import apparels from "../../assets/imgs/category-apparels.png";
import Navbar from "../../components/Navbar";

const Categories = () => {
  const navigate = useNavigate();
  const handleResize = () => {
    const windowWidth = window.innerWidth;

    const breakpointWidth = 769;

    if (windowWidth >= breakpointWidth) {
      navigate("/");
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Categories</h1>
      </div>
      <div className={styles.categorys}>
        <Link to="/categories/skincare">
          <img src={skincare} alt="" />
        </Link>
        <Link to="/categories/fragrance">
          <img src={fragrance} alt="" />
        </Link>
        <Link to="/categories/handbags">
          <img src={handbags} alt="" />
        </Link>
        <Link to="/categories/eyewear">
          <img src={eyewear} alt="" />
        </Link>
        <Link to="/categories/apparels">
          <img src={apparels} alt="" />
        </Link>
      </div>
      <Navbar />
    </div>
  );
};

export default Categories;
