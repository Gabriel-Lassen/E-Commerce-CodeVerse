import { useLocation } from 'react-router-dom';
import styles from './styles.module.scss'

const TitlePage = () => {

    const location = useLocation();
    const pathnames = location.pathname.split('/');
    const lastPathname = pathnames[pathnames.length - 1];

    const titleMap = {
      personalinformation: "Personal Information",
      referandearn: 'Refer And Earn',
      myorders: 'My Orders',
      mywishlist: 'My Wishlist',
      myreviews: 'My Reviews',
      myaddressbook: 'My Address Book',
      mysavedcards: 'My Saved Cards',
      mycart: 'My Cart',
      checkout: 'Checkout',
    };

    const titleRender = titleMap[lastPathname] || lastPathname;
  
    return (
        <div className={styles.container}>
            <h1>{titleRender}</h1>
        </div>
    )
}

export default TitlePage