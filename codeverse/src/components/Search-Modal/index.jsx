import styles from "./styles.module.scss";
import ProductsCarousel from "../ProductsCarousel";
import ArrowSvg from "../ArrowSvg";

import SearchIcon from "../../assets/imgs/search_desktop.svg";

import { useState, useContext } from "react";
import { ProductsContext } from "../../contexts/products";

// eslint-disable-next-line react/prop-types
const Search = ({ active }) => {
  const [search, setSearch] = useState("");
  const { listProducts } = useContext(ProductsContext);

  const filteredSearch =
    search.length > 0
      ? listProducts.filter(
          (product) =>
            product.brand.includes(search) ||
            product.name.includes(search) ||
            product.description.includes(search)
        )
      : [];

  console.log(listProducts);

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
            list="options"
            onChange={(e) => setSearch(e.target.value)}
          />
          <datalist id="options">
            {filteredSearch.map((product) => {
              return (
                <option value={product.name} key={product.id}>
                  {product.name}
                </option>
              );
            })}
          </datalist>
          <button>
            <img src={SearchIcon} alt="" />
          </button>
        </div>
      </header>

      <div className={styles.recentSearchs}>
        <h2>Recent Searchs</h2>
        <ul>
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
        </ul>
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
