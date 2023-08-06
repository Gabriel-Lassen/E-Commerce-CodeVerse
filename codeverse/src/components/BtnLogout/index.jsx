import styles from './styles.module.scss'
import imgLogout from '../../assets/imgs/logout.png'
import { useContext } from 'react';
import {AuthContext} from '../../contexts/Auth'

const Logout = () => {
const {logout}  = useContext(AuthContext)

async function handleLogout() {
    await logout()
}

  return (
    <button  onClick={handleLogout} className={styles.logout}>
        <img src={imgLogout} alt="" />
        Logout
    </button>
  )
}
export default Logout