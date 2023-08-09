import { useContext } from "react";
import { FilterActionsContext } from "../../../contexts/filterActions";

import styles from '../stylesFilters.module.scss';

import Checkbox from '../../../assets/imgs/checkbox.svg';
import CheckboxActive from '../../../assets/imgs/checkbox-active.svg';

const FilterDiscounts = () => {
    const {filterDiscounts, setFilterDiscounts} = useContext(FilterActionsContext);

    function handleClick(priceRange){
        if(filterDiscounts.includes(priceRange)){
            setFilterDiscounts(filterDiscounts.filter((p) => p !== priceRange));
        } else {
            setFilterDiscounts([...filterDiscounts, priceRange]);
        }
    }

  return (
    <div className={styles.wrapper}>
        <button onClick={() => handleClick('10-25')} className={styles.option}>
            <img src={filterDiscounts.includes('10-25') ? CheckboxActive : Checkbox} alt="Select" />
            <span>10% - 25%</span>
        </button>
        <button onClick={() => handleClick('25-50')} className={styles.option}>
            <img src={filterDiscounts.includes('25-50') ? CheckboxActive : Checkbox} alt="Select" />
            <span>25% - 50%</span>
        </button>
        <button onClick={() => handleClick('>50')} className={styles.option}>
            <img src={filterDiscounts.includes('>50') ? CheckboxActive : Checkbox} alt="Select" />
            <span>Above 50%</span>
        </button>
    </div>
  )
}

export default FilterDiscounts