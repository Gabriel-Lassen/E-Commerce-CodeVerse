
import { Link } from 'react-router-dom'

import Avatar from "../../assets/imgs/avatar.png";

import styles from './styles.module.scss'

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
            <Icon color='var(--Dark)'/>
          </div>
        </Link>

      <div className={styles.divider}></div>

        <ul>
          <span>Top Categories</span>

            <Link className={styles.Link} to={'/categories/'}>
            <li>
            Skincare
            <Icon color='var(--TypeLowEmphasis)' label="Skincare" />
            </li>
            </Link>
            
            <Link className={styles.Link} to={'/categories/'}>
            <li>
            Apparels
            <Icon color='var(--TypeLowEmphasis)' label="Apparels"/>
            </li>
            </Link>
            
            <Link className={styles.Link} to={'/categories/'}>
            <li>
            Jwellery
            <Icon color='var(--TypeLowEmphasis)' label="Jwellery"/>
            </li>
            </Link>
            
            <Link className={styles.Link} to={'/categories/'}>
            <li>
            Handbags
            <Icon color='var(--TypeLowEmphasis)' label="Handbags"/>
            </li>
            </Link>
           
            <Link className={styles.Link} to={'/categories/'}>
            <li>
            Eyeware
            <Icon color="var(--TypeLowEmphasis)" label="Eyeware"/> 
            </li>
            </Link>
            
            <Link className={styles.Link} to={'/categories/'}>
            <li>
            Fragrance
            <Icon color='var(--TypeLowEmphasis)' label="Fragrance"/> 
            </li>
            </Link>
           
            <Link className={styles.Link} to={'/categories/'}>
            <li>
            Watches
            <Icon color='var(--TypeLowEmphasis)' label="Watches"/>    
            </li>
            </Link>

            <Link className={styles.Link} to={'/about'}>
            <li>
            About
            <Icon color='var(--TypeLowEmphasis)' label="About"/>   
            </li>
            </Link>

            
        </ul>

        <div className={styles.divider}></div>

        <ul>
          <span>Contact Us</span>

           <Link className={styles.Link} to={'/'}>
            <li className={styles.contactText}>
            Help & Support
            <Icon color='var(--Dark)'  label="Help & Support"/>   
            </li>
            </Link>

            <Link className={styles.Link} to={'/'}>
            <li className={styles.contactText}>
            Feedback & Suggestions
            <Icon color='var(--Dark)'  label="Feedback & Suggestions"/>   
            </li>
            </Link>

            <Link className={styles.Link} to={'/'}>
            <li className={styles.contactText}>
            Visit Websites
            <Icon color='var(--Dark)' label="Visit Websites"/>   
            </li>
            </Link>
        </ul>
    </nav>
    </div>
  )
}

function Icon({color}) {
  return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="icon/chevron-right">
        <path id="Vector" d="M9 4.5L16.5 12L9 19.5" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </svg>
  );
}


export default Drawer;