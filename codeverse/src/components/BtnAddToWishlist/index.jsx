import styles from './styles.module.scss';
import Wishlist from '../../assets/imgs/fav.svg';
import AddedWishlist from '../../assets/imgs/addedWishlist.svg';
import { useContext, useEffect, useState } from 'react';
import { WishlistActionsContext } from '../../contexts/wishlistActions';
import { AuthContext } from '../../contexts/Auth';

const BtnAddToWishlist = ({type, id}) => {
  const { user } = useContext(AuthContext);
  const { handleaddToUserWishlist, handleDeleteOneProductUserWishlist, userWishlist } = useContext(WishlistActionsContext);
  const [isInWishlist, setIsinWishlist] = useState();

  useEffect(() => {
    setIsinWishlist(userWishlist.some(wishlist => wishlist.productId === id));
  }, [id, userWishlist]);

  function handleClick(){
    if( userWishlist.some(wishlist => wishlist.productId === id)){
      handleDeleteOneProductUserWishlist(id);
      if(user) {
        setIsinWishlist(false);
      }
    } else {
      handleaddToUserWishlist(id);
      if(user) {
        setIsinWishlist(true);
      }
    }
  }

  return (
    <>
      { type === 'small' &&
        <button className={styles.wishBtnSmall} onClick={handleClick}>
          {isInWishlist ?
            <img src={AddedWishlist} alt="Add to Wishlist" />
            :
            <img src={Wishlist} alt="Add to Wishlist" />
          }
        </button>
      }
      { type === 'medium' &&
        <button className={styles.wishBtnMedium} onClick={handleClick}>
          {isInWishlist ?
            <img src={AddedWishlist} alt="Add to Wishlist" />
            :
            <img src={Wishlist} alt="Add to Wishlist" />
            }
        </button>
      }
      { type === 'big' &&
        <button className={styles.wishBtnBig} onClick={handleClick}>
          {isInWishlist ?
            <img src={AddedWishlist} alt="Add to Wishlist" />
            :
            <img src={Wishlist} alt="Add to Wishlist" />
            }
          {isInWishlist ?
            <span>Remove from Wishlist</span>
            :
            <span>Add To Wishlist</span>
          }
        </button>
      }
    </>
  )
}

export default BtnAddToWishlist