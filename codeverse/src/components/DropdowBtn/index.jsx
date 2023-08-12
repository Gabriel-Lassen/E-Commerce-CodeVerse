import styles from "./styles.module.scss";
import ChevronUp from "../../assets/imgs/chevron-up.svg";
import ChevronBottom from "../../assets/imgs/chevron-bottom.svg";
import { useState } from "react";

const DropdowBtn = ({ children, title, divisor, footer }) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(ChevronBottom);

  function handleClick() {
    if (show) {
      setShow(false);
      setImage(ChevronBottom);
    } else {
      setShow(true);
      setImage(ChevronUp);
    }
  }

  const contentFooter = footer === "footer"; 
  return (
    <div className={styles.wrapper}>
      <button onClick={handleClick}>
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
