import { useContext } from "react";

import styles from '../stylesFilters.module.scss';

import Checkbox from '../../../assets/imgs/checkbox.svg';
import CheckboxActive from '../../../assets/imgs/checkbox-active.svg';
import { FilterActionsContext } from "../../../contexts/filterActions";

const FilterSizes = () => {
    const { filtredSizes, setFiltredSizes} = useContext(FilterActionsContext);

    function handleClick(sizeSelected){
        if(filtredSizes.includes(sizeSelected)){
            setFiltredSizes(filtredSizes.filter((size) => size !== sizeSelected));
        } else {
            setFiltredSizes([...filtredSizes, sizeSelected]);
        }
    }
    
  return (
    <div className={styles.wrapper}>
        <button onClick={() => handleClick('Small')} className={styles.option}>
            <img src={filtredSizes.includes('Small') ? CheckboxActive : Checkbox} alt="Select" />
            <span>Small</span>
        </button>
        <button onClick={() => handleClick('Medium')} className={styles.option}>
            <img src={filtredSizes.includes('Medium') ? CheckboxActive : Checkbox} alt="Select" />
            <span>Medium</span>
        </button>
        <button onClick={() => handleClick('Big')} className={styles.option}>
            <img src={filtredSizes.includes('Big') ? CheckboxActive : Checkbox} alt="Select" />
            <span>Big</span>
        </button>
    </div>
  )
}

export default FilterSizes