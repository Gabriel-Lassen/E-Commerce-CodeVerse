import styles from './styles.module.scss'
import imgLogout from '../../assets/imgs/logout.png'

const Logout = () => {
  return (
    <div className={styles.aaa}>
        <img src={imgLogout} alt="" />
        <button>Logout</button>
    </div>
  )
}

export default Logout