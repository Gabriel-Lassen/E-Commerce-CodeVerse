import styles from './styles.module.scss';
import ChevronUp from '../../assets/imgs/chevron-up.svg';
import ChevronBottom from '../../assets/imgs/chevron-bottom.svg';
import { useState } from 'react';

const DropdowBtn = ({children, title}) => {
    const [show, setShow] = useState(false);
    const [image, setImage] = useState(ChevronBottom)

    function handleClick(){
        if(show){
            setShow(false)
            setImage(ChevronBottom)
        } else {
            setShow(true)
            setImage(ChevronUp)
        }
    }
  return (
    <div className={styles.wrapper}>
        <button onClick={handleClick}>
            <h3>{title}</h3>
            <img src={image} alt="Dropdow Button" />
        </button>
        {show &&
            <div className={styles.content}>
                {children}
            </div>
        }
    </div>
  )
}

export default DropdowBtn