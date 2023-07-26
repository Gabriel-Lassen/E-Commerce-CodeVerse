import styles from './styles.module.scss';
import { ProductsContext } from '../../../../contexts/products';
import { useContext, useEffect, useState } from 'react'
import ProductDescription from '../../../ProductDescription';
import ProductRating from '../../../ProductRating';
import ProductsCarousel from '../../../productsCarousel';

const OverviewDesktop = () => {
  const { listProducts } = useContext(ProductsContext);
    const [componentInView, setComponentInview] = useState('Description');
    const [productCategory, setProductCategory] = useState('')
    const [btnActive, setBtnActive] = useState('Description')

    useEffect(() => {
        if (listProducts) {
            const productId = window.location.pathname.split("/products/").pop();

            const product = listProducts.find((item) => item.id === productId);

            if (product) {
                setProductCategory(product.category);
            }
        }
    }, [listProducts]);

    function handleclick(text){
      setComponentInview(text);
      setBtnActive(text);
    }

  return (
    <div className={styles.wrapper}>
        <div className={styles.btns}>
            <button
              onClick={() => handleclick('Description')}
              className={btnActive == 'Description' ? styles.btnActive : ''}
            >
                Product Description
            </button>
            <button
              onClick={() => handleclick('Related')}
              className={btnActive == 'Related' ? styles.btnActive : ''}
            >
              Related Products
            </button>
            <button
              onClick={() => handleclick('Ratings')}
              className={btnActive == 'Ratings' ? styles.btnActive : ''}
            >
              Ratings and Reviews
            </button>
        </div>
        <div className={styles.inView}>
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