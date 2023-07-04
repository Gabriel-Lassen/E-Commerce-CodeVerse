import React from "react"
import styles from "./styles.module.scss"

import location from "../../assetes/imgs/location.svg"

import insta from "../../assetes/imgs/insta logo.svg"
import twitter from "../../assetes/imgs/twitter.svg"
import youtube from "../../assetes/imgs/youtube.svg"
import fb from "../../assetes/imgs/fb logo.svg"

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
            <div className={styles.category}>
                <h4>Shop by Category</h4>
                <ul className={styles.ulCategory}>
                    <li>
                        <a href="#">Skincare</a>
                    </li>
                    <li>
                        <a href="#">Personal Care</a>
                    </li>
                    <li>
                        <a href="#">Handbags</a>
                    </li>
                    <li>
                        <a href="#">Apparels</a>
                    </li>
                    <li>
                        <a href="#">Watches</a>
                    </li>
                    <li>
                        <a href="#">Eye Wear</a>
                    </li>
                    <li>
                        <a href="#">Jewellery</a>
                    </li>
                </ul>
            </div>

            <div className={styles.policy}>
                <h4>Policy</h4>
                <ul>
                    <li>
                        <a href="#">
                            Return <span className={styles.newWord}>Policy</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">Terms of use</a>
                    </li>
                    <li>
                        <a href="#">Sitemap</a>
                    </li>
                    <li>
                        <a href="#">Security</a>
                    </li>
                    <li>
                        <a href="#">Privacy</a>
                    </li>
                    <li className={styles.lastItem}>
                        <a href="#">EPR Compliance</a>
                    </li>
                </ul>
            </div>

            <div className={styles.about}>
                <h4>About</h4>
                <ul>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Careers</a>
                    </li>
                    <li className={styles.lastItem}>
                        <a href="#">Press</a>
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