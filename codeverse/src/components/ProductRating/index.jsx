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
    <div>
      <div>
        <span>{productName}</span>
        <span>{productDetails}</span>
      </div>
      <div>
        <div>
          <span>{productRating.averageStars}</span>
          <img src={Star} alt="Average Rating" />
        </div>
        <span>Average Rating</span>
      </div>
      <div>
        <div>
          <span>5.0</span>
          <div>
            <div></div>
          </div>
        </div>
        <div>
          <span>4.0</span>
          <div>
            <div></div>
          </div>
        </div>
        <div>
          <span>3.0</span>
          <div>
            <div></div>
          </div>
        </div>
        <div>
          <span>2.0</span>
          <div>
            <div></div>
          </div>
        </div>
        <div>
          <span>1.0</span>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductRating