import { useContext, useEffect, useState } from 'react';
import { FilterActionsContext } from '../../contexts/filterActions';

import styles from  './styles.module.scss';

import ChevronBottom from '../../assets/imgs/chevron-bottom.svg';
import ChevronUp from '../../assets/imgs/chevron-up.svg';

const ProductsSortByDesktop = () => {
    const {SortBy, setSortBy} = useContext(FilterActionsContext);
    const [sortMethod, setSortMethod] = useState('');
    const [showMethods, setShowMethods] = useState(false);

    useEffect(() => {
        switch(SortBy){
            case 'Popular':
                setSortMethod("Popular Products");
                break;
            case 'Relevance':
                setSortMethod("Relevance");
                break;
            case 'New':
                setSortMethod("What's New");
                break;
            case 'PriceLowToHigh':
                setSortMethod("Price- Low to High");
                break;
            case 'PriceHighToLow':
                setSortMethod("Price- High to Low");
                break;
            case 'OnSale':
                setSortMethod("On Sale");
                break;
            default: setSortMethod('Popular');
        }
    }, [SortBy]);

    function handleClick(method) {
        setSortBy(method);
        setShowMethods(false);
    }

  return (
    <div className={styles.wrapper}>
        <div className={styles.button}>
            <span>Sort By</span>
            <div className={styles.input}>
                <span>{sortMethod}</span>
                <button onClick={() => setShowMethods(!showMethods)}>
                    <img src={showMethods ? ChevronBottom : ChevronUp} alt="" />
                </button>
            </div>
        </div>
        <div>
        {showMethods &&
            <div className={styles.options}>
                <button onClick={() => handleClick('Popular')}>Popular Products</button>
                <button onClick={() => handleClick('Relevance')}>Relevance</button>
                <button onClick={() => handleClick('New')}>What's New</button>
                <button onClick={() => handleClick('PriceLowToHigh')}>Price- Low to High</button>
                <button onClick={() => handleClick('PriceHighToLow')}>Price- High to Low</button>
                <button onClick={() => handleClick('OnSale')}>On Sale</button>
            </div>
        }
        </div>
    </div>
  )
}

export default ProductsSortByDesktop