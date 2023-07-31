import styles from "./styles.module.scss";
import ProductsCarousel from "../ProductsCarousel";
import ArrowSvg from "../ArrowSvg";

import SearchIcon from "../../assets/imgs/search_desktop.svg";

import { useNavigate } from "react-router-dom";

const Search = ({ active }) => {
  const navigate = useNavigate();

  const handleBackPage = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className={styles.topBar}>
        <button className={styles.btn} onClick={handleBackPage}>
          <ArrowSvg color="var(--Dark)" direction="left" />
        </button>
        <div>
          <input type="search" name="" id="" />
          <button>
            <img src={SearchIcon} alt="" />
          </button>
        </div>
      </div>
      <div className={styles.carousel}>
        <ProductsCarousel
          title="New Arrivals"
          showViewAll={true}
          keyToFilter="releaseDate"
          expectedOutcome="2023-06"
        />
      </div>
    </div>
  );
};

export default Search;
