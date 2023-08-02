import styles from "./styles.module.scss";
import ProductsCarousel from "../ProductsCarousel";
import ArrowSvg from "../ArrowSvg";

import closeIcon from "../../assets/imgs/menu-icon-cross-small.svg";
import arrow from "../../assets/imgs/menu-icon-auto-fill.svg";
import SearchIcon from "../../assets/imgs/search_desktop.svg";

import { useState, useContext, useEffect } from "react";
import { ProductsContext } from "../../contexts/products";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth";

// eslint-disable-next-line react/prop-types
const Search = ({ active }) => {
  const [search, setSearch] = useState("");
  const { listProducts, listBrands } = useContext(ProductsContext);
  const { handleSearch, searchHistory } = useContext(AuthContext);

  const filteredSearch = search.length > 0 ? handleFilter(search) : null;

  function handleFilter(search) {
    const productByName = listProducts.filter((product) =>
      product.name.includes(search)
    );
    const brands = listBrands.filter((brand) => brand.includes(search));

    const filterList = {
      products: productByName,
      brands: brands,
    };

    return filterList;
  }

  const close = () => {
    active(false);
  };

  useEffect(() => {
    console.log(searchHistory);
  }, [searchHistory])

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
            {filteredSearch?.products &&
              filteredSearch?.products.map((product) => (
                <div
                  onClick={() => handleSearch(product.name)}
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
            {filteredSearch?.brands &&
              filteredSearch?.brands.map((brand) => (
                <div
                  onClick={() => handleSearch(brand)}
                  key={brand}
                  className={styles.options}
                >
                  <Link to={`/categories/`}>
                    <div>
                      <img src={closeIcon} />
                      <p>{brand}</p>
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
        <ul>
          
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
