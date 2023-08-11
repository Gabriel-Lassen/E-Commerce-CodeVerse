import { useContext, useEffect } from "react";
import { ProductsContext } from "../../../contexts/products";
import { FilterActionsContext } from "../../../contexts/filterActions";

import styles from '../stylesFilters.module.scss';

import Checkbox from '../../../assets/imgs/checkbox.svg';
import CheckboxActive from '../../../assets/imgs/checkbox-active.svg';

const FilterColors = () => {
    const { listColors } = useContext(ProductsContext);
    const {filtredColors, setFiltredColors} = useContext(FilterActionsContext);

    useEffect(() => {
      console.log(filtredColors);
    }, [filtredColors])

    function handleClick(selectedColor){
    if(filtredColors.includes(selectedColor)){
        setFiltredColors(filtredColors.filter((color) => color !== selectedColor))
    } else {
        setFiltredColors([...filtredColors, selectedColor])
    }

  }
  return (
    <div className={styles.wrapper}>
      {listColors && 
        listColors.map((color) => {
          return (
            <button onClick={() => handleClick(color)} key={color} className={styles.option}>
              <img src={filtredColors.includes(color) ? CheckboxActive : Checkbox} alt="Select" />
              <span>{color}</span>
            </button>
          )
        })
      }
    </div>
  )
}

export default FilterColors