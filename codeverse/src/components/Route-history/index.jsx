import { useLocation, Link } from 'react-router-dom';
import styles from './styles.module.scss';
import Arrow from "../../assets/imgs/chevron-right-small.svg";

const RouteHistory = () => {

  const location = useLocation();
  const pathnames = location.pathname.split('/');

  const breadcrumbLabels = {
    '': 'Home',
    profile: 'User Profile',
    referandearn: 'Refer And Earn',
    myorders: 'My Orders',
    mywishlist: 'My Wishlist',
    myreviews: 'My Reviews',
    myaddressbook: 'My Address Book',
    mysavedcards: 'My Saved Cards',
    mycart: 'My Cart',
  };

  const breadcrumbItems = pathnames.map((pathname, index) => {

    const routeTo = `/${pathnames.slice(1, index + 1).join('/')}`;
    const label = breadcrumbLabels[pathname] || pathname;

    return { label, link: routeTo };
  });

  const ShowImg = (index, label) => {

    const Conditions = label === 'User Profile' && pathnames[pathnames.length - 1] === 'personalinformation';

    return index !== breadcrumbItems.length - 1 && 
    !(index === breadcrumbItems.length - 2 && Conditions);
  };

  return (
    <nav>
      <ul className={styles.breadcrumb}>
        {breadcrumbItems.map((step, index) => (
          <li key={index}> 
          {step.label !== 'personalinformation' && (
              <Link to={step.link} className={step.label === 'Home' ? styles.home : styles.link}>
                {step.label}

                {ShowImg(index, step.label) && (
                    <img src={Arrow} alt="" />
                 )}

              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default RouteHistory