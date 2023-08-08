import { useState } from "react";

import styles from './styles.module.scss';

import Checkbox from '../../../assets/imgs/checkbox.svg';
import CheckboxActive from '../../../assets/imgs/checkbox-active.svg';

const FilterSizes = () => {
    const [filtredSizes, setFiltredSizes] = useState([]);

    function handleClick(size){
        if(filtredSizes.includes(size)){
            setFiltredSizes(filtredSizes.filter((s) => s !== size))
        } else {
            setFiltredSizes([...filtredSizes, size])
        }
    }
    
  return (
    <div className={styles.wrapper}>
        <div onClick={() => handleClick('Small')} className={styles.option}>
            <img src={filtredSizes.includes('Small') ? CheckboxActive : Checkbox} alt="Select" />
            <span>Small</span>
        </div>
        <div onClick={() => handleClick('Medium')} className={styles.option}>
            <img src={filtredSizes.includes('Medium') ? CheckboxActive : Checkbox} alt="Select" />
            <span>Medium</span>
        </div>
        <div onClick={() => handleClick('Big')} className={styles.option}>
            <img src={filtredSizes.includes('Big') ? CheckboxActive : Checkbox} alt="Select" />
            <span>Big</span>
        </div>
    </div>
  )
}

export default FilterSizes