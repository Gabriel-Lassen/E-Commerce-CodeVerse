import { useState, useContext } from "react";
import styles from "./styles.module.scss";
import Logo from "../../assets/imgs/logo.svg";
import Add from "../../assets/imgs/add-to-homescreen.svg";
import Notification from "../../assets/imgs/notification.svg";
import searchMob from "../../assets/imgs/search.svg";
import Menu from "../../assets/imgs/menu.svg";
import { ProductsContext } from "../../contexts/products";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth";
import SearchDk from "../../assets/imgs/search_desktop.svg";
import Fav from "../../assets/imgs/fav.svg";
import Profile from "../../assets/imgs/profile.svg";
import Bag from "../../assets/imgs/bag.svg";
import Drawer from "../Drawer";
import BagModal from "../BagModal";
import Search from "../Search-Modal";
import DarkModeBtn from "../DarkMode";

const Header = () => {
  const [drawer, setDrawer] = useState(false);
  const [bag, setBag] = useState(false);
  const [search, setSearch] = useState("");
  const { listProducts, listBrands } = useContext(ProductsContext);
  const { handleSearch } = useContext(AuthContext);

  const showDrawer = () => setDrawer(!drawer);
  const showSearch = () => setSearch(!search);

  const showBag = () => setBag(!bag);

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
    <header className={styles.header}>
      <div className={styles.header_left_container}>
        <div className={styles.header_left_mob}>
          <img src={Menu} alt="menu_header" onClick={showDrawer} />
          <h1>Home</h1>
          {drawer && <Drawer active={setDrawer} />}
          {search && <Search active={setSearch} />}
        </div>
        <div className={styles.header_left_desktop}>
          <Link to="/">
            <img src={Logo} alt="Cora'l" />
          </Link>
          <nav>
            <ul>
              <li>
                {" "}
                <Link to="/categories/handbags"> Handbags</Link>
              </li>
              <li>
                {" "}
                <Link to="/categories/watches"> Watches</Link>
              </li>
              <li>
                {" "}
                <Link to="/categories/skincare"> Skincare</Link>
              </li>
              <li>
                {" "}
                <Link to="/categories/jewellery"> Jewellery</Link>
              </li>
              <li>
                {" "}
                <Link to="/categories/apparels"> Apparels</Link>
              </li>
              <DarkModeBtn />
            </ul>
          </nav>
        </div>
      </div>

      <div className={styles.header_right_mob}>
        <img src={Add} alt="icon_add-header" />
        <button onClick={showSearch}>
          <img src={searchMob} alt="search_header" />
        </button>
        <img src={Notification} alt="notification_header" />
      </div>

      <div className={styles.header_right_desktop}>
        <div>
          <input
            type="search"
            placeholder="Search for products or brands....."
            value={search}
            onChange={(e) => setSearch(capitalize(e.target.value))}
            onKeyDown={pressEnter}
            list="ProductsAndBrands"
          />
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
        <nav>
          <Link to="/profile/mywishlist">
            <img src={Fav} alt="Ícone de Favoritos" />
          </Link>
          <Link to="/profile">
            <img src={Profile} alt="Ícone de Perfil" />
          </Link>

          <button onClick={showBag}>
            <img src={Bag} alt="Ícone de Bolsa" />
          </button>
        </nav>
      </div>
      {bag && <BagModal active={setBag} />}
    </header>
  );
};

export default Header;
