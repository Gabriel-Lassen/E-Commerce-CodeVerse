import styles from './styles.module.scss';
import Bag from '../../assets/imgs/bag.svg';
import BagWhite from '../../assets/imgs/bag-white.svg';
import Close from '../../assets/imgs/remove.svg';
import { useContext, useEffect, useState } from 'react';
import { BagActionsContext } from '../../contexts/bagActions';

const BtnAddToBag = ({theme, id}) => {
  const { handleaddToUserBag, handleDeleteOneProductUserBag, userBag } = useContext(BagActionsContext)
  const [themeClassName, setThemeClassName] = useState(theme === 'light' ? 'light' : 'dark');
  const [image, setImage] = useState(theme === 'light' ? Bag : BagWhite);
  const [isInBag, setIsinBag] = useState(userBag.some(bag => bag.productId === id));

  useEffect(() => {
    setIsinBag(userBag.some(bag => bag.productId === id));
  }, [id, userBag]);

  function handleClick(){
    if(userBag.some(bag => bag.productId === id)){
      handleDeleteOneProductUserBag(id);
      setIsinBag(false);
    } else {
      handleaddToUserBag(id);
      setIsinBag(true);
    }
  };
    
  return (
    <button className={`${styles.addBagBtn} ${styles[themeClassName]}`} onClick={handleClick}>
        {isInBag ?
          <img src={Close} alt="Remove from Bag" />
          :
          <img src={image} alt="Add to Bag" />
        }
        {isInBag ?
          <span>Remove from bag</span>
          :
          <span>Add to bag</span>
        }
    </button>
  )
}

export default BtnAddToBag