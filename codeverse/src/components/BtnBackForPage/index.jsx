import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss'

const BtnBackForPage = ({ text, svg, secondSvg }) => {

    const navigate = useNavigate();
    
    const handleBackPage = () => {
        navigate(-1);
    };
    
return (
    <button className={styles.btn} onClick={handleBackPage}>
      <div className={styles.svg}>{svg}</div>

      <div className={styles.boxRight}>
        <span>{text}</span>
        <img src={secondSvg} alt="" />
      </div>  
    </button>
  );
};

export default BtnBackForPage