import styles from './styles.module.scss';
import Bag from '../../assets/imgs/bag.svg';
import BagWhite from '../../assets/imgs/bag-white.svg';
import { useState } from 'react';

const BtnAddToBag = ({theme}) => {
    const [themeClassName, setThemeClassName] = useState(theme === 'light' ? 'light' : 'dark');
    const [image, setImage] = useState(theme === 'light' ? Bag : BagWhite);
    
  return (
    <button className={`${styles.addBagBtn} ${styles[themeClassName]}`}>
        <img src={image} alt="Add to Bag" />
        <span>Add to bag</span>
    </button>
  )
}

export default BtnAddToBag