import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../../contexts/products";

import styles from './styles.module.scss';

import ProductCard from '../ProductCard';

const ShowProducts = ({category}) => {

    const { listProducts } = useContext(ProductsContext);
    const [totalProducts, setTotalProducts] = useState();
    const [productsCategoryFiltred, setProductsCategoryFiltred] = useState();

    useEffect(() => {
        if(listProducts){
          const list = listProducts.filter((product) => {return product.category.indexOf(category) !== -1});
          setTotalProducts(list.length);
          setProductsCategoryFiltred(list)
        }
      }, [listProducts, category])

  return (
    <div className={styles.wrapper}>
        <span>{totalProducts} Products</span>
        <div className={styles.products}>
            {productsCategoryFiltred && 
                productsCategoryFiltred.map((item ,idx) => {
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

export default ShowProducts