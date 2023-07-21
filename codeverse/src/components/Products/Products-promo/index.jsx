import styles from "./styles.module.scss";

import Star from '../../../assets/imgs/star.svg';
import StarLight from '../../../assets/imgs/Star-Light.svg';

import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../../contexts/products";

const ProductPromo = () => {
  const { listProducts } = useContext(ProductsContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [averageStars, setAverageStars] = useState(""); 
  const [totalRatings, setTotalRatings] = useState(""); 
  const [reviews, setReviews] = useState("");

  useEffect(() => {
    if (listProducts) {
      const productId = window.location.pathname.split("/products/").pop();

      const product = listProducts.find((item) => item.id === productId);

      if (product) {
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
        setDiscount(product.discount);
        setAverageStars(product.rating.averageStars);
        setTotalRatings(product.rating.totalRatings);
        setReviews(product.reviews);
      }
    }
  }, [listProducts]);

  function renderRatingStars(averageStars) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= averageStars) {
        stars.push(<img src={Star} key={i} alt={`Star ${i}`} />);
      } else {
        stars.push(<img src={StarLight} key={i} alt={`Star ${i}`} />);
      }
    }

    return stars;
  }

  return (
      <div className={styles.wrapper}>
        <div className={styles.infoText}>
            <span className={styles.textName}>{name}</span>
            <span className={styles.textDescription}>{description}</span>

            <div className={styles.productRatingDesk}>
                <div className={styles.ratingStarsDesk}>
                    {renderRatingStars(averageStars)}
                </div>
                
                <div className={styles.ratingReviewDesk}>
                    <span className={styles.ratingsDesk}>{`(${totalRatings}) Ratings`}</span>
                </div>

            </div>
            
            <div className={styles.priceBox}>
                <span className={styles.textPrice}>${(price * (1 - discount)).toFixed(2)}</span>
                <span className={styles.price}>${price}</span>
                <span className={styles.discount}>{discount*100}% OFF</span>
            </div>

            <div className={styles.productRatingMob}>
                <div className={styles.ratingStarsMob}>
                    <span>{averageStars}</span>
                    <img src={Star} alt="Rating" />
                </div>

                <div className={styles.ratingReviewMob}>
                    <span className={styles.avarage}>Average Rating</span>
                    <span className={styles.ratings}>{totalRatings} Ratings & {reviews} Reviews</span>
                </div>
            </div>

        </div>
      </div>
  );
};

export default ProductPromo;
