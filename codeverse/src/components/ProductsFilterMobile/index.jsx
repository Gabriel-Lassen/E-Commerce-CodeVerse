import styles from './styles.module.scss';

import MobileFixedBottomBar from '../MobileFixedBottomBar';
import FilterBrands from '../ProductsFilterComponents/FilterBrands';
import FilterColors from '../ProductsFilterComponents/FilterColors';
import FilterSizes from '../ProductsFilterComponents/FilterSizes';

import Close from '../../assets/imgs/close.svg';
import { useState } from 'react';
import BtnGeneric from '../BtnGeneric';

const ProductsFilterMobile = ({setShowModal}) => {
  const [filterToShow, setFilterToShow] = useState('Size');

  return (
    <div className={styles.filterModal}>
      <div className={styles.topBar}>
        <span>Filter</span>
        <img src={Close} alt="Close" onClick={() => setShowModal(false)}/>
      </div>
      <div className={styles.display}>
        <div className={styles.btnsOptions}>
          <button onClick={() => setFilterToShow('Size')} style={filterToShow === 'Size' ? {backgroundColor: 'var(--Bright)'} : {}}>Size</button>
          <button onClick={() => setFilterToShow('Color')} style={filterToShow === 'Color' ? {backgroundColor: 'var(--Bright)'} : {}}>Color</button>
          <button onClick={() => setFilterToShow('Brand')} style={filterToShow === 'Brand' ? {backgroundColor: 'var(--Bright)'} : {}}>Brand</button>
          <button onClick={() => setFilterToShow('Price')} style={filterToShow === 'Price' ? {backgroundColor: 'var(--Bright)'} : {}}>Price Range</button>
          <button onClick={() => setFilterToShow('Discount')} style={filterToShow === 'Discount' ? {backgroundColor: 'var(--Bright)'} : {}}>Discount</button>
        </div>
        <div className={styles.showFilters}>
          { filterToShow === 'Size' &&
            <FilterSizes />
          }
          { filterToShow === 'Color' &&
            <FilterColors />
          }
          { filterToShow === 'Brand' &&
            <FilterBrands />
          }
        </div>
      </div>
      <MobileFixedBottomBar>
        <div className={styles.btns}>
          <BtnGeneric theme='light' text='Clear All' />
          <BtnGeneric theme='dark' text='Apply' />
        </div>
      </MobileFixedBottomBar>
    </div>
  )
}

export default ProductsFilterMobile