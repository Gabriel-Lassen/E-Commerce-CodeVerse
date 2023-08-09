import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../../contexts/products";
import { FilterActionsContext } from "../../contexts/filterActions";

import styles from './styles.module.scss';

import ProductCard from '../ProductCard';

const ShowProducts = ({category}) => {

    const { listProducts } = useContext(ProductsContext);
    const { filtredSizes, filtredColors, filtredBrands, filtredPriceRange, filterDiscounts, SortBy } = useContext(FilterActionsContext);
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

            let priceMatch = false;
            if (filtredPriceRange.length === 0) {
                priceMatch = true;
            } else {
                priceMatch = filtredPriceRange.some(range => {
                    const price = product.price * (1 - product.discount);
                    if (range === '<50') {
                        return price <= 50;
                    } else if (range === '51-100') {
                        return price > 50 && price <= 100;
                    } else if (range === '101-150') {
                        return price > 100 && price <= 150;
                    } else if (range === '151-200') {
                        return price > 150 && price <= 200;
                    } else if (range === '>200') {
                        return price > 200;
                    }
                });
            }

            let discountMatch = false;
            if (filterDiscounts.length === 0) {
                discountMatch = true;
            } else {
                discountMatch = filterDiscounts.some(discount => {
                    if (discount === '10-25') {
                        return product.discount <= 0.25;
                    } else if (discount === '25-50') {
                        return product.discount >= 0.25 && product.discount <= 0.5;
                    } else if (discount === '>50') {
                        return product.discount > 0.5;
                    } 
                });
            }

            return colorMatch && sizeMatch && brandMatch && priceMatch && discountMatch;
        });
        setProductsToShow(newFilteredProducts);
    }, [filtredColors, filtredBrands, filtredSizes, filtredPriceRange, filterDiscounts]);

    useEffect(() => {
        setTotalProducts(productsToShow.length)
    }, [productsToShow]);

    useEffect(() => {
        switch (SortBy) {
            case 'Popular':
                productsToShow.sort(function(a, b) {return a.popularity > b.popularity ? -1 : a.popularity < b.popularity ? 1 : 0 });
                break;
            case 'Relevance':
                productsToShow.sort(function(a, b) {return a.reviews > b.reviews ? -1 : a.reviews < b.reviews ? 1 : 0 });
                break;
            case 'New':
                productsToShow.sort(function(a, b) {
                    const dataA = new Date(a.releaseDate);
                    const dataB = new Date(b.releaseDate);
                    return dataA > dataB ? -1 : dataA < dataB ? 1 : 0
                });
                break;
            case 'PriceLowToHigh':
                productsToShow.sort(function(a, b) {return (a.price * (1 - a.discount)) < (b.price * (1 - b.discount)) ? -1 : (a.price * (1 - a.discount)) > (b.price * (1 - b.discount)) ? 1 : 0 });
                break;
            case 'PriceHighToLow':
                productsToShow.sort(function(a, b) {return (a.price * (1 - a.discount)) > (b.price * (1 - b.discount)) ? -1 : (a.price * (1 - a.discount)) < (b.price * (1 - b.discount)) ? 1 : 0 });
                break;
            case 'OnSale':
                productsToShow.sort(function(a, b) {return a.discount > b.discount ? -1 : a.discount < b.discount ? 1 : 0 });
                break;
            default:
                productsToShow.sort(function(a, b) {return a.popularity > b.popularity ? -1 : a.popularity < b.popularity ? 1 : 0 });
        }
    }, [SortBy, productsToShow])

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