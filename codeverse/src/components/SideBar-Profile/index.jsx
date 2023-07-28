import { Link, useLocation } from "react-router-dom";

import styles from "./styles.module.scss";

const SideBarProfile = () => {

    const location = useLocation();

    const personalInformation = location.pathname === "/profile/personalinformation";
    const referAndEarn = location.pathname === "/profile/referandearn";
    const myOrders = location.pathname === "/profile/myorders";
    const myWishlist = location.pathname === "/profile/mywishlist";
    const myReviews = location.pathname === "/profile/myreviews";
    const myAddressBook = location.pathname === "/profile/myaddressbook";
    const mySavedCards = location.pathname === "/profile/mysavedcards";

  return (
    <div>
        <nav className={styles.sideBar}>
            <ul>
                <Link className={styles.Link} to={'/profile/personalinformation'}>
                    <li className={personalInformation ? styles.active : ''}>
                        Personal Information
                        <Icon color={personalInformation ? 'var(--Primary)' : 'var(--Dark)'} label="Personal Information" />
                    </li>
                </Link>
            
                <Link className={styles.Link} to={'/profile/referandearn'}>
                    <li className={referAndEarn ? styles.active  : ''}>
                        Refer and Earn
                        <Icon color={referAndEarn ? 'var(--Primary)' : 'var(--Dark)'} label="Refer and Earn"/>
                    </li>
                </Link>
            
                <Link className={styles.Link} to={'/profile/myorders'}>
                    <li className={myOrders ? styles.active  : ''}>
                        My Orders
                        <Icon color={myOrders ? 'var(--Primary)' : 'var(--Dark)'} label="My Orders"/>
                    </li>
                </Link>
            
                <Link className={styles.Link} to={'/profile/mywishlist'}>
                    <li className={myWishlist ? styles.active  : ''}>
                        My Wishlist
                        <Icon color={myWishlist ? 'var(--Primary)' : 'var(--Dark)'} label="My Wishlist"/>
                    </li>
                </Link>
            
                <Link className={styles.Link} to={'/profile/myreviews'}>
                    <li className={myReviews ? styles.active  : ''}>
                        My Reviews
                        <Icon color={myReviews ? 'var(--Primary)' : 'var(--Dark)'} label="My Reviews"/>
                    </li>
                </Link>
            
                <Link className={styles.Link} to={'/profile/myaddressbook'}>
                    <li className={myAddressBook ? styles.active  : ''}>
                        My Address Book
                        <Icon color={myAddressBook ? 'var(--Primary)' : 'var(--Dark)'} label="My Address Book"/>
                    </li>
                </Link>
            
                <Link className={styles.Link} to={'/profile/mysavedcards'}>
                    <li className={mySavedCards ? styles.active  : ''}>
                        My Saved Cards
                        <Icon color={mySavedCards ? 'var(--Primary)' : 'var(--Dark)'} label="My Saved Cards"/>    
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