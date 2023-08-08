import { useContext, useState } from "react";
import { ProductsContext } from "../../../contexts/products";

import styles from './styles.module.scss';

import Checkbox from '../../../assets/imgs/checkbox.svg';
import CheckboxActive from '../../../assets/imgs/checkbox-active.svg';

const FilterColors = () => {
    const { listColors } = useContext(ProductsContext);
    const [filtredColors, setFiltredColors] = useState([]);

    function handleClick(color){
    if(filtredColors.includes(color)){
        setFiltredColors(filtredColors.filter((color) => color !== color))
    } else {
        setFiltredColors([...filtredColors, color])
    }

  }
  return (
    <div className={styles.wrapper}>
      {listColors && 
        listColors.map((color) => {
          return (
            <div onClick={() => handleClick(color)} key={color} className={styles.option}>
              <img src={filtredColors.includes(color) ? CheckboxActive : Checkbox} alt="Select" />
              <span>{color}</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default FilterColors