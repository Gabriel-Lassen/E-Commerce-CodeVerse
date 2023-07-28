
import { Link } from 'react-router-dom'

import Avatar from "../../assets/imgs/avatar.png";

import styles from './styles.module.scss'
import ArrowSvg from '../ArrowSvg';

const Drawer = ({active}) => {

    const closeDrawer = () => {
        active(false)
    }
    
  return (
    <div className={styles.background} onClick={closeDrawer}>
      <nav className={styles.drawer}>

        <Link className={styles.Link} to={'/about'}>
          <div className={styles.boxProfile}>
            <img src={Avatar} alt="avatar" />
            <h2>Hello, User </h2>
            <ArrowSvg color='var(--Dark)'/>
          </div>
        </Link>

      <div className={styles.divider}></div>

        <ul>
          <span>Top Categories</span>

            <Link className={styles.Link} to={'/categories/'}>
            <li>
            Skincare
            <ArrowSvg color='var(--TypeLowEmphasis)' label="Skincare" />
            </li>
            </Link>
            
            <Link className={styles.Link} to={'/categories/'}>
            <li>
            Apparels
            <ArrowSvg color='var(--TypeLowEmphasis)' label="Apparels"/>
            </li>
            </Link>
            
            <Link className={styles.Link} to={'/categories/'}>
            <li>
            Jwellery
            <ArrowSvg color='var(--TypeLowEmphasis)' label="Jwellery"/>
            </li>
            </Link>
            
            <Link className={styles.Link} to={'/categories/'}>
            <li>
            Handbags
            <ArrowSvg color='var(--TypeLowEmphasis)' label="Handbags"/>
            </li>
            </Link>
           
            <Link className={styles.Link} to={'/categories/'}>
            <li>
            Eyeware
            <ArrowSvg color="var(--TypeLowEmphasis)" label="Eyeware"/> 
            </li>
            </Link>
            
            <Link className={styles.Link} to={'/categories/'}>
            <li>
            Fragrance
            <ArrowSvg color='var(--TypeLowEmphasis)' label="Fragrance"/> 
            </li>
            </Link>
           
            <Link className={styles.Link} to={'/categories/'}>
            <li>
            Watches
            <ArrowSvg color='var(--TypeLowEmphasis)' label="Watches"/>    
            </li>
            </Link>

            <Link className={styles.Link} to={'/about'}>
            <li>
            About
            <ArrowSvg color='var(--TypeLowEmphasis)' label="About"/>   
            </li>
            </Link>

            
        </ul>

        <div className={styles.divider}></div>

        <ul>
          <span>Contact Us</span>

           <Link className={styles.Link} to={'/'}>
            <li className={styles.contactText}>
            Help & Support
            <ArrowSvg color='var(--Dark)'  label="Help & Support"/>   
            </li>
            </Link>

            <Link className={styles.Link} to={'/'}>
            <li className={styles.contactText}>
            Feedback & Suggestions
            <ArrowSvg color='var(--Dark)'  label="Feedback & Suggestions"/>   
            </li>
            </Link>

            <Link className={styles.Link} to={'/'}>
            <li className={styles.contactText}>
            Visit Websites
            <ArrowSvg color='var(--Dark)' label="Visit Websites"/>   
            </li>
            </Link>
        </ul>
    </nav>
    </div>
  )
}

export default Drawer;