import { Link } from "react-router-dom";

const SideBarProfile = () => {
  return (
    <div>
        <nav>
            <ul>
                <Link to={'/about/'}>
                    <li>
                    Personal Information
                    <Icon color='var(--Dark)' label="Personal Information" />
                    </li>
                </Link>
            
                <Link to={'/about/'}>
                    <li>
                    Refer and Earn
                    <Icon color='var(--Dark)' label="Refer and Earn"/>
                    </li>
                </Link>
            
                <Link to={'/about/'}>
                    <li>
                    My Orders
                    <Icon color='var(--Dark)' label="My Orders"/>
                    </li>
                </Link>
            
                <Link to={'/about/'}>
                    <li>
                    My Wishlist
                    <Icon color='var(--Dark)' label="My Wishlist"/>
                    </li>
                </Link>
            
                <Link to={'/about/'}>
                    <li>
                    My Reviews
                    <Icon color="var(--Dark)" label="My Reviews"/>
                    </li>
                </Link>
            
                <Link to={'/about/'}>
                    <li>
                    My Address Book
                    <Icon color='var(--Dark)' label="My Address Book"/>
                    </li>
                </Link>
            
                <Link to={'/about/'}>
                    <li>
                    My Saved Cards
                    <Icon color='var(--Dark)' label="My Saved Cards"/>    
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