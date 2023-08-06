import { useState } from "react";
import styles from "./styles.module.scss";
import Logo from "../../assets/imgs/logo.svg";
import Add from "../../assets/imgs/add-to-homescreen.svg";
import Notification from "../../assets/imgs/notification.svg";
import searchMob from "../../assets/imgs/search.svg";
import Menu from "../../assets/imgs/menu.svg";
import { Link } from "react-router-dom";
import SearchDk from "../../assets/imgs/search_desktop.svg";
import Fav from "../../assets/imgs/fav.svg";
import Profile from "../../assets/imgs/profile.svg";
import Bag from "../../assets/imgs/bag.svg";
import Drawer from "../Drawer";
import BagModal from "../BagModal";
import Search from "../Search-Modal";
const Header = () => {
  const [drawer, setDrawer] = useState(false);

  const [bag, setBag] = useState(false);
  const [search, setSearch] = useState(false);

  const showDrawer = () => setDrawer(!drawer);
  const showSearch = () => setSearch(!search);

  const showBag = () => setBag(!bag);
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
          />
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
