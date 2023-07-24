import {useState, useEffect} from "react"
import styles from "./styles.module.scss"

import btnDown from "../../assets/imgs/chevron-bottom.svg"
import btnUp from  "../../assets/imgs/chevron-up.svg"

import location from "../../assets/imgs/location.svg"

import insta from "../../assets/imgs/insta logo.svg"
import twitter from "../../assets/imgs/twitter.svg"
import youtube from "../../assets/imgs/youtube.svg"
import fb from "../../assets/imgs/fb logo.svg"

import { Link } from 'react-router-dom'

const Footer = () => {

    const [showFooter, setShowFooter] = useState(false)

    const handleClick = () => {
        setShowFooter(!showFooter);
    };
    const handleResize = () => {
        const windowWidth = window.innerWidth;
        const breakpointWidth = 768;
    
        if (windowWidth <= breakpointWidth) {
          setShowFooter(false);
        } else {
          setShowFooter(true);
        }
      };
    
      useEffect(() => {
        handleResize(); 
    
        window.addEventListener("resize", handleResize); 
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    return(
        <div className={styles.showFooter}>
            <h2>More about CORA’L</h2>
            <button className={styles.showFooterBtn} onClick={handleClick}> 
            <img src={showFooter ? btnUp : btnDown} /></button>
            {showFooter && 
            <footer className={styles.footer}>
            <div className={styles.container}>
            <div className={styles.category}>
                <h4>Shop by Category</h4>
                <ul className={styles.ulCategory}>
                    <li>
                        <Link to='/categories/skincare' >
                            <p>Skincare</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='categories/personalcare'>
                            <p>Personal Care</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='categories/handbags'>
                            <p>Handbags</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='categories/apparels'>
                            <p>Apparels</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='categories/watches'>
                            <p>Watches</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='categories/eyewear'>
                            <p>Eye Wear</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='categories/jewellery'>
                            <p>Jewellery</p>
                        </Link>
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
                        <Link to='/about'>
                            <a>About Us</a>
                        </Link>
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
         }
        </div>
    );
};

export default Footer;