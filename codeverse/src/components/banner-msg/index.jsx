import { Link } from "react-router-dom";
import styles from "./styles.module.scss"

const BannerMsg = () => {
  return (
    <div className={styles.banner}>
        <p>We are currently experiencing local customs clearance delays. 
           For the latest updates, please check your order status <Link className={styles.link}>here</Link>
        </p>
    </div>
  )
}

export default BannerMsg;