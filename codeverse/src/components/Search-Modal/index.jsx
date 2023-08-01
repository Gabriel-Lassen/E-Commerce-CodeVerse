import styles from "./styles.module.scss";
import ProductsCarousel from "../ProductsCarousel";
import ArrowSvg from "../ArrowSvg";

import closeIcon from "../../assets/imgs/menu-icon-cross-small.svg";
import arrow from "../../assets/imgs/menu-icon-auto-fill.svg";
import SearchIcon from "../../assets/imgs/search_desktop.svg";

import { useState, useContext } from "react";
import { ProductsContext } from "../../contexts/products";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth";

// eslint-disable-next-line react/prop-types
const Search = ({ active }) => {
  const [search, setSearch] = useState("");
  const { listProducts } = useContext(ProductsContext);
  const { handleSearch } = useContext(AuthContext);

  const filteredSearch =
    search.length > 0
      ? listProducts.filter(
          (product) =>
            product.name.includes(search) ||
            product.description.includes(search)
        )
      : [];

  const close = () => {
    active(false);
  };

  return (
    <div className={styles.container}>
      <header className={styles.topBar}>
        <button className={styles.btn} onClick={close}>
          <ArrowSvg color="var(--Dark)" direction="left" />
        </button>
        <div>
          <input
            type="search"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className={styles.optionsContainer}>
            {filteredSearch.map((product, brand, index) => (
              <div
                onClick={() => handleSearch(product.name, brand)}
                key={product.id}
                className={styles.options}
              >
                <Link to={`/products/${product.id}`}>
                  <div>
                    <img src={closeIcon} />
                    <p>{product.name}</p>
                  </div>

                  <img src={arrow} />
                </Link>
              </div>
            ))}
          </div>
          <button onClick={() => handleSearch(search)}>
            <img src={SearchIcon} />
          </button>
        </div>
      </header>

      <div className={styles.recentSearchs}>
        <h2>Recent Searchs</h2>
        <ul></ul>
      </div>

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
