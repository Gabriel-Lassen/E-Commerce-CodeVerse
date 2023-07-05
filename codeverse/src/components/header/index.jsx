import React from "react";
import styles from "./styles.module.scss";
import Add from "../../assetes/imgs/add-to-homescreen.svg";
import Notification from "../../assetes/imgs/notification.svg";
import Search from "../../assetes/imgs/search.svg";
import Menu from "../../assetes/imgs/menu.svg";

import SearchDk from "../../assetes/imgs/search_desktop.svg";
import Fav from "../../assetes/imgs/fav.svg";
import Profile from "../../assetes/imgs/profile.svg";
import Bag from "../../assetes/imgs/bag.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_left_container}>
        <div className={styles.header_left_mob}>
          <img src={Menu} alt="menu_header" />
          <h1>Home</h1>
        </div>
        <div className={styles.header_left_desktop}>
            <h1>CORA'L</h1>
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
          <img src={Fav} />
          <img src={Profile} />
          <img src={Bag} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
