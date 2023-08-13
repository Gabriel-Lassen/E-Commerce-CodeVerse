import styles from './styles.module.scss'
import BtnBackForPage from "../BtnBackForPage";
import ArrowSvg from "../ArrowSvg";
import bag from '../../assets/imgs/bagNotFound.png'
import MobileFixedBottomBar from '../MobileFixedBottomBar';
import BtnGeneric from '../BtnGeneric';
import { useNavigate } from 'react-router-dom';

const MyBagFound = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
        <BtnBackForPage
        svg={<ArrowSvg color="var(--Primary)" direction="left" />}
        text="My Bag" 
        />
        <div className={styles.section}>
            <img src={bag} alt="" />
            <h2>Uh Oh....!</h2>
            <p>You haven’t added any any items. Start shopping to make your bag bloom</p>
            <div className={styles.btnDesktop}>
              <BtnGeneric theme='dark' text='Continue shopping' onClick={() => navigate('/')} />
            </div>
        </div>
        <MobileFixedBottomBar>
          <div className={styles.btnWrapper}>
            <BtnGeneric theme='dark' text='Continue shopping' onClick={() => navigate('/')} />
          </div>
        </MobileFixedBottomBar>
    </div>
  )
}

export default MyBagFound