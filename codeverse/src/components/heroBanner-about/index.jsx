import React from 'react'
import styles from './style.module.scss'

const HeroBannerAbout = () => {
  return (
    <div className={styles.image}>
        <div className={styles.mask}>
            <div className={styles.content}>
              <h1 className={styles.title}>ABOUT</h1>
              <span className={styles.text}>Unleash the allure of fashion accessories with Cora'l - Your online destination to add charm and style to your look.</span>
            </div>
        </div>
    </div>
  )
}

export default HeroBannerAbout