import arrow from "../../../assets/imgs/icon-arrow.svg";
import styles from "./styles.module.scss";

const InviteAFriend = () => {
  return (
    <div className={styles.container}>
      <h1>Invite Friends & Earn</h1>
      <p>Get up to 100 reward points for every friend you invite</p>
      <img src="" alt="" />
      <button>
        <p>Invite Now</p>
        <img src={arrow} alt="" />
      </button>
    </div>
  );
};

export default InviteAFriend;
