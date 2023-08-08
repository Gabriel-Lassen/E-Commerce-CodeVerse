import { useContext } from "react";
import { ProductsContext } from "../../../contexts/products";
import { FilterActionsContext } from "../../../contexts/filterActions";

import styles from './styles.module.scss';

import Checkbox from '../../../assets/imgs/checkbox.svg';
import CheckboxActive from '../../../assets/imgs/checkbox-active.svg';

const FilterBrands = () => {
  const { listBrands } = useContext(ProductsContext);
  const {filtredBrands, setFiltredBrands} = useContext(FilterActionsContext);

  function handleClick(brand){
    if(filtredBrands.includes(brand)){
      setFiltredBrands(filtredBrands.filter((b) => b !== brand))
    } else {
      setFiltredBrands([...filtredBrands, brand])
    }
  }

  return (
    <div className={styles.wrapper}>
      {listBrands && 
        listBrands.map((brand) => {
          return (
            <div onClick={() => handleClick(brand)} key={brand} className={styles.option}>
              <img src={filtredBrands.includes(brand) ? CheckboxActive : Checkbox} alt="Select" />
              <span>{brand}</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default FilterBrands