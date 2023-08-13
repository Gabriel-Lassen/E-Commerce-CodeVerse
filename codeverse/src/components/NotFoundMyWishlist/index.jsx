import styles from "./styles.module.scss";
import BtnBackForPage from "../BtnBackForPage";
import ArrowSvg from "../ArrowSvg";
import imgWishlist from "../../assets/imgs/imgWishlist.png";
import MobileFixedBottomBar from '../MobileFixedBottomBar';
import BtnGeneric from '../BtnGeneric';
import { useNavigate } from 'react-router-dom';


const MyWishlistNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <BtnBackForPage
        svg={<ArrowSvg color="var(--Primary)" direction="left" />}
        text="My Wishlist"
      />
      <div className={styles.section}>
        <img src={imgWishlist} />
        <div>
          <h2>Well...</h2>
          <p>It seems you have not added any products to for wishlist. </p>
        </div>
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
  );
};

export default MyWishlistNotFound;
