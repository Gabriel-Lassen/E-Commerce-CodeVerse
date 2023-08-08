import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../../contexts/products";
import { FilterActionsContext } from "../../contexts/filterActions";

import styles from './styles.module.scss';

import ProductCard from '../ProductCard';

const ShowProducts = ({category}) => {

    const { listProducts } = useContext(ProductsContext);
    const { filtredSizes, filtredColors, filtredBrands, SortBy } = useContext(FilterActionsContext);
    const [totalProducts, setTotalProducts] = useState();
    const [productsCategoryFiltred, setProductsCategoryFiltred] = useState([]);
    const [productsToShow, setProductsToShow] = useState([]);

    useEffect(() => {
        if(listProducts){
          const list = listProducts.filter((product) => {return product.category.indexOf(category) !== -1});
          setTotalProducts(list.length);
          setProductsCategoryFiltred(list);
          setProductsToShow(list)
        }
    }, [listProducts, category]);

    useEffect(() => {
        const newFilteredProducts = productsCategoryFiltred.filter((product) => {
            const colorMatch = filtredColors.length === 0 || filtredColors.includes(product.color);
            const sizeMatch = filtredSizes.length === 0 || filtredSizes.includes(product.size);
            const brandMatch = filtredBrands.length === 0 || filtredBrands.includes(product.brand);
            return colorMatch && sizeMatch && brandMatch;
        });
        setProductsToShow(newFilteredProducts);
    }, [filtredColors, filtredBrands, filtredSizes]);

    useEffect(() => {
        setTotalProducts(productsToShow.length)
    }, [productsToShow]);

  return (
    <div className={styles.wrapper}>
        <span>{totalProducts} Products</span>
        <div className={totalProducts % 2 == 0 ? styles.productsPar : styles.productsImpar}>
            {productsToShow && 
                productsToShow.map((item ,idx) => {
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