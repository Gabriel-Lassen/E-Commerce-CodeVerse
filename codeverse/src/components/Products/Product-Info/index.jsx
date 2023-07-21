import styles from "./styles.module.scss";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../../contexts/products";
import Star from "../../../assets/imgs/star.svg";

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
        setTotalRatings(product.totalRatings);
        setAverageStars(product.averageStars);
      }
    }
  }, [listProducts]);

  let stars = [];
  for (let i = 0; i < averageStars; ++i) {
    stars.push(<img src={Star} key={i} />);
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
      {rating && (
        <div className={styles.rating}>
          <div className={styles.stars}>{stars}</div>
          <span>{totalRatings} Ratings</span>
        </div>
      )}

      <div className={styles.DeliveryDetails}>
        <div>
          <p>Delivery Details</p>
          <span>Check estimated delivery date/pickup option.</span>
        </div>
        <div className={styles.pin}>
          <input type="text" placeholder="Apply Valid Pincode" />
          <button>check</button>
        </div>
      </div>

      <div className={styles.qty}>
        <span>Quantity:</span>
        <div className={styles.btn}>
          <button>-</button>1<button>+</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsInfo;
