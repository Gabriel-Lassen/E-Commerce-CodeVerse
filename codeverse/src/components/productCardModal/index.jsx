import styles from './styles.module.scss';
import Star from '../../assets/imgs/star.svg';
import Chevron from '../../assets/imgs/chevron-up.svg';
import Wishlist from '../../assets/imgs/fav.svg';
import Bag from '../../assets/imgs/bag-light.svg';
import { useNavigate } from 'react-router-dom';
import BtnAddToWishlist from '../BtnAddToWishlist';

const ProductCardModal = ({id, name, info, price, discount, averageStars, totalRatings, url, reviews}) => {
    const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
        <div className={styles.modal}>
            <div className={styles.productInfo} onClick={() => navigate(`/products/${id}`)}>
                <img src={url} />
                <div className={styles.infoText}>
                    <span className={styles.textName}>{name}</span>
                    <span className={styles.textDescription}>{info}</span>
                    <span className={styles.textPrice}>${(price * (1 - discount)).toFixed(2)}</span>
                </div>
            </div>
            <div className={styles.productRating}>
                <div className={styles.ratingStars}>
                    <span>{averageStars}</span>
                    <img src={Star} alt="Rating" />
                </div>
                <div className={styles.ratingReview}>
                    <div className={styles.reviewText}>
                        <span className={styles.avarage}>Average Rating</span>
                        <span className={styles.ratings}>{totalRatings} Ratings & {reviews} Reviews</span>
                    </div>
                    <button>
                        <img src={Chevron} alt="" />
                    </button>
                </div>
            </div>
            <div className={styles.productSize}>
                <div className={styles.sizeText}>
                    <span className={styles.select}>Select Size</span>
                    <span className={styles.sizeType}>(UK Size)</span>
                </div>
                <div className={styles.sizeSelect}>
                    <input type="radio" name={id} id={`${id}small`} value='small' />
                    <label htmlFor={`${id}small`}>Small</label>

                    <input type="radio" name={id} id={`${id}medium`} value='medium' />
                    <label htmlFor={`${id}medium`}>Medium</label>
        
                    <input type="radio" name={id} id={`${id}big`} value='big' />
                    <label htmlFor={`${id}big`}>Big</label>
                </div>
            </div>
            <div className={styles.modalActions}>
                <BtnAddToWishlist type='medium' />
                <button className={styles.addBagBtn}>
                    <img src={Bag} alt="add to bag" />
                    <span>Add to bag</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductCardModal