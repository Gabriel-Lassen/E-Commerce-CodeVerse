import { useContext } from "react";
import { FilterActionsContext } from "../../../contexts/filterActions";

import styles from '../stylesFilters.module.scss';

import Checkbox from '../../../assets/imgs/checkbox.svg';
import CheckboxActive from '../../../assets/imgs/checkbox-active.svg';

const FilterPriceRange = () => {
    const {filtredPriceRange, setFiltredPriceRange} = useContext(FilterActionsContext);

    function handleClick(priceRangeSelected){
        if(filtredPriceRange.includes(priceRangeSelected)){
            setFiltredPriceRange(filtredPriceRange.filter((priceRange) => priceRange !== priceRangeSelected));
        } else {
            setFiltredPriceRange([...filtredPriceRange, priceRangeSelected]);
        }
    }

  return (
    <div className={styles.wrapper}>
        <button onClick={() => handleClick('<50')} className={styles.option}>
            <img src={filtredPriceRange.includes('<50') ? CheckboxActive : Checkbox} alt="Select" />
            <span>Up to R$50</span>
        </button>
        <button onClick={() => handleClick('51-100')} className={styles.option}>
            <img src={filtredPriceRange.includes('51-100') ? CheckboxActive : Checkbox} alt="Select" />
            <span>$51 - $100</span>
        </button>
        <button onClick={() => handleClick('101-150')} className={styles.option}>
            <img src={filtredPriceRange.includes('101-150') ? CheckboxActive : Checkbox} alt="Select" />
            <span>$101 - $150</span>
        </button>
        <button onClick={() => handleClick('151-200')} className={styles.option}>
            <img src={filtredPriceRange.includes('151-200') ? CheckboxActive : Checkbox} alt="Select" />
            <span>$151 - $200</span>
        </button>
        <button onClick={() => handleClick('>200')} className={styles.option}>
            <img src={filtredPriceRange.includes('>200') ? CheckboxActive : Checkbox} alt="Select" />
            <span>More than $200</span>
        </button>
    </div>
  )
}

export default FilterPriceRange