import styles from './styles.module.scss';
import makeupMobile from '../../assets/imgs/makeup-mobile.png';
import skincareMobile from '../../assets/imgs/skincare-mobile.png';
import facepacksMobile from '../../assets/imgs/facepacks-mobile.png';
import makeupDesktop from '../../assets/imgs/makeup-desktop.png';
import skincareDesktop from '../../assets/imgs/skincare-desktop.png';
import facepacksDesktop from '../../assets/imgs/facepacks-desktop.png';
import { useEffect, useState } from 'react';


const MakeupSkincare = () => {
    const [screenWidth, setScreenWidth] = useState();

    const handleResize = () => {
        const newScreenWidht = window.innerWidth;
        setScreenWidth(newScreenWidht);
    };
    
    useEffect(() => {
        handleResize(); 
        window.addEventListener("resize", handleResize); 
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

  return (
    <div className={styles.wrapper}>
        <h2>Makeup & Skincare</h2>
        <div className={styles.bigBanner}>
            <img src={screenWidth > 375 ? makeupDesktop : makeupMobile} alt="" />
        </div>
        <div className={styles.smallBanners}>
            <img src={screenWidth > 375 ? skincareDesktop : skincareMobile} alt="" />
            <img src={screenWidth > 375 ? facepacksDesktop : facepacksMobile} alt="" />
        </div>
    </div>
  )
}

export default MakeupSkincare