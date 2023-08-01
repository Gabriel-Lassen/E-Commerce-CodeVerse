import { useLocation, Link } from 'react-router-dom';

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
  };

  const breadcrumbItems = pathnames.map((pathname, index) => {

    const routeTo = `/${pathnames.slice(1, index + 1).join('/')}`;
    const label = breadcrumbLabels[pathname] || pathname;

    return { label, link: routeTo };
  });

  return (
    <nav>
      <ul>
        {breadcrumbItems.map((step, index) => (
          <li key={index}>
            {step.label !== 'personalinformation' ? (
              <Link to={step.link}>
                {step.label}
              </Link>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default RouteHistory