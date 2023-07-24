import arrow from "../../../assets/imgs/arrow.svg";
import styles from "./styles.module.scss";
import rectangle from "../../../assets/imgs/rectangle.png";

const InviteAFriend = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Invite Friends & Earn</h1>
        <p>Get up to 100 reward points for every friend you invite</p>

        <button>
          Invite Now
          <img src={arrow} alt="" />
        </button>
      </div>
      <img src={rectangle} alt="" />
    </div>
  );
};

export default InviteAFriend;
