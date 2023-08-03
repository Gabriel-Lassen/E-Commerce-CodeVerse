import styles from './styles.module.scss'
import BtnBackForPage from "../BtnBackForPage";
import ArrowSvg from "../ArrowSvg";
import bag from '../../assets/imgs/bagNotFound.png'

const MyBagFound = () => {
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
            <button>Continue Shopping</button>
        </div>
    </div>
  )
}

export default MyBagFound