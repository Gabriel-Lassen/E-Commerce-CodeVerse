import styles from './styles.module.scss';
import { ProductsContext } from '../../contexts/products';
import { useContext, useEffect, useState } from 'react'
import ProductCard from '../ProductCard';
import Chevron from '../../assets/imgs/chevron-right.svg'

const ProductsCarousel = ({keyToFilter, expectedOutcome}) => {
  
  const { listProducts } = useContext(ProductsContext);
  const [filtredListProducts, setFiltredListProducts] = useState();

  useEffect(() => {
    if(listProducts){
      const list = listProducts.filter((item) => {return item[keyToFilter].indexOf(expectedOutcome) !== -1});
      setFiltredListProducts(list);
    }
  },[listProducts])

  return (
    <div className={styles.wrapper}>
      <div className={styles.viewAll}>
        <h2>New Arrivals</h2>
        <button>
          <span>View All</span>
          <img src={Chevron} alt="" />
        </button>
      </div>
      <div className={styles.carousel}>
        {filtredListProducts && 
          filtredListProducts.map((item) => {
            return <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              info={item.info}
              price={item.price}
              discount={item.discount}
              averageStars={item.rating.averageStars}
              totalRatings={item.rating.totalRatings}
              url={item.url}
              popularity={item.popularity}
              reviews={item.reviews}
              addToBagBtn={false}
              rating={false}
            />
          })
        }
      </div>
    </div>
  )
}

export default ProductsCarousel