import { useState } from 'react';

import styles from  './styles.module.scss';

import Active from '../../assets/imgs/radio-active.svg';
import Inactive from '../../assets/imgs/inactive.svg';

const SortBySelect = () => {
    const [SortBy, setSortBy] = useState('Popular');
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
        <div className={styles.option} onClick={() => setSortBy('Low to High')}>
            <img src={SortBy === 'Low to High' ? Active : Inactive} alt="Select" />
            <span>Price- Low to High</span>
        </div>
        <div className={styles.option} onClick={() => setSortBy('High to Low')}>
            <img src={SortBy === 'High to Low' ? Active : Inactive} alt="Select" />
            <span>Price- High to Low</span>
        </div>
        <div className={styles.option} onClick={() => setSortBy('Sale')}>
            <img src={SortBy === 'Sale' ? Active : Inactive} alt="Select" />
            <span>On Sale</span>
        </div>
    </div>
  )
}

export default SortBySelect