import styles from "./styles.module.scss";

import location from "../../assets/imgs/location.svg";
import insta from "../../assets/imgs/insta logo.svg";
import twitter from "../../assets/imgs/twitter.svg";
import youtube from "../../assets/imgs/youtube.svg";
import fb from "../../assets/imgs/fb logo.svg";

import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer className={styles.footer} >
      <div className={styles.container}>
        <div className={styles.category}>
          <h4>Shop by Category</h4>
          <ul className={styles.ulCategory}>
            <li>
              <Link to="/categories/skincare">
                <p>Skincare</p>
              </Link>
            </li>
            <li>
              <Link to="categories/personalcare">
                <p>Personal Care</p>
              </Link>
            </li>
            <li>
              <Link to="categories/handbags">
                <p>Handbags</p>
              </Link>
            </li>
            <li>
              <Link to="categories/apparels">
                <p>Apparels</p>
              </Link>
            </li>
            <li>
              <Link to="categories/watches">
                <p>Watches</p>
              </Link>
            </li>
            <li>
              <Link to="categories/eyewear">
                <p>Eye Wear</p>
              </Link>
            </li>
            <li>
              <Link to="categories/jewellery">
                <p>Jewellery</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.policy}>
          <h4>Policy</h4>
          <ul>
            <li>
              <p href="#">
                Return <span className={styles.newWord}>Policy</span>
              </p>
            </li>
            <li>
              <p href="#">Terms of use</p>
            </li>
            <li>
              <p href="#">Sitemap</p>
            </li>
            <li>
              <p href="#">Security</p>
            </li>
            <li>
              <p href="#">Privacy</p>
            </li>
            <li className={styles.lastItem}>
              <p href="#">EPR Compliance</p>
            </li>
          </ul>
        </div>

        <div className={styles.about}>
          <h4>About</h4>
          <ul>
            <li>
              <p href="#">Contact Us</p>
            </li>
            <li>
              <Link to="/about">
                <p>About Us</p>
              </Link>
            </li>
            <li>
              <p href="#">Careers</p>
            </li>
            <li className={styles.lastItem}>
              <p href="#">Press</p>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.container2}>
        <div className={styles.divider}></div>

        <div className={styles.social}>
          <a href="#">
            <img src={fb} alt="Facebook" />
          </a>
          <a href="#">
            <img src={insta} alt="Instagram" />
          </a>
          <a href="#">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="#">
            <img src={youtube} alt="Youtube" />
          </a>
        </div>

        <div className={styles.local}>
          <img src={location} alt="Location" />
          <h4>United States</h4>
        </div>

        <span>© 2021 | Cora Leviene All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
