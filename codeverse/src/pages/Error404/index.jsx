import styles from "./styles.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth";
import { ProductsContext } from "../../contexts/products";
import { useState, useContext } from "react";
import SearchDk from "../../assets/imgs/search_desktop.svg";

const Error404 = () => {
    const [search, setSearch] = useState("");
    const { listProducts, listBrands } = useContext(ProductsContext);
    const { handleSearch } = useContext(AuthContext);


    const navigate = useNavigate();

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
        <div className={styles.errorModal}>
            <h1>404</h1>
            <span>OOPS! PAGE NOT FOUND</span>
            <div>
          <input
            type="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(capitalize(e.target.value))}
            onKeyDown={pressEnter}
            list="ProductsAndBrands"
          />
          <button onClick={() => handleClick(search)}><p>Search</p></button>
          <datalist id="ProductsAndBrands">
            {filteredSearch?.products &&
              filteredSearch?.products.map((product, idx) => (
                <option value={product.name} key={idx} />
              ))}
            {filteredSearch?.brands &&
              filteredSearch?.brands.map((brand) => (
                <option value={brand.name} key={brand} />
              ))}
          </datalist>
          <img className={styles.searchDk} src={SearchDk} />
        </div>
            <Link to="/">BACK TO HOME</Link>
        </div>
    </div>
  )
}

export default Error404
