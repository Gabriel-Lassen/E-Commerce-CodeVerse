import styles from './styles.module.scss';
import ChevronUp from '../../assets/imgs/chevron-up.svg';
import ChevronBottom from '../../assets/imgs/chevron-bottom.svg';
import { useEffect, useState } from 'react';

import Plus from '../../assets/imgs/plus.svg';
import Minus from '../../assets/imgs/minus.svg';

const DropdowBtn = ({children, title, divisor, footer, iconType}) => {
    const [show, setShow] = useState(false);
    const [image, setImage] = useState();

    useEffect(() => {
        if(iconType === 'Plus'){
            setImage(Plus);
        } else {
            setImage(ChevronBottom);
        }
    }, [])

    function handleClick(){
      if(show){
          setShow(false)
          if(iconType === 'Plus'){
              setImage(Plus);
          } else {
              setImage(ChevronBottom);
          }
      } else {
          setShow(true)
          if(iconType === 'Plus'){
              setImage(Minus);
          } else {
              setImage(ChevronUp);
          }
      }
  }

  const contentFooter = footer === "footer"; 
  return (
    <div className={styles.wrapper}>
        <button onClick={handleClick} className={styles.button}>
            <span className={contentFooter ? styles.textFooter : ''}>{title}</span>
            <img src={image} alt="Dropdow Button" />
        </button>
        {show && (
            <div className={contentFooter ? styles.footer : styles.content}>
              {divisor && <div className={styles.separator}></div>}
              {children}
            </div>
        )}
    </div>
  );
};

export default DropdowBtn;
