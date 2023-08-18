import { Link, useLocation } from 'react-router-dom';
import styles from "./styles.module.scss";

import home from "../../assets/imgs/home-light.svg";
import homeActive from "../../assets/imgs/home.svg";
import categories from "../../assets/imgs/categories-light.svg";
import categoriesActive from "../../assets/imgs/categories.svg";
import profile from "../../assets/imgs/profile-light.svg";
import profileActive from "../../assets/imgs/profile.svg";
import bag from "../../assets/imgs/bag-light.svg";
import bagActive from "../../assets/imgs/bag.svg";

function Navbar() {
    const location = useLocation();

    return (
      <nav className={styles.navbar}>
        <ul>
          <li>
              <Link className={styles.navLink}  to="/">
                <div className={styles.iconContainer}>
                    <img src={location.pathname === '/' ? homeActive : home} alt={home} />
                </div>
                    <span className={location.pathname === '/' ? '' : styles.spanNone}>Home</span>
              </Link>
          </li>
  
  
          <li>
              <Link className={styles.navLink}  to="/categories">
                <div className={styles.iconContainer}>
                    <img src={location.pathname === '/categories' ? categoriesActive : categories} alt={categories} />
                </div>
                    <span className={location.pathname === '/categories' ? '' : styles.spanNone}>Categories</span>
              </Link>
          </li>
  
  
          <li>
              <Link className={styles.navLink} to="/profile">
                <div className={styles.iconContainer}>
                    <img src={location.pathname === '/profile' ? profileActive : profile} alt={profile} />
                </div>
                    <span className={location.pathname === '/profile' ? '' : styles.spanNone}>Profile</span>
              </Link>
          </li>
  
  
          <li>
              <Link className={styles.navLink}  to="/profile/mycart">
                <div className={styles.iconContainer}>
                    <img src={location.pathname === '/profile/mycart' ? bagActive : bag} alt={bag} />
                </div>
                    <span className={location.pathname === '/profile/mycart' ? '' : styles.spanNone}>Bag</span>
              </Link>
          </li>
        </ul>
      </nav>
    );
  }
  

export default Navbar;
