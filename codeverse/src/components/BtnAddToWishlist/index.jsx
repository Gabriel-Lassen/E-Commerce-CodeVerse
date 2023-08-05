import styles from './styles.module.scss';
import Wishlist from '../../assets/imgs/fav.svg';

const BtnAddToWishlist = ({type}) => {
  return (
    <>
      { type === 'small' &&
        <button className={styles.wishBtnSmall}>
          <img src={Wishlist} alt="Add to Wishlist" />
        </button>
      }
      { type === 'medium' &&
        <button className={styles.wishBtnMedium}>
          <img src={Wishlist} alt="Add to Wishlist" />
        </button>
      }
      { type === 'big' &&
        <button className={styles.wishBtnBig}>
          <img src={Wishlist} alt="Add to Wishlist" />
          <span>Add To Wishlist</span>
        </button>
      }
    </>
  )
}

export default BtnAddToWishlist