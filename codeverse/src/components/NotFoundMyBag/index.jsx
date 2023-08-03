import styles from './styles.module.scss'
import BtnBackForPage from "../BtnBackForPage";
import ArrowSvg from "../ArrowSvg";
import bag from '../../assets/imgs/bagNotFound.png'

const MyBagFound = () => {
  return (
    <div>
        <BtnBackForPage
        svg={<ArrowSvg color="var(--Primary)" direction="left" />}
        text="Search results" 
        />
    </div>
  )
}

export default MyBagFound