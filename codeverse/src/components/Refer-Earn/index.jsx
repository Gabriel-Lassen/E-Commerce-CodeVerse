import styles from "../Refer-Earn/styles.module.scss";
import imgRE from "../../assets/imgs/Refer&Earn.png";

const ReferandEarn = () => {
  return (
    <div className={styles.container}>
      <img src={imgRE} alt="" />
      <div className={styles.invite}>
        <p>Invite your friend and earn $20 on every invite</p>
      </div>
      <div className={styles.boxcode}>
        <input type="text" />
      </div>
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
