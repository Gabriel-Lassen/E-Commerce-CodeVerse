import React, { useState } from "react";
import styles from "./styles.module.scss";
import Logo from '../../assets/imgs/logo.svg';
import Add from "../../assets/imgs/add-to-homescreen.svg";
import Notification from "../../assets/imgs/notification.svg";
import Search from "../../assets/imgs/search.svg";
import Menu from "../../assets/imgs/menu.svg";
import { Link } from 'react-router-dom';
import SearchDk from "../../assets/imgs/search_desktop.svg";
import Fav from "../../assets/imgs/fav.svg";
import Profile from "../../assets/imgs/profile.svg";
import Bag from "../../assets/imgs/bag.svg";
import Drawer from "../drawer";

const Header = () => {
  const [drawer, setDrawer] = useState(false);

  const showDrawer = () => setDrawer(!drawer)

  return (
    <header className={styles.header}>
      <div className={styles.header_left_container}>
        <div className={styles.header_left_mob}>
          <img src={Menu} alt="menu_header" onClick={showDrawer}/>
          <h1>Home</h1>
          {drawer && <Drawer active={setDrawer} />}
        </div>
        <div className={styles.header_left_desktop}>
        <Link to="/">
            <img src={Logo} alt="Cora'l" />
        </Link>
          <nav>
            <ul>
              <li> <a href=""></a> Handbags</li>
              <li> <a href=""></a> Watches</li>
              <li> <a href=""></a> Skincare</li>
              <li> <a href=""></a> Jewellery</li>
              <li> <a href=""></a> Apparels</li>
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
          <img src={Fav} alt="Ícone de Favoritos" />
          <img src={Profile} alt="Ícone de Perfil" />
          <img src={Bag} alt="Ícone de Bolsa" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
