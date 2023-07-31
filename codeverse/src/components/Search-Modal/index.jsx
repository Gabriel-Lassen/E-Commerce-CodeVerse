import styles from "./styles.module.scss";
import ProductsCarousel from "../ProductsCarousel";
import ArrowSvg from "../ArrowSvg";

import SearchIcon from "../../assets/imgs/search_desktop.svg";

const Search = ({ active }) => {
  const close = () => {
    active(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <button className={styles.btn} onClick={close}>
          <ArrowSvg color="var(--Dark)" direction="left" />
        </button>
        <div>
          <input type="search" placeholder="Search" id="" />
          <button>
            <img src={SearchIcon} alt="" />
          </button>
        </div>
      </div>

      <ul>
       
      </ul>

      <div className={styles.carousel}>
        <ProductsCarousel
          title="New Arrivals"
          keyToFilter="releaseDate"
          expectedOutcome="2023-06"
        />
      </div>
    </div>
  );
};

export default Search;
