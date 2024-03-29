import styles from './styles.module.scss';
import Bag from '../../assets/imgs/bag.svg';
import BagWhite from '../../assets/imgs/bag-white.svg';
import CloseWhite from '../../assets/imgs/remove.svg';
import Close from '../../assets/imgs/close.svg';
import { useContext, useEffect, useState } from 'react';
import { BagActionsContext } from '../../contexts/bagActions';
import { AuthContext } from '../../contexts/Auth';

const BtnAddToBag = ({theme, id}) => {
  const { user } = useContext(AuthContext);
  const { handleaddToUserBag, handleDeleteOneProductUserBag, userBag } = useContext(BagActionsContext)
  const [themeClassName, setThemeClassName] = useState(theme === 'light' ? 'light' : 'dark');
  const [imageBag, setImageBag] = useState(theme === 'light' ? Bag : BagWhite);
  const [imageClose, setImageClose] = useState(theme === 'light' ? Close : CloseWhite);
  const [isInBag, setIsinBag] = useState(userBag.some(bag => bag.productId === id));

  useEffect(() => {
    setIsinBag(userBag.some(bag => bag.productId === id));
  }, [id, userBag]);

  function handleClick(){
    if(userBag.some(bag => bag.productId === id)){
      handleDeleteOneProductUserBag(id);
      if(user) {
        setIsinBag(false);
      }
    } else {
      handleaddToUserBag(id);
      if(user) {
        setIsinBag(true);
      }
    }
  };
    
  return (
    <button className={`${styles.addBagBtn} ${styles[themeClassName]}`} onClick={handleClick}>
        {isInBag ?
          <img src={imageClose} alt="Remove from Bag" />
          :
          <img src={imageBag} alt="Add to Bag" />
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