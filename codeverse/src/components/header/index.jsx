import { useState } from "react";
import styles from "./styles.module.scss";
import Logo from "../../assets/imgs/logo.svg";
import Add from "../../assets/imgs/add-to-homescreen.svg";
import Notification from "../../assets/imgs/notification.svg";
import Search from "../../assets/imgs/search.svg";
import Menu from "../../assets/imgs/menu.svg";
import { Link } from "react-router-dom";
import SearchDk from "../../assets/imgs/search_desktop.svg";
import Fav from "../../assets/imgs/fav.svg";
import Profile from "../../assets/imgs/profile.svg";
import Bag from "../../assets/imgs/bag.svg";
import Drawer from "../Drawer";

const Header = () => {
  const [drawer, setDrawer] = useState(false);

  const showDrawer = () => setDrawer(!drawer);

  return (
    <header className={styles.header}>
      <div className={styles.header_left_container}>
        <div className={styles.header_left_mob}>
          <img src={Menu} alt="menu_header" onClick={showDrawer} />
          <h1>Home</h1>
          {drawer && <Drawer active={setDrawer} />}
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
        <img src={Search} alt="search_header" />
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
          <Link to="/wishlist">
            <img src={Fav} alt="Ícone de Favoritos" />
          </Link>
          <Link to="/profile">
            <img src={Profile} alt="Ícone de Perfil" />
          </Link>
          <Link to="/mycart">
            <img src={Bag} alt="Ícone de Bolsa" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
