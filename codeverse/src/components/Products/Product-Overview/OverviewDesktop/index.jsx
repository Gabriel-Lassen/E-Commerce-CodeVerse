import styles from './styles.module.scss';
import { ProductsContext } from '../../../../contexts/products';
import { useContext, useEffect, useState } from 'react'
import ProductDescription from '../../../ProductDescription';
import ProductRating from '../../../ProductRating';
import ProductsCarousel from '../../../productsCarousel';

const OverviewDesktop = () => {
    const [componentInView, setComponentInview] = useState('Description');
    const { listProducts } = useContext(ProductsContext);
    const [productCategory, setProductCategory] = useState('')

    useEffect(() => {
        if (listProducts) {
            const productId = window.location.pathname.split("/products/").pop();

            const product = listProducts.find((item) => item.id === productId);

            if (product) {
                setProductCategory(product.category);
            }
        }
    }, [listProducts]);

  return (
    <div>
        <div>
            <button onClick={() => setComponentInview('Description')}>Product Description</button>
            <button onClick={() => setComponentInview('Related')}>Related Products</button>
            <button onClick={() => setComponentInview('Ratings')}>Ratings and Reviews</button>
        </div>
        <div>
          { componentInView === 'Description' &&
            <ProductDescription />
          }
          { componentInView === 'Related' &&
            <ProductsCarousel
              title='You Might Also Like'
              showViewAll={false}
              keyToFilter='category'
              expectedOutcome={productCategory}
              maxItems={6}
            />
          }
          { componentInView === 'Ratings' &&
            <ProductRating />
          }
        </div>
    </div>
  )
}

export default OverviewDesktop