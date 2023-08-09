
import Header from '../../header';

import HeroBanner from '../../../assets/imgs/heroBannerCategories.jpg';

import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DropdowBtn from '../../DropdowBtn';
import FilterSizes from '../../ProductsFilterComponents/FilterSizes';
import FilterColors from '../../ProductsFilterComponents/FilterColors';
import FilterBrands from '../../ProductsFilterComponents/FilterBrands';
import FilterPriceRange from '../../ProductsFilterComponents/FilterPriceRange';
import FilterDiscounts from '../../ProductsFilterComponents/FilterDiscounts';
import Footer from '../../footer';

import Chevron from '../../../assets/imgs/chevron-right-small.svg'

const ProductsByCategoyDesktop = () => {

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
        <h1 className={styles.h1}>{category}</h1>
        <div className={styles.display}>
            <div className={styles.sideBar}>
                <DropdowBtn title='Size'>
                    <FilterSizes />
                </DropdowBtn>
                <DropdowBtn title='Color'>
                    <FilterColors />
                </DropdowBtn>
                <DropdowBtn title='Brand'>
                    <FilterBrands />
                </DropdowBtn>
                <DropdowBtn title='Price Range'>
                    <FilterPriceRange />
                </DropdowBtn>
                <DropdowBtn title='Discount'>
                    <FilterDiscounts />
                </DropdowBtn>
            </div>
            <div>
                
            </div>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default ProductsByCategoyDesktop