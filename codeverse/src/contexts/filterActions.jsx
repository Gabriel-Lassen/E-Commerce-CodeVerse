import { createContext, useState, useEffect, useContext, useRef } from "react";
import { ProductsContext } from "../contexts/products";

export const FilterActionsContext = createContext({});

const FilterActionsProvider = ({children, category}) => {

    const { listProducts } = useContext(ProductsContext);

    const ref = useRef(null);

    const [filtredSizes, setFiltredSizes] = useState([]);
    const [filtredColors, setFiltredColors] = useState([]);
    const [filtredBrands, setFiltredBrands] = useState([]);
    const [filtredPriceRange, setFiltredPriceRange] = useState([]);
    const [filterDiscounts, setFilterDiscounts] = useState([]);

    const [sortBy, setSortBy] = useState('Popular');

    const [productsCategoryFiltred, setProductsCategoryFiltred] = useState([]);
    const [productsToShow, setProductsToShow] = useState([]);
    const [totalProducts, setTotalProducts] = useState();

    const [productsPerPage, setProductsPerPage] = useState(9);
    const [currentPage, setCurrentPage] = useState(1);
    const [startIndex, setStartIndex] = useState((currentPage - 1) * productsPerPage);
    const [totalPages, setTotalPages] = useState();
    const [endIndex, setEndIndex] = useState();
    const [currentProducts, setCurrentProducts] = useState([]);

    useEffect(() => {
        if(listProducts){
          const list = listProducts.filter((product) => {return product.category.indexOf(category) !== -1});
          setTotalProducts(list.length);
          setProductsCategoryFiltred(list);
          setProductsToShow(list)
        }
    }, [listProducts, category]);

    useEffect(() => {
        switch (sortBy) {
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
    }, [sortBy, productsToShow, currentProducts]);

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
        setTotalProducts(newFilteredProducts.length)
    }, [filtredColors, filtredBrands, filtredSizes, filtredPriceRange, filterDiscounts]);

    useEffect(() => {
        if(productsPerPage > 0){
            setTotalPages(Math.ceil(productsToShow.length / productsPerPage));
        }
    }, [productsToShow, productsPerPage]);

    useEffect(() => {
        setStartIndex((currentPage - 1) * productsPerPage);
        setEndIndex(startIndex + productsPerPage);
    }, [productsToShow, currentPage, startIndex, productsPerPage]);

    useEffect(() => {
        setCurrentProducts(productsToShow.slice(startIndex, endIndex))
    }, [productsToShow, startIndex, endIndex, sortBy]);

    function handlePageChange(newPage) {
        setCurrentPage(newPage);
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    function handleClearAllFilters() {
        setFiltredSizes([]);
        setFiltredColors([]);
        setFiltredBrands([]);
        setFiltredPriceRange([]);
        setFilterDiscounts([]);
    };

    return (
        <FilterActionsContext.Provider 
            value={{
                filtredSizes,
                setFiltredSizes,
                filtredColors,
                setFiltredColors,
                filtredBrands,
                setFiltredBrands,
                filtredPriceRange,
                setFiltredPriceRange,
                filterDiscounts,
                setFilterDiscounts,
                handleClearAllFilters,
                sortBy,
                setSortBy,
                productsToShow,
                totalProducts,
                productsPerPage,
                setProductsPerPage,
                currentPage,
                startIndex,
                totalPages,
                currentProducts, 
                handlePageChange,
                ref
            }}
        >
            {children}
        </FilterActionsContext.Provider>
        
      )
    }
    
export default FilterActionsProvider;