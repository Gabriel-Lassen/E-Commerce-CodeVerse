import styles from "../Refer-Earn/styles.module.scss";
import imgRE from "../../assets/imgs/Refer&Earn.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/Auth";

const ReferandEarn = () => {
  const { user } = useContext(AuthContext);
  const [inviteCode, setInviteCode] = useState('');

  useEffect(() => {
    if(user){
      setInviteCode(user.inviteCode);
    }
  }, [user])

  return (
    <div className={styles.container}>
      <img src={imgRE} alt="" />
      <div className={styles.invite}>
        <p>Invite your friend and earn $20 on every invite</p>
      </div>
      <button className={styles.boxcode} onClick={() => {navigator.clipboard.writeText(inviteCode)}}>
        <span>{inviteCode}</span>
      </button>
      <div className={styles.copycode}>
        <p>Tap to copy the code.</p>
      </div>
      <div className={styles.content}>
        <div className={styles.tittle}>
          <h3>How does this works?</h3>
        </div>
        <div className={styles.text}>
          <ul>
            <li>Invite your friends to CORAL</li>
            <li>
              Ask your friends to place their order with your code & get $20
              discount
            </li>
            <li>Once the order gets delivered you get the discount as well.</li>
          </ul>
        </div>
        <button className={styles.button}>Invite now</button>
      </div>
    </div>
  );
};

export default ReferandEarn;
