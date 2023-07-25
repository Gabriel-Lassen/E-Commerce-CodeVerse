import styles from './styles.module.scss';
import Wishlist from '../../assets/imgs/fav.svg';

const BtnAddToWishlist = () => {
  return (
    <button className={styles.wishBtn}>
        <img src={Wishlist} alt="Add to Wishlist" />
    </button>
  )
}

export default BtnAddToWishlist