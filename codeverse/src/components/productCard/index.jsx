import styles from './styles.module.scss';
import Star from '../../assets/imgs/star.svg';
import Wishlist from '../../assets/imgs/wishlist.svg';
import Bag from '../../assets/imgs/bag.svg';
import ProductCardModal from '../productCardModal';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({id, name, info, price, discount, averageStars, totalRatings, url, popularity, addToBagBtn, rating, reviews}) => {
    let stars = [];
    for (let i = 0; i < averageStars; ++i) {
        stars.push(<img src={Star} key={i}/>)
    }
    const [showModal, setShowModal] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        if(redirect){
           navigate(`/products/${id}`);
        } else {
            if(showModal){
                setShowModal(false);
            } else (setShowModal(true))
        }
    }

    const handleResize = () => {
        const windowWidth = window.innerWidth;
        const breakpointWidth = 769;
        if(windowWidth >= breakpointWidth){
            setRedirect(true);
            setShowModal(false);
        } else {
            setRedirect(false);
        }
    };
    
    useEffect(() => {
        handleResize(); 

        window.addEventListener("resize", handleResize); 

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
  return (
    <div className={styles.card} onClick={handleClick}>
        <div className={styles.image} style={{backgroundImage: `url(${url})`}}>
            {popularity > 7 &&
                <button>Trending</button>
            }
        </div>
        <div className={styles.description}>
            <div className={styles.informations}>
               <div className={styles.product}>
                <span>{name}</span>
                <span>{info}</span>
               </div>
               {rating &&
                <div className={styles.rating}>
                    <div className={styles.stars}>
                        {stars}
                    </div>
                    <span>{totalRatings} Ratings</span>
                </div>
               }
               <div className={styles.price}>
                    <span className={styles.priceDiscount}>${(price*(1-discount)).toFixed(2)}</span>
                    <span className={styles.price}>${price}</span>
                    <span className={styles.discount}>{discount*100}% OFF</span>
               </div>
            </div>
            <button className={styles.wishBtn}>
                <img src={Wishlist} alt="" />
            </button>
        </div>
        {addToBagBtn &&
            <button className={styles.addBagBtn}>
                <img src={Bag} alt="" />
                <span>Add to bag</span>
            </button>
        }
        <div className={showModal ? styles.show : styles.hide} onClick={handleClick}>
            <ProductCardModal
                id={id}
                name={name}
                info={info}
                price={price}
                discount={discount}
                averageStars={averageStars}
                totalRatings={totalRatings}
                url={url}
                reviews={reviews}
            />
        </div>
    </div>
  )
}

export default ProductCard