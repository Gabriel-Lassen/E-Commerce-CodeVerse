import Footer from '../footer'
import DropdowBtn from '../DropdowBtn'
import styles from "./styles.module.scss";

const ShowFooter = () => {
  return (
    <div>
        <div className={styles.web}>
        <Footer />
        </div>
        
        <div className={styles.mobile}>
        <DropdowBtn title='More about CORA’L' footer='footer'>
            <Footer />
        </DropdowBtn>
        </div>
    </div>
  )
}

export default ShowFooter