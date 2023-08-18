import { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { FilterActionsContext } from '../../../contexts/filterActions';

import Header from '../../header';
import Footer from '../../footer';
import ShowProductsDesktop from '../../ShowProductsDesktop';
import ProductsFilterDesktop from '../../ProductsFilterDesktop';
import ProductsSortByDesktop from '../../ProductsSortByDesktop';

import styles from './styles.module.scss';

import HeroBanner from '../../../assets/imgs/heroBannerCategories.jpg';
import Chevron from '../../../assets/imgs/chevron-right-small.svg'
import ShowLayout from '../../../assets/imgs/showlayout.svg';

const ProductsByCategoyDesktop = () => {

    const { totalProducts, productsPerPage, setProductsPerPage, currentPage, startIndex, ref} = useContext(FilterActionsContext);

    const location = useLocation();
    const navigate = useNavigate();

    const [category, setCategory] = useState('');

    useEffect(() => {
        const category = window.location.pathname.split("/categories/").pop();
        const capitalized = category[0].toUpperCase() + category.substr(1);
        setCategory(capitalized);
    }, [location])

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.heroBanner}>
                <img src={HeroBanner} />
            </div>
            <div className={styles.history}>
                <span onClick={() => navigate('/')}>Home</span>
                <img src={Chevron} alt="" />
                <span>{category}</span>
            </div>
            <h1 className={styles.h1} ref={ref}>{category}</h1>
            <div className={styles.display}>
                <ProductsFilterDesktop />
                <div className={styles.bar}>
                    <div className={styles.displayOptions}>
                        <div className={styles.showing}>
                            <img src={ShowLayout} alt="" />
                            <span>Showing {startIndex + 1} - {productsPerPage * currentPage > totalProducts ? totalProducts : productsPerPage * currentPage} of {totalProducts} items</span>
                        </div>
                        <div className={styles.buttons}>
                            <div className={styles.toShow}>
                                <span>To Show:</span>
                                <div>
                                    <input type="number" value={productsPerPage} onChange={(e) => e.target.value === '' ? setProductsPerPage('') : setProductsPerPage(parseInt(e.target.value))}/>
                                </div>
                            </div>
                            <ProductsSortByDesktop  />
                        </div>
                    </div>
                    <ShowProductsDesktop />
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default ProductsByCategoyDesktop