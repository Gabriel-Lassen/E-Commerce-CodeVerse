import React from 'react'
import styles from './style.module.scss'

const HeroBannerAbout = () => {
  return (
    <div className={styles.image}>
        <div className={styles.mask}>
            <div className={styles.content}>
              <h1 className={styles.title}>ABOUT</h1>
              <span className={styles.text}>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. </span>
            </div>
        </div>
    </div>
  )
}

export default HeroBannerAbout