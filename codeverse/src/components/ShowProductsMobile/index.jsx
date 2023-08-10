import { useContext, useEffect, useState } from "react";
import { FilterActionsContext } from "../../contexts/filterActions";

import styles from './styles.module.scss';

import ProductCard from '../ProductCard';

const ShowProductsMobile = () => {

    const { totalProducts, productsToShow, sortBy } = useContext(FilterActionsContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productsToShow);
    }, [productsToShow, sortBy]);

  return (
    <div className={styles.wrapper}>
        <span className={styles.span}>{totalProducts} Products</span>
        <div className={totalProducts % 2 == 0 ? styles.productsPar : styles.productsImpar}>
            {products && 
                products.map((item ,idx) => {
                    return <ProductCard
                        key={idx}
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
                        addToBagBtn={true}
                        rating={true}
                    />
                })
            }
        </div>
    </div>
  )
}

export default ShowProductsMobile