import { useContext } from 'react';
import { FilterActionsContext } from '../../contexts/filterActions';

import styles from  './styles.module.scss';

import Active from '../../assets/imgs/radio-active.svg';
import Inactive from '../../assets/imgs/inactive.svg';

const ProductsSortByMobile = () => {
    const {SortBy, setSortBy} = useContext(FilterActionsContext);
  return (
    <div className={styles.wrapper}>
        <div className={styles.option} onClick={() => setSortBy('Popular')}>
            <img src={SortBy === 'Popular' ? Active : Inactive} alt="Select" />
            <span>Popular Products</span>
        </div>
        <div className={styles.option} onClick={() => setSortBy('Relevance')}>
            <img src={SortBy === 'Relevance' ? Active : Inactive} alt="Select" />
            <span>Relevance</span>
        </div>
        <div className={styles.option} onClick={() => setSortBy('New')}>
            <img src={SortBy === 'New' ? Active : Inactive} alt="Select" />
            <span>What's New</span>
        </div>
        <div className={styles.option} onClick={() => setSortBy('PriceLowToHigh')}>
            <img src={SortBy === 'PriceLowToHigh' ? Active : Inactive} alt="Select" />
            <span>Price- Low to High</span>
        </div>
        <div className={styles.option} onClick={() => setSortBy('PriceHighToLow')}>
            <img src={SortBy === 'PriceHighToLow' ? Active : Inactive} alt="Select" />
            <span>Price- High to Low</span>
        </div>
        <div className={styles.option} onClick={() => setSortBy('OnSale')}>
            <img src={SortBy === 'OnSale' ? Active : Inactive} alt="Select" />
            <span>On Sale</span>
        </div>
    </div>
  )
}

export default ProductsSortByMobile