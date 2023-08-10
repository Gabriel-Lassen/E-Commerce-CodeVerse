import styles from "./styles.module.scss";
import ProductsCarousel from "../ProductsCarousel";
import ArrowSvg from "../ArrowSvg";
import NotFound from "../NotFound-Search";

import closeIcon from "../../assets/imgs/menu-icon-cross-small.svg";
import arrow from "../../assets/imgs/menu-icon-auto-fill.svg";
import SearchIcon from "../../assets/imgs/search_desktop.svg";

import { useState, useContext } from "react";
import { ProductsContext } from "../../contexts/products";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth";

// eslint-disable-next-line react/prop-types
const Search = ({ active }) => {
  const [search, setSearch] = useState("");
  const { listProducts, listBrands } = useContext(ProductsContext);
  const { handleSearch, searchHistory } = useContext(AuthContext);
  const [notFound, setNotFound] = useState(false);
  const filteredSearch = search.length > 0 ? handleFilter(search) : null;

  const navigate = useNavigate();

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

  function capitalize(string) {
    const words = string.split(" ");

    const capitalizedWords = words.map((word) => {
      if (word === "") {
        return word;
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    });
    return capitalizedWords.join(" ");
  }

  function handleClick(e) {
    if (
      filteredSearch &&
      (filteredSearch.products.length > 0 || filteredSearch.brands.length > 0)
    ) {
      handleSearch(e);
    } else {
      setNotFound(true);
      setSearch("");
    }
  }

  const pressEnter = (e) => {
    if (e.key === "Enter") {
      handleClick(e.target.value);
      redirectForSearch(e.target.value);
    }
  };

  const redirectForSearch = (e) => {
    const product = listProducts.find((p) => p.name === e);
    const brand = listBrands.find((b) => b === e);

    if (product) {
      navigate(`/products/${product.id}`);
    } else if (brand) {
      navigate(`/categories/`);
    }
  };

  return (
    <div className={styles.container}>
      {notFound && <NotFound active={setNotFound} />}
      <header className={styles.topBar}>
        <button className={styles.btn} onClick={close}>
          <ArrowSvg color="var(--Dark)" direction="left" />
        </button>
        <div>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(capitalize(e.target.value))}
            onKeyDown={pressEnter}
          />
          <div className={styles.optionsContainer}>
            {filteredSearch?.products &&
              filteredSearch?.products.map((product) => (
                <div
                  onClick={() => handleClick(product.name)}
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
                  onClick={() => handleClick(brand)}
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
          <button onClick={() => handleClick(search)}>
            <img src={SearchIcon} />
          </button>
        </div>
      </header>

      <div className={styles.recentSearchs}>
        <h2>Recent Searchs</h2>
        <ul>
          {searchHistory && searchHistory.length > 0 ? (
            searchHistory.map((search, index) => (
              <li key={index}>{search.search}</li>
            ))
          ) : (
            <li>No recent searches found.</li>
          )}
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
