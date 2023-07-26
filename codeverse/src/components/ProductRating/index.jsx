import styles from './styles.module.scss';
import { ProductsContext } from '../../contexts/products';
import { useContext, useEffect, useState } from 'react';
import Star from '../../assets/imgs/star.svg';

const ProductRating = () => {
  const { listProducts } = useContext(ProductsContext);
  const [productName, setProductName] = useState('');
  const [productDetails, setProductDetails] = useState('');
  const [productRating, setProductRating] = useState({});

  useEffect(() => {
    if (listProducts) {
      const productId = window.location.pathname.split("/products/").pop();

      const product = listProducts.find((item) => item.id === productId);

      if (product) {
        setProductName(product.name);
        setProductDetails(product.description);
        setProductRating(product.rating);
      }
    }
  }, [listProducts]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.product}>
        <div className={styles.productInfo}>
          <span className={styles.productName}>{productName}</span>
          <span className={styles.productDetails}>{productDetails}</span>
        </div>
        <div className={styles.productRating}>
          <div className={styles.averageRating}>
            <span>{productRating.averageStars}</span>
            <img src={Star} alt="Average Rating" />
          </div>
          <span>Average Rating</span>
        </div>
      </div>
      <div className={styles.ratingStars}>
        <div className={styles.starQtyWrapper}>
          <span>5.0</span>
          <div className={styles.starQtyDefault}>
            <div
              className={styles.starQtyDynamic}
              style={{width: `${(productRating.fiveStars * 500) / productRating.totalRatings}%`}}>
              </div>
          </div>
        </div>
        <div className={styles.starQtyWrapper}>
          <span>4.0</span>
          <div className={styles.starQtyDefault}>
            <div
              className={styles.starQtyDynamic}
              style={{width: `${(productRating.fourStars * 500) / productRating.totalRatings}%`}}>
              </div>
          </div>
        </div>
        <div className={styles.starQtyWrapper}>
          <span>3.0</span>
          <div className={styles.starQtyDefault}>
            <div
              className={styles.starQtyDynamic}
              style={{width: `${(productRating.threeStars * 500) / productRating.totalRatings}%`}}>
              </div>
          </div>
        </div>
        <div className={styles.starQtyWrapper}>
          <span>2.0</span>
          <div className={styles.starQtyDefault}>
            <div
              className={styles.starQtyDynamic}
              style={{width: `${(productRating.twoStars * 500) / productRating.totalRatings}%`}}>
              </div>
          </div>
        </div>
        <div className={styles.starQtyWrapper}>
          <span>1.0</span>
          <div className={styles.starQtyDefault}>
            <div
              className={styles.starQtyDynamic}
              style={{width: `${(productRating.oneStars * 500) / productRating.totalRatings}%`}}>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductRating