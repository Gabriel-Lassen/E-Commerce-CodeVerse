import { Link, useLocation } from "react-router-dom";

import styles from "./styles.module.scss";

const SideBarProfile = () => {

    const location = useLocation();

  return (
    <div>
        <nav className={styles.sideBar}>
            <ul>
                <Link className={styles.Link} to={'/profile/personalinformation'}>
                    <li className={location.pathname === '/profile/personalinformation' ? styles.active : ''}>
                        Personal Information
                        <Icon color={location.pathname === "/profile/personalinformation" ? 'var(--Primary)' : 'var(--Dark)'} label="Personal Information" />
                    </li>
                </Link>
            
                <Link className={styles.Link} to={'/profile/referandearn'}>
                    <li className={location.pathname === '/profile/referandearn' ? styles.active  : ''}>
                        Refer and Earn
                        <Icon color={location.pathname === "/profile/referandearn" ? 'var(--Primary)' : 'var(--Dark)'} label="Refer and Earn"/>
                    </li>
                </Link>
            
                <Link className={styles.Link} to={'/profile/myorders'}>
                    <li className={location.pathname === '/profile/myorders' ? styles.active  : ''}>
                        My Orders
                        <Icon color={location.pathname === "/profile/myorders" ? 'var(--Primary)' : 'var(--Dark)'} label="My Orders"/>
                    </li>
                </Link>
            
                <Link className={styles.Link} to={'/profile/mywishlist'}>
                    <li className={location.pathname === '/profile/mywishlist' ? styles.active  : ''}>
                        My Wishlist
                        <Icon color={location.pathname === "/profile/mywishlist" ? 'var(--Primary)' : 'var(--Dark)'} label="My Wishlist"/>
                    </li>
                </Link>
            
                <Link className={styles.Link} to={'/profile/myreviews'}>
                    <li className={location.pathname === '/profile/myreviews' ? styles.active  : ''}>
                        My Reviews
                        <Icon color={location.pathname === "/profile/myreviews" ? 'var(--Primary)' : 'var(--Dark)'} label="My Reviews"/>
                    </li>
                </Link>
            
                <Link className={styles.Link} to={'/profile/myaddressbook'}>
                    <li className={location.pathname === '/profile/myaddressbook' ? styles.active  : ''}>
                        My Address Book
                        <Icon color={location.pathname === "/profile/myaddressbook" ? 'var(--Primary)' : 'var(--Dark)'} label="My Address Book"/>
                    </li>
                </Link>
            
                <Link className={styles.Link} to={'/profile/mysavedcards'}>
                    <li className={location.pathname === '/profile/mysavedcards' ? styles.active  : ''}>
                        My Saved Cards
                        <Icon color={location.pathname === "/profile/mysavedcards" ? 'var(--Primary)' : 'var(--Dark)'} label="My Saved Cards"/>    
                    </li>
                </Link>
            </ul>
        </nav>
    </div>
  )
}


function Icon({color}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 4.5L16.5 12L9 19.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
  }

export default SideBarProfile