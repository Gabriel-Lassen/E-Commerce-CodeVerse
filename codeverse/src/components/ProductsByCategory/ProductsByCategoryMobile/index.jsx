import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './styles.module.scss';

import BtnBackForPage from "../../../components/BtnBackForPage";
import ShowProducts from "../../../components/ShowProducts";
import ArrowSvg from "../../../components/ArrowSvg";
import MobileFixedBottomBar from "../../../components/MobileFixedBottomBar";
import BtnTransparent from "../../../components/BtnTransparent";

import Sort from '../../../assets/imgs/sort.svg';
import Filter from '../../../assets/imgs/filter.svg';
import ModalBottomMobile from "../../../components/ModalBottomMobile/indes";
import SortBySelect from "../../../components/SortBySelect";

const ProductsByCategoyMobile = () => {
    const location = useLocation();
    const [category, setCategory] = useState();
    const [categoryCapitalized, setCategoryCapitalized] = useState();
    const [showSortBy, setShowSortBy] = useState(false);
  
    useEffect(() => {
      const categoryUrl = window.location.pathname.split("/categories/").pop();
      const capitalized = categoryUrl[0].toUpperCase() + categoryUrl.substr(1);
      setCategoryCapitalized(capitalized)
      setCategory(categoryUrl)
    }, [location])

  return (
    <div>
        <BtnBackForPage svg={<ArrowSvg direction='left' color='var(--Primary)' />} text={categoryCapitalized} />
      <div className={styles.products}>
        <ShowProducts category={category} />
      </div>
      <MobileFixedBottomBar>
        <div className={styles.btns}>
          <BtnTransparent icon={Sort} text='Sort' onClick={() => setShowSortBy(true)}/>
          <BtnTransparent icon={Filter} text='Filter' onClick={() => console.log('oi')}/>
        </div>
      </MobileFixedBottomBar>
      {showSortBy &&
        <ModalBottomMobile title='Sort by' setShowModal={setShowSortBy}>
          <div className={styles.sortBy}>
            <SortBySelect />
          </div>
        </ModalBottomMobile>
      }
    </div>
  )
}

export default ProductsByCategoyMobile