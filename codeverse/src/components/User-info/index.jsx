import { useContext, useState, useEffect } from "react";

import { AuthContext } from "../../contexts/Auth";

import styles from './styles.module.scss'
import ArrowSvg from "../ArrowSvg";


const UserInfo = ({type}) => {
  const { user } = useContext(AuthContext);
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [ddd, setDdd] = useState("");
  const [number, setNumber] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
      setDdd(user.ddd);
      setNumber(user.number);
      setAvatar(user.avatar);
    }
  }, [user]);

  return (
    <>
      { type === 'BasicInfo' &&
        <div className={styles.containerSmall}>
          
          <div className={styles.box}>
            <img src={avatar} alt="User Avatar" />
            <span>Hello, {firstName}</span>
          </div>

          <ArrowSvg color='var(--Dark)'/>
        </div>
      }

      { type === 'FullInfo' &&
        <div className={styles.containerBig}>
          <img src={avatar} alt="User Avatar" />

          <div className={styles.infos}>
            <span className={styles.name}>{firstName} {lastName}</span>
            <span className={styles.emailAndNumber}>{email}</span>
            <span className={styles.emailAndNumber}> +{ddd} {number}</span>
          </div>

          <ArrowSvg color='var(--TypeLowEmphasis)'/>
        </div>
      }
    </>
  )
}

export default UserInfo