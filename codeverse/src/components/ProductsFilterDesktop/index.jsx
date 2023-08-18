import DropdowBtn from '../DropdowBtn';
import FilterSizes from '../ProductsFilterComponents/FilterSizes';
import FilterColors from '../ProductsFilterComponents/FilterColors';
import FilterBrands from '../ProductsFilterComponents/FilterBrands';
import FilterPriceRange from '../ProductsFilterComponents/FilterPriceRange';
import FilterDiscounts from '../ProductsFilterComponents/FilterDiscounts';

import styles from './styles.module.scss';

const ProductsFilterDesktop = () => {
  return (
    <div className={styles.sideBar}>
        <DropdowBtn title='Size' iconType='Plus'>
            <FilterSizes />
        </DropdowBtn>
        <DropdowBtn title='Color' iconType='Plus'>
            <FilterColors />
        </DropdowBtn>
        <DropdowBtn title='Brand' iconType='Plus'>
            <FilterBrands />
        </DropdowBtn>
        <DropdowBtn title='Price Range' iconType='Plus'>
            <FilterPriceRange />
        </DropdowBtn>
        <DropdowBtn title='Discount' iconType='Plus'>
            <FilterDiscounts />
        </DropdowBtn>
    </div>
  )
}

export default ProductsFilterDesktop