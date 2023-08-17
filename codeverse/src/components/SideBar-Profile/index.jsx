import { Link, useLocation } from "react-router-dom";

import styles from "./styles.module.scss";
import ArrowSvg from "../ArrowSvg";

const SideBarProfile = () => {

    const location = useLocation();

    const myOrdersPattern = /^\/profile\/myorders\/\d+$/;

    const personalInformation = location.pathname === "/profile/personalinformation";
    const referAndEarn = location.pathname === "/profile/referandearn";
    const myOrders = location.pathname === "/profile/myorders";
    const myOrdersOrderId = location.pathname.match(myOrdersPattern);
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
                        <ArrowSvg color={personalInformation ? 'var(--Primary)' : 'var(--Dark)'} label="Personal Information" />
                    </li>
                </Link>
            
                <Link className={styles.Link} to={'/profile/referandearn'}>
                    <li className={referAndEarn ? styles.active  : ''}>
                        Refer and Earn
                        <ArrowSvg color={referAndEarn ? 'var(--Primary)' : 'var(--Dark)'} label="Refer and Earn"/>
                    </li>
                </Link>
            
                <Link className={styles.Link} to={'/profile/myorders'}>
                    <li className={myOrders ? styles.active  : '' || myOrdersOrderId ? styles.active : ''}>
                        My Orders
                        <ArrowSvg color={myOrders ? 'var(--Primary)' : 'var(--Dark)'} label="My Orders"/>
                    </li>
                </Link>
            
                <Link className={styles.Link} to={'/profile/mywishlist'}>
                    <li className={myWishlist ? styles.active  : ''}>
                        My Wishlist
                        <ArrowSvg color={myWishlist ? 'var(--Primary)' : 'var(--Dark)'} label="My Wishlist"/>
                    </li>
                </Link>
            
                <Link className={styles.Link} to={'#'}>
                    <li className={myReviews ? styles.active  : ''}>
                        My Reviews
                        <ArrowSvg color={myReviews ? 'var(--Primary)' : 'var(--Dark)'} label="My Reviews"/>
                    </li>
                </Link>
            
                <Link className={styles.Link} to={'/profile/myaddressbook'}>
                    <li className={myAddressBook ? styles.active  : ''}>
                        My Address Book
                        <ArrowSvg color={myAddressBook ? 'var(--Primary)' : 'var(--Dark)'} label="My Address Book"/>
                    </li>
                </Link>
            
                <Link className={styles.Link} to={'#'}>
                    <li className={mySavedCards ? styles.active  : ''}>
                        My Saved Cards
                        <ArrowSvg color={mySavedCards ? 'var(--Primary)' : 'var(--Dark)'} label="My Saved Cards"/>    
                    </li>
                </Link>
            </ul>
        </nav>
    </div>
  )
}




export default SideBarProfile