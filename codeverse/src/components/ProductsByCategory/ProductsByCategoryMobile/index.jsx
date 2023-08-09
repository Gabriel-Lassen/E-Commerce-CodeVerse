import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import styles from './styles.module.scss';

import ShowProductsMobile from "../../../components/ShowProductsMobile";
import MobileFixedBottomBar from "../../../components/MobileFixedBottomBar";
import BtnTransparent from "../../../components/BtnTransparent";
import ModalBottomMobile from "../../../components/ModalBottomMobile/indes";
import ProductsSortByMobile from "../../ProductsSortByMobile";
import ProductsFilterMobile from "../../ProductsFilterMobile";

import Sort from '../../../assets/imgs/sort.svg';
import Filter from '../../../assets/imgs/filter.svg';
import Chevron from '../../../assets/imgs/chevron-left.png';
import Wishlist from '../../../assets/imgs/fav.svg';
import Search from '../../../assets/imgs/search.svg';
import Bag from '../../../assets/imgs/bag.svg';

const ProductsByCategoyMobile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [category, setCategory] = useState();
    const [categoryCapitalized, setCategoryCapitalized] = useState();
    const [showSortBy, setShowSortBy] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
  
    useEffect(() => {
      const categoryUrl = window.location.pathname.split("/categories/").pop();
      const capitalized = categoryUrl[0].toUpperCase() + categoryUrl.substr(1);
      setCategoryCapitalized(capitalized)
      setCategory(categoryUrl)
    }, [location]);

  return (
    <div className={styles.wrapper}>
        <div className={styles.topBar}>
          <div className={styles.title}>
            <button onClick={() => navigate(-1)}><img src={Chevron} alt="Back page" /></button>
            <h1>{categoryCapitalized}</h1>
          </div>
          <div className={styles.actions}>
            <button onClick={() => navigate('/profile/mywishlist')}><img src={Wishlist} alt="My Wishlist" /></button>
            <button><img src={Search} alt="" /></button>
            <button onClick={() => navigate('/mycart')}><img src={Bag} alt="My Cart" /></button>
          </div>
        </div>
      <div className={styles.products}>
        <ShowProductsMobile category={category} />
      </div>
      <MobileFixedBottomBar>
        <div className={styles.btns}>
          <BtnTransparent icon={Sort} text='Sort' onClick={() => setShowSortBy(true)}/>
          <BtnTransparent icon={Filter} text='Filter' onClick={() => setShowFilter(true)}/>
        </div>
      </MobileFixedBottomBar>
      {showSortBy &&
        <ModalBottomMobile title='Sort by' setShowModal={setShowSortBy}>
          <div className={styles.sortBy}>
            <ProductsSortByMobile />
          </div>
        </ModalBottomMobile>
      }
      {showFilter &&
        <ProductsFilterMobile setShowModal={setShowFilter}/>
      }
    </div>
  )
}

export default ProductsByCategoyMobile