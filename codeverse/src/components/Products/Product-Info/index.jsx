import styles from "./styles.module.scss";

import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../../contexts/products";

import Star from "../../../assets/imgs/star.svg";
import StarLight from "../../../assets/imgs/Star-Light.svg";
import ProductPromo from "../Products-promo";
import Qty from "../Qty";

const ProductsInfo = () => {
  const { listProducts } = useContext(ProductsContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [discount, setDiscount] = useState("");
  const [rating, setRating] = useState("");
  const [totalRatings, setTotalRatings] = useState("");
  const [averageStars, setAverageStars] = useState("");
  const [reviews, setReviews] = useState("");

  useEffect(() => {
    if (listProducts) {
      const productId = window.location.pathname.split("/products/").pop();

      const product = listProducts.find((item) => item.id === productId);

      if (product) {
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
        setQty(product.qty);
        setDiscount(product.discount);
        setQty(product.qty);
        setRating(product.rating);
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
    <div className={styles.container}>
      <h2>{name}</h2>
      <p>{description}</p>
      <div className={styles.priceContainer}>
        <h2>${(price * (1 - discount)).toFixed(2)}</h2>
        <span>
          <s>${price}</s>
        </span>
        <p>{discount * 100}% OFF</p>
      </div>

      <div className={styles.productRatingDesk}>
        <div className={styles.ratingStarsDesk}>
          {renderRatingStars(averageStars)}
        </div>

        <div className={styles.ratingReviewDesk}>
          <span
            className={styles.ratingsDesk}
          >{`(${totalRatings}) Ratings`}</span>
        </div>
      </div>

      <div className={styles.productRatingMob}>
        <div className={styles.ratingStarsMob}>
          <span>{averageStars}</span>
          <img src={Star} alt="Rating" />
        </div>

        <div className={styles.ratingReviewMob}>
          <span className={styles.avarage}>Average Rating</span>
          <span className={styles.ratings}>
            {totalRatings} Ratings & {reviews} Reviews
          </span>
        </div>
      </div>

      <div className={styles.separator}></div>
      <div className={styles.cupons}>
        <ProductPromo />
        <ProductPromo />
      </div>
      <div className={styles.DeliveryDetails}>
        <div className={styles.DeliveryText}>
          <p>Delivery Details</p>
          <span>Check estimated delivery date/pickup option.</span>
        </div>
        <div className={styles.pin}>
          <input type="number" placeholder="Apply Valid Pincode" />
          <button>check</button>
        </div>
      </div>
      <Qty qty={qty} text={"Quantity:"} />
    </div>
  );
};

export default ProductsInfo;
