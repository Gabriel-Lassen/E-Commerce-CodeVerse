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
  )
}

export default ProductsFilterDesktop