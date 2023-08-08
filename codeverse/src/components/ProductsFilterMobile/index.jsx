import { useContext, useState } from 'react';
import { FilterActionsContext } from '../../contexts/filterActions';

import styles from './styles.module.scss';

import MobileFixedBottomBar from '../MobileFixedBottomBar';
import FilterBrands from '../ProductsFilterComponents/FilterBrands';
import FilterColors from '../ProductsFilterComponents/FilterColors';
import FilterSizes from '../ProductsFilterComponents/FilterSizes';
import BtnGeneric from '../BtnGeneric';

import Close from '../../assets/imgs/close.svg';

const ProductsFilterMobile = ({setShowModal}) => {
  const [filterToShow, setFilterToShow] = useState('Size');
  const { handleClearAllFilters } = useContext(FilterActionsContext);

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
          <BtnGeneric theme='light' text='Clear All' onClick={handleClearAllFilters} />
          <BtnGeneric theme='dark' text='Apply' onClick={() => setShowModal(false)}/>
        </div>
      </MobileFixedBottomBar>
    </div>
  )
}

export default ProductsFilterMobile