import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import styles from './styles.module.scss';

import ProductCardModal from '../ProductCardModal';
import BtnAddToBag from '../BtnAddToBag';
import BtnAddToWishlist from '../BtnAddToWishlist';
import ModalBottomMobile from '../ModalBottomMobile/indes';

import Star from '../../assets/imgs/star.svg';

const ProductCard = ({id, name, info, price, discount, averageStars, totalRatings, url, popularity, addToBagBtn, rating, reviews}) => {
    useEffect(() => {
        handleResize(); 

        window.addEventListener("resize", handleResize); 

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const [showModal, setShowModal] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    let stars = [];
    for (let i = 0; i < averageStars; ++i) {
        stars.push(<img src={Star} key={i}/>)
    }

    const handleClick = () => {
        if(redirect){
           navigate(`/products/${id}`);
        } else {
            setShowModal(true)
        }
    }

    const handleResize = () => {
        const windowWidth = window.innerWidth;
        const breakpointWidth = 769;
        if(windowWidth >= breakpointWidth || location.pathname !== '/'){
            setRedirect(true);
            setShowModal(false);
        } else {
            setRedirect(false);
        }
    };

  return (
    <div className={styles.card}>
        <div className={styles.image} style={{backgroundImage: `url(${url})`}} onClick={handleClick} >
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
            <div className={styles.wishBtn}>
                <BtnAddToWishlist type='small' id={id}/>
            </div>
        </div>
        {addToBagBtn &&
            <BtnAddToBag theme='light' id={id} />
        }
        {showModal &&
            <ModalBottomMobile setShowModal={setShowModal}>
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
            </ModalBottomMobile> 
        }
    </div>
  )
}

export default ProductCard