
import { Link } from 'react-router-dom'

import { useContext } from 'react';
import { AuthContext } from "../../contexts/Auth";
import Avatar from "../../assets/imgs/avatar.png";

import styles from './styles.module.scss'
import ArrowSvg from '../ArrowSvg';
import UserInfo from '../User-info';

const Drawer = ({active}) => {

  const { user } = useContext(AuthContext);

    const closeDrawer = () => {
        active(false)
    }
    
  return (
    <div className={styles.background} onClick={closeDrawer}>
      <nav className={styles.drawer}>

      {!user ? 
      <Link className={styles.boxProfile} to='/getstarted'>
        <img src={Avatar} alt="avatar" />
          <h2>Faça login </h2>
        <ArrowSvg color='var(--Dark)'/>
      </Link> 
      : 
      <Link className={styles.Link} to='/profile'>
        <UserInfo type="BasicInfo"/>
      </Link>
      }


      <div className={styles.divider}></div>

        <ul>
          <span>Top Categories</span>

            <Link className={styles.Link} to={'/categories/skincare'}>
            <li>
            Skincare
            <ArrowSvg color='var(--TypeLowEmphasis)' label="Skincare" />
            </li>
            </Link>
            
            <Link className={styles.Link} to={'/categories/apparels'}>
            <li>
            Apparels
            <ArrowSvg color='var(--TypeLowEmphasis)' label="Apparels"/>
            </li>
            </Link>
            
            <Link className={styles.Link} to={'/categories/jwellery'}>
            <li>
            Jwellery
            <ArrowSvg color='var(--TypeLowEmphasis)' label="Jwellery"/>
            </li>
            </Link>
            
            <Link className={styles.Link} to={'/categories/handbags'}>
            <li>
            Handbags
            <ArrowSvg color='var(--TypeLowEmphasis)' label="Handbags"/>
            </li>
            </Link>
           
            <Link className={styles.Link} to={'/categories/eyeware'}>
            <li>
            Eyeware
            <ArrowSvg color="var(--TypeLowEmphasis)" label="Eyeware"/> 
            </li>
            </Link>
            
            <Link className={styles.Link} to={'/categories/fragrance'}>
            <li>
            Fragrance
            <ArrowSvg color='var(--TypeLowEmphasis)' label="Fragrance"/> 
            </li>
            </Link>
           
            <Link className={styles.Link} to={'/categories/watches'}>
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